<script>
	import Map from "$components/Map.svelte";
	import Button from "$components/ui/Button.svelte";
	import Speaker from "$components/Speaker.svelte";
	import Expert from "$components/Expert.svelte";
	import Sound from "$components/Sound.svelte";

	let { i = $bindable(), total, data } = $props();

	let { id, pre, post, speaker, answer, hints, explanation, deep } =
		$derived(data);

	let played = $state(false);
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

<Speaker {speaker} {i} {total} bind:played />

{#if post}
	<div class="post">
		{#each post as { value }}
			<p>{@html value}</p>
		{/each}
	</div>
{/if}

<Map {i} {answer} {hints} onsubmit={() => (guessed = true)} />

<div class="explanation" class:visible={guessed}>
	{#each explanation as { type, value }}
		{#if type === "text"}
			<p>{@html value}</p>
		{:else if type === "Speaker"}
			<Speaker {speaker} {i} {total} />
		{:else if type === "Expert"}
			<Expert id={value.id} content={value.content} />
		{/if}
	{/each}
</div>

<!-- <Button
	style={"background: #02D1FF; color: var(--color-bg)"}
	onclick={next}
	disabled={i >= total - 1}>Next accent</Button
> -->

<style>
	.pre {
		font-size: 1.5rem;
		text-align: center;
	}

	.post {
		text-align: center;
		margin: 2rem 0;
	}

	.explanation {
		visibility: hidden;
	}

	.visible {
		opacity: 1;
		visibility: visible;
	}
</style>
