<script>
	import Map from "$components/Map.svelte";
	import Button from "$components/ui/Button.svelte";

	let { i = $bindable(), total, data } = $props();

	let { pre, speaker, answer, post, deepDive } = $derived(data);

	let guessed = $state(false);
	let openedDeepDive = $state(false);

	const next = () => {
		i += 1;
		guessed = false;
		openedDeepDive = false;
	};
</script>

<h3>Accent {i + 1} of {total}</h3>

{#if !guessed}
	{#each pre as { value }}
		<p>{@html value}</p>
	{/each}

	<strong>{@html speaker}</strong>
{/if}

<Map {i} {answer} onsubmit={() => (guessed = true)} />

{#if guessed}
	{#each post as { value }}
		<p>{@html value}</p>
	{/each}

	{#if openedDeepDive}
		{#each deepDive as { value }}
			<p>{@html value}</p>
		{/each}
	{:else}
		<Button onclick={() => (openedDeepDive = true)}>Learn more</Button>
	{/if}

	<Button onclick={next}>Next</Button>
{/if}
