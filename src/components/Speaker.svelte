<script>
	import playSvg from "$svg/play.svg";

	let { speaker } = $props();

	let audioEl = $state();
	let currentTime = $state(0);

	const words = [
		0.1, 0.5, 0.9, 1.3, 1.4, 1.45, 1.5, 1.8, 2, 2.2, 2.5, 2.75, 3.1, 3.25
	];
</script>

<div class="speaker">
	<button class="play" onclick={() => audioEl.play()}>
		{@html playSvg}
	</button>
	<audio bind:this={audioEl} bind:currentTime src="assets/sound/minnesota.m4a"
	></audio>

	<div class="text">
		{#each speaker.split(" ") as word, index}
			<span class="word" class:visible={currentTime >= words[index]}
				>{word + " "}</span
			>
		{/each}
	</div>
</div>

<style>
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

	.speaker {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.5rem;
		margin-bottom: 2rem;
	}

	.text {
		font-style: italic;
		font-size: 2rem;
	}

	.word {
		opacity: 0.1;
	}

	.word.visible {
		opacity: 1;
	}
</style>
