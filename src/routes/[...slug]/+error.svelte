<script>
	import { page } from '$app/stores';

	function goBack() {
		window.history.back();
	}

	function navigateTo(url) {
		window.location.href = url;
	}
</script>

<body>
	<main>
		<h1>Oeps, deze pagina bestaat niet</h1>
		<section>
			<p>
				Ga terug naar de <button on:click={() => navigateTo('/')}>homepage</button> of gebruik de zoekfunctie.
			</p>

			<p>
				Je kunt natuurlijk ook altijd
				<button on:click={() => navigateTo('/chatbot')}>contact</button> met ons opnemen.
			</p>
		</section>
		<button class="backButton" on:click={goBack}>Terug naar de vorige pagina</button>
	</main>
</body>

<style>
	h1,
	p,
	button {
		font-family: 'Poppins', sans-serif;
	}

	p {
		max-width: 60ch;
		margin: 0;
	}

    body {
        background-color: #f2f5ff;
    }

	main {
		margin-top: 5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.backButton {
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		color: #fff;
		background-color: #0064c8;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		text-decoration: none;
	}

	.backButton:hover {
		background-color: #0051a8;
	}

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		padding: 0.5rem 0;
		font-size: 1rem;
		text-decoration: underline;
	}
</style>