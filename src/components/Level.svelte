<script>
	import Map from "$components/Map.svelte";
	import Button from "$components/ui/Button.svelte";
	import Speaker from "$components/Speaker.svelte";
	import Sound from "$components/Sound.svelte";

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

<Speaker {speaker} />

<Map {i} {answer} {hints} onsubmit={() => (guessed = true)} />

{#if guessed}
	{#each post as { value }}
		<p>{@html value}</p>
	{/each}

	<div class="tease">
		<div>
			<div class="lead">What the heck does that mean?</div>
			<div class="scroll">Scroll down to learn more</div>
		</div>

		<Button style={"background: #02D1FF; color: var(--color-bg)"} onclick={next}
			>Next accent</Button
		>
	</div>

	<Speaker {speaker} />

	<p>Both of these words share a vowel, like the vowel in GOAT.</p>

	<p>
		See how you say it. Try saying <strong>“oh”</strong> a few times, very slowly.
		Does your vowel have 1 sound, like the example on the left, or 2 sounds?
	</p>

	<div>
		<Sound label="oh" id="oh-1" />
		<Sound label="oh" id="oh-2" />
	</div>

	<p>
		A vowel with 1 sound is called a <strong>monophthong</strong>. Your lips and
		tongue don’t move, and the vowel stays completely the same while you say it.
	</p>

	<div>
		<Sound label="boot" id="boot" />
		<Sound label="bus" id="bus" />
	</div>

	<p>
		If the vowel contains 2 sounds, it’s called a <strong>diphthong</strong>.
	</p>

	<div>
		<Sound label="ice" id="ice" />
		<Sound label="ate" id="ate" />
	</div>

	<p>
		A hallmark of the stereotypical Minnesota accent is that monophthongal GOAT
		vowel.
	</p>

	<p>
		And it’s no coincidence. Swedish and Norwegian both have lots of
		monophthongal vowels. The way English was spoken in those regions was
		established by those immigrants settling in the Upper Midwest in the 19th
		and 20th centuries. Linguists believe that this contributed to this region
		standing out as an exception in a sea of diphthongal GOAT pronunciation.
	</p>

	<Button
		style={"background: #02D1FF; color: var(--color-bg)"}
		onclick={next}
		disabled={i >= total - 1}>Next accent</Button
	>
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

	.tease {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;
		padding: 4rem 0;
	}

	.lead {
		font-size: 1.2rem;
		font-weight: bold;
	}

	.scroll {
		color: var(--color-gray-400);
		font-weight: bold;
	}
</style>
