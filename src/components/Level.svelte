<script>
	import Map from "$components/Map.svelte";
	import Button from "$components/ui/Button.svelte";
	import playSvg from "$svg/play.svg";

	let { i = $bindable(), total, data } = $props();

	let { pre, speaker, answer, hints, post, deepDive } = $derived(data);

	let guessed = $state(false);
	let openedDeepDive = $state(false);

	const next = () => {
		i += 1;
		guessed = false;
		openedDeepDive = false;
	};
</script>

<div class="pre">
	{#each pre as { value }}
		<p>{@html value}</p>
	{/each}
</div>

<div class="counter">Accent #{i + 1} of {total}</div>

<div class="speaker">
	<button class="play">
		{@html playSvg}
	</button>

	<div class="text">{@html speaker}</div>
</div>

<Map {i} {answer} {hints} onsubmit={() => (guessed = true)} />

{#if guessed}
	{#each post as { value }}
		<p>{@html value}</p>
	{/each}

	<Button
		style={"background: #02D1FF; color: var(--color-bg)"}
		onclick={next}
		disabled={i >= total - 1}>Next accent</Button
	>

	{#each deepDive as { value }}
		<p>{@html value}</p>
	{/each}
{/if}

<style>
	.pre {
		font-size: 1.5rem;
	}

	.counter {
		text-transform: uppercase;
		font-size: 0.75rem;
		margin-top: 2rem;
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
</style>
