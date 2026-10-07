<script>
	import Map from "$components/Map.svelte";
	import Button from "$components/ui/Button.svelte";
	import Speaker from "$components/Speaker.svelte";
	import Expert from "$components/Expert.svelte";
	import Comparison from "$components/Comparison.svelte";
	import Sound from "$components/Sound.svelte";

	let { i = $bindable(), total, data } = $props();

	let {
		id,
		pre,
		post,
		speaker,
		answer,
		hints,
		explanation,
		tease,
		scroll,
		deep
	} = $derived(data);

	let played = $state(false);
	let guessed = $state(false);
	let openedDeepDive = $state(false);

	const components = {
		Speaker,
		Expert,
		Comparison
	};

	const next = () => {
		// i += 1;
		// guessed = false;
		// openedDeepDive = false;
	};
</script>

<div class="pre">
	{#each pre as { value }}
		<p>{@html value}</p>
	{/each}
</div>

<Speaker {speaker} {i} {total} bind:played />

{#if post}
	<div class="post">
		{#each post as { value }}
			<p>{@html value}</p>
		{/each}
	</div>
{/if}

<Map {i} {answer} {hints} onsubmit={() => (guessed = true)} />

<div class="reveal" class:visible={guessed}>
	<div class="explanation">
		{#each explanation as { type, value }}
			{@const C = components[type]}
			{#if type === "Speaker"}
				<Speaker {speaker} {i} {total} {...value} />
			{:else if C}
				<C {...value} />
			{:else if type === "text"}
				<p>{@html value}</p>
			{/if}
		{/each}
	</div>

	<div class="tease">
		{#each tease as { value }}
			<p>{@html value}</p>
		{/each}
	</div>

	<div class="next">
		<div class="scroll">{@html scroll}</div>

		<div class="move-on">
			<div>Or move on to accent #{i + 2}</div>
			<Button
				style={"background: var(--color-accent); text-transform: uppercase; color: var(--color-bg)"}
				onclick={next}>Next accent</Button
			>
		</div>
	</div>
</div>

<style>
	.pre {
		font-size: 1.5rem;
		text-align: center;
	}

	.post {
		text-align: center;
		margin: 2rem 0;
	}

	.reveal {
		display: none;
	}

	.visible {
		display: block;
	}

	.tease p {
		font-size: var(--24px);
	}

	:global(.tease p strong) {
		color: var(--color-accent);
	}

	.next {
		display: flex;
		gap: 1rem;
	}

	.scroll {
		color: var(--color-gray-300);
	}

	.move-on {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 0.5rem;
	}
</style>
