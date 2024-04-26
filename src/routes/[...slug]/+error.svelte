<script>
	import { page } from '$app/stores';

	function goBack() {
		window.history.back();
	}	

	function navigateTo(url) {
		window.location.href = url;
	}

	let pathParts = $page.url.pathname.split('/').filter(Boolean);

	function isCurrentPage(index) {
		return index === pathParts.length - 1;
	}
</script>

<body>
	<nav>
		<ul>
			<li>
				<button class="breadcrumbs {pathParts.length === 0 ? 'current' : ''}" on:click={() => navigateTo('/')}>home</button>
			</li>
			{#each pathParts as part, index (index)}
				<li>
					<button
						class="breadcrumbs {isCurrentPage(index) ? 'current' : ''}"
						on:click={() => navigateTo(`/${pathParts.slice(0, index + 1).join('/')}`)}
						>{part}</button
					>
				</li>
			{/each}
		</ul>
	</nav>

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
	button,
	nav {
		font-family: 'Poppins', sans-serif;
	}

	p {
		max-width: 60ch;
		margin: 0;
	}

	body {
		background-color: #f2f5ff;
	}

	nav {
		width: fit-content;
	}

	ul {
		display: flex;
	}

	li {
		list-style-type: none;
		padding: 0.3rem;
	}

	li:not(:first-child)::before {
    content: ' > ';
    font-size: 1.5rem;
}

	main {
		margin-top: 5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 90vh;
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

	.breadcrumbs {
		color: #0051a8;
		text-decoration: none;
		font-size: 1.5rem;
	}

	.current {
		font-weight: bold;
		color: #222222;
	}
</style>
