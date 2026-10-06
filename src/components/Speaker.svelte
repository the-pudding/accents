<script>
	import playSvg from "$svg/play.svg";

	let { speaker, i, total, played = $bindable() } = $props();

	let audioEl = $state();
	let currentTime = $state(0);
	let speed = $state("normal");
</script>

<div class="speaker">
	<audio
		bind:this={audioEl}
		bind:currentTime
		src="assets/sound/minnesota.m4a"
		onended={() => (played = true)}
	></audio>

	<div class="row" style="width: 100%; justify-content: space-between">
		<div class="col">
			<div class="label">Accent #{i + 1} of {total}</div>

			<div class="row">
				<button class="play" onclick={() => audioEl.play()}>
					{@html playSvg}
				</button>

				<div>Play Audio</div>
			</div>
		</div>

		<div class="col">
			<div class="label">Speed</div>
			<div class="row buttons">
				<button
					class="speed"
					class:selected={speed === "normal"}
					onclick={() => (speed = "normal")}>Normal</button
				>
				<button
					class="speed"
					class:selected={speed === "slow"}
					onclick={() => (speed = "slow")}>Slow</button
				>
			</div>
		</div>
	</div>

	<div class="phrase">
		{#each speaker.split(" ") as word, index}
			<span class="word">{word + " "}</span>
		{/each}
	</div>
</div>

<style>
	.speaker {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 3rem 0;
	}

	button.play {
		display: flex;
		align-items: center;
		gap: 1rem;
		text-transform: uppercase;
		white-space: nowrap;
		padding: 0;
		margin: 0.5rem 0;
	}

	:global(button.play svg) {
		height: 100%;
		width: 100%;
	}

	.col {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.buttons {
		display: flex;
		gap: 1rem;
	}

	button.speed {
		margin: 0.5rem 0;
		padding: 0;
		background: none;
		color: var(--color-gray-400);
	}

	button.speed.selected {
		color: var(--color-fg);
	}

	.phrase {
		display: flex;
		gap: 6px;
		flex-wrap: wrap;
	}
</style>
