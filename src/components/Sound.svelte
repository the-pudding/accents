<script>
	let { id, label } = $props();

	let audioEl = $state();
</script>

<button onclick={audioEl.play()}>{label}</button>

<audio bind:this={audioEl} src={`assets/sound/${id}.m4a`}></audio>

<style>
	button {
		background: var(--color-fg);
		color: var(--color-bg);
	}
</style>
