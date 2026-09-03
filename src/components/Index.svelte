<script>
	import { getContext } from "svelte";
	import Level from "$components/Level.svelte";

	const copy = getContext("copy");

	let levelI = $state(0);
	let currentLevel = $derived(copy.levels[levelI]);
</script>

<article>
	<Level bind:i={levelI} total={copy.levels.length} data={currentLevel} />
</article>

<style>
	article {
		max-width: 600px;
		margin: 0 auto;
	}
</style>
