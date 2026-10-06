<script>
	import { getContext } from "svelte";
	import Level from "$components/Level.svelte";

	const copy = getContext("copy");

	const levels = copy.levels.filter((d) => d.speaker);
	let levelI = $state(0);
	let currentLevel = $derived(levels[levelI]);
</script>

<article>
	<h1>{@html copy.title}</h1>

	<div class="intro">
		{#each copy.intro as { value }}
			<p>{@html value}</p>
		{/each}
	</div>

	<Level bind:i={levelI} total={10} data={currentLevel} />
</article>

<style>
	article {
		max-width: 480px;
		margin: 0 auto;
	}

	h1 {
		text-align: center;
		line-height: 120%;
		font-weight: 300;
		margin: 1rem 0 3rem 0;
	}

	.intro {
		text-align: center;
		margin-bottom: 5rem;
	}
</style>
