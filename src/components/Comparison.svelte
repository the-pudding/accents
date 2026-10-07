<script>
	let { content } = $props();

	let width = $state(0);
	let height = $state(0);

	const wiggle = 12; // room for the wiggle to move side to side
	const amp = 2.5; // max horizontal drift in px
	const jitteriness = 3;

	// random points down the line, smoothed into a curve
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

	<div class="label" style="color: var(--color-accent)">The Same</div>
	<div class="label">Different</div>

	{#each content as { type, value }}
		{#if type === "text"}
			<p class="full-width">{@html value}</p>
		{:else if type === "Buttons"}
			<div class="buttons">
				{#each value.words as word}
					<button class="word">{@html word}</button>
				{/each}
			</div>

			<div class="buttons">
				{#each value.words as word}
					<button class="word">{@html word}</button>
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
