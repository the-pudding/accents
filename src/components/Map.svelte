<script>
	import { onMount, onDestroy } from "svelte";
	import { browser } from "$app/environment";
	import { geoCentroid, geoContains } from "d3";
	import Button from "$components/ui/Button.svelte";
	import { setGuess } from "$runes/guesses.svelte.js";
	import usStates from "$data/us-states.json";
	import usRegions from "$data/us-regions.json";

	let { i, answer, onsubmit = () => {} } = $props();

	const CENTER = [45, -100];
	const INITIAL_ZOOM = 3;
	const BOUNDS = [
		[5, -170],
		[75, -50]
	];
	const METERS_TO_MILES = 0.000621371;
	const DEFAULT_CITY_RADIUS_MILES = 50;
	const CLOSE_THRESHOLD = 200;

	const ANSWER_SOURCES = { state: usStates, region: usRegions };

	let mapEl;
	let map;
	let L;
	let roundLayer;
	let marker;
	let selected = $state(null);
	let locked = $state(false);
	let result = $state(null);

	function resetRound() {
		selected = null;
		locked = false;
		result = null;
		marker = null;
		roundLayer?.clearLayers();
		map?.setView(CENTER, INITIAL_ZOOM);
	}

	// a new `i` means we've moved to a new accent — wipe the previous guess/reveal
	$effect(() => {
		i;
		resetRound();
	});

	function bearing(lat1, lng1, lat2, lng2) {
		const toRad = (d) => (d * Math.PI) / 180;
		const toDeg = (r) => (r * 180) / Math.PI;
		const dLng = toRad(lng2 - lng1);
		const y = Math.sin(dLng) * Math.cos(toRad(lat2));
		const x =
			Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
			Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLng);
		return (toDeg(Math.atan2(y, x)) + 360) % 360;
	}

	// resolves an answer of any type to a target point plus a same-place test,
	// so the reveal logic below doesn't need to know how each type is defined
	function resolveTarget(answer) {
		if (answer.type === "city") {
			const point = { lat: Number(answer.lat), lng: Number(answer.lng) };
			const radiusMiles = answer.radiusMiles ?? DEFAULT_CITY_RADIUS_MILES;
			return {
				...point,
				isMatch: (guess) =>
					map.distance(guess, point) * METERS_TO_MILES <= radiusMiles
			};
		}

		const source = ANSWER_SOURCES[answer.type];
		const feature = source?.features.find(
			(f) => f.properties.name === answer.value
		);
		if (!feature) return null;

		const [lng, lat] = geoCentroid(feature);
		return {
			lat,
			lng,
			isMatch: (guess) => geoContains(feature, [guess.lng, guess.lat])
		};
	}

	function reveal(guess) {
		const target = resolveTarget(answer);
		if (!target) return;

		L.circleMarker(target, {
			radius: 10,
			color: "#228833",
			fillColor: "#228833",
			fillOpacity: 1
		}).addTo(roundLayer);

		let correct = false;
		let miles = null;

		if (guess) {
			correct = target.isMatch(guess);
			miles = map.distance(guess, target) * METERS_TO_MILES;

			const lineColor =
				getComputedStyle(mapEl).getPropertyValue("--color-primary").trim() ||
				"#000";
			L.polyline([guess, target], { color: lineColor, weight: 2 }).addTo(
				roundLayer
			);

			const mid = {
				lat: (guess.lat + target.lat) / 2,
				lng: (guess.lng + target.lng) / 2
			};
			const angle = bearing(guess.lat, guess.lng, target.lat, target.lng);
			L.marker(mid, {
				icon: L.divIcon({
					className: "guess-arrow",
					html: `<div class="arrow" style="transform: rotate(${angle}deg)"></div>`,
					iconSize: [16, 16],
					iconAnchor: [8, 8]
				}),
				interactive: false
			}).addTo(roundLayer);
		}

		const outcome = { answer: answer.value, correct, miles };
		result = outcome;
		map.flyTo(CENTER, INITIAL_ZOOM);
		return outcome;
	}

	onMount(async () => {
		if (!browser) return;

		L = (await import("leaflet")).default;
		await import("leaflet/dist/leaflet.css");

		// bundlers break leaflet's default marker icon paths; point them at the built assets
		const iconRetina = (await import("leaflet/dist/images/marker-icon-2x.png"))
			.default;
		const icon = (await import("leaflet/dist/images/marker-icon.png")).default;
		const shadow = (await import("leaflet/dist/images/marker-shadow.png"))
			.default;
		delete L.Icon.Default.prototype._getIconUrl;
		L.Icon.Default.mergeOptions({
			iconRetinaUrl: iconRetina,
			iconUrl: icon,
			shadowUrl: shadow
		});

		map = L.map(mapEl, {
			// the site's global `svg { width: 100%; height: auto }` reset breaks leaflet's
			// SVG vector overlay, so render circles/lines on canvas instead
			renderer: L.canvas(),
			center: CENTER,
			zoom: INITIAL_ZOOM,
			minZoom: 2,
			maxBounds: BOUNDS,
			maxBoundsViscosity: 1
		});

		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			maxZoom: 10
		}).addTo(map);

		roundLayer = L.layerGroup().addTo(map);

		map.on("click", (e) => {
			if (locked) return;
			selected = { lat: e.latlng.lat, lng: e.latlng.lng };
			if (marker) {
				marker.setLatLng(e.latlng);
			} else {
				marker = L.marker(e.latlng).addTo(roundLayer);
			}
		});
	});

	onDestroy(() => {
		map?.remove();
	});

	function handleSubmit() {
		if (!selected) return;
		locked = true;
		const outcome = reveal(selected);
		setGuess(i, { ...selected, ...outcome });
		onsubmit(selected);
	}

	function handleNoIdea() {
		locked = true;
		selected = null;
		if (marker) {
			marker.remove();
			marker = null;
		}
		const outcome = reveal(null);
		setGuess(i, { lat: null, lng: null, ...outcome });
		onsubmit(null);
	}

	$inspect({ result });
</script>

<p>Choose a location on the map:</p>
<div class="map" bind:this={mapEl}></div>
<div class="actions">
	<Button variant="secondary" disabled={locked} onclick={handleNoIdea}>
		I truly have no idea
	</Button>
	<Button
		variant="primary"
		disabled={locked || !selected}
		onclick={handleSubmit}>Submit</Button
	>
</div>

{#if result}
	<p class="result">
		{#if result.correct}
			Correct! It's {result.answer}.
		{:else if result.miles && result.miles <= CLOSE_THRESHOLD}
			Close! They're from {result.answer}, you were {Math.round(result.miles)} miles
			away.
		{:else if result.miles}
			Nice try! They're from {result.answer}, you were {Math.round(
				result.miles
			)} miles away.
		{:else}
			The answer was {result.answer}.
		{/if}
	</p>
{/if}

<style>
	.map {
		width: 100%;
		height: 400px;
		border-radius: var(--radius-md);
		z-index: var(--z-base);
	}

	.actions {
		display: flex;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.result {
		margin-top: 1rem;
		font-weight: bold;
	}

	:global(.guess-arrow .arrow) {
		width: 0;
		height: 0;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		border-bottom: 14px solid var(--color-primary);
	}
</style>
