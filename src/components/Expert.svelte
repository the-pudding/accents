<script>
	let { id, content } = $props();
</script>

<div class="expert" class:flipped={id === "nicole"}>
	<div class="person">
		<img alt="cartoon person" src={`assets/img/person.png`} />
		<div class="label">{id === "erik" ? "erik" : "dr. holiday"}</div>
	</div>

	<div class="content">
		{#each content as { value }}
			<p>{@html value}</p>
		{/each}
	</div>
</div>

<style>
	.expert {
		display: flex;
		align-items: start;
		gap: 2rem;
	}

	.flipped {
		flex-direction: row-reverse;
	}

	.expert:not(.flipped) img {
		transform: scaleX(-1);
	}

	.person {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		flex-shrink: 0;
	}

	.label {
		text-align: center;
	}

	.content p:first-child {
		margin-top: 0;
	}
</style>
