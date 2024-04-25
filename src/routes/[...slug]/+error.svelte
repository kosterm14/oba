<script>
	import { page } from '$app/stores';

	function goBack() {
		window.history.back();
	}
</script>

<main>
	<h1>Oeps, deze pagina bestaat niet</h1>
	<p>De pagina <em>"{$page.url.pathname}"</em> bestaat niet</p>
	<button on:click={goBack}>Terug naar de vorige pagina</button>
</main>

<style>
	h1,
	p {
		font-family: 'Poppins', sans-serif;
	}

	main {
		margin-top: 5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	button {
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		color: #fff;
		background-color: #0064c8;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:hover {
		background-color: #0051a8;
	}

    em {
        color: #0064c8;
    }
</style>
