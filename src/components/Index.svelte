<script>
	import { getContext } from "svelte";
	import Level from "$components/Level.svelte";

	const copy = getContext("copy");

	const levels = copy.levels.slice(0, 1);
	let levelI = $state(0);
	let currentLevel = $derived(levels[levelI]);
</script>

<article>
	<Level bind:i={levelI} total={levels.length} data={currentLevel} />
</article>

<style>
	article {
		max-width: 600px;
		margin: 0 auto;
	}
</style>
