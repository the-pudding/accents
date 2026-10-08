<script>
	import { onMount } from "svelte";

	let { content } = $props();

	let width = $state(0);
	let height = $state(0);

	const wiggle = 12;
	const amp = 2.5;
	const jitteriness = 3;

	const path = $derived.by(() => {
		if (!height) return "";
		const mid = width / 2 - wiggle / 2;
		const pts = [[mid, 0]];
		let y = 0;
		while (y < height) {
			y = Math.min(y + jitteriness + Math.random(), height);
			pts.push([mid + (Math.random() * 2 - 1) * amp, y]);
		}
		let d = `M ${pts[0][0]} ${pts[0][1]}`;
		for (let i = 1; i < pts.length - 1; i++) {
			const [x, y] = pts[i];
			const [nx, ny] = pts[i + 1];
			d += ` Q ${x} ${y} ${(x + nx) / 2} ${(y + ny) / 2}`;
		}
		const [lx, ly] = pts[pts.length - 1];
		return d + ` L ${lx} ${ly}`;
	});

	onMount(() => {
		const buttonEls = document.querySelectorAll("button[data-sound-id]");
		buttonEls.forEach((button) => {
			// skip buttons that already have audio attached
			if (button.nextElementSibling?.tagName === "AUDIO") return;

			const audio = document.createElement("audio");
			audio.src = `assets/sound/${button.dataset.soundId}.m4a`;
			button.after(audio);

			button.addEventListener("click", () => {
				audio.currentTime = 0;
				audio.play();
			});
		});
	});
</script>

<div class="comparison">
	<svg
		class="wiggly-line"
		aria-hidden="true"
		bind:clientWidth={width}
		bind:clientHeight={height}
	>
		<path d={path} />
	</svg>

	<div class="label">The Same</div>
	<div class="label" style="color: var(--color-accent)">Different</div>

	{#each content as { type, value }}
		{#if type === "text"}
			<p class="full-width">{@html value}</p>
		{:else if type === "Buttons"}
			<div class="buttons">
				{#each value.words as word}
					<button
						class="word"
						onclick={(event) => {
							const button = event.currentTarget;
							const audio = button.nextElementSibling;
							if (audio) {
								audio.currentTime = 0;
								audio.play();
							}
						}}>{@html word}</button
					>
					<audio src={`assets/sound/${word.toLowerCase()}-merged.m4a`}></audio>
				{/each}
			</div>

			<div class="buttons">
				{#each value.words as word}
					<button
						class="word"
						onclick={(event) => {
							const button = event.currentTarget;
							const audio = button.nextElementSibling;
							if (audio) {
								audio.currentTime = 0;
								audio.play();
							}
						}}>{@html word}</button
					>
					<audio src={`assets/sound/${word.toLowerCase()}-unmerged.m4a`}
					></audio>
				{/each}
			</div>
		{/if}
	{/each}
</div>

<style>
	.comparison {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: -1;
	}

	.wiggly-line path {
		fill: none;
		stroke: var(--color-gray-500);
		stroke-width: 3px;
		stroke-linecap: round;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: start;
	}

	p.full-width {
		grid-column: span 2;
		background: var(--color-bg);
	}
</style>
