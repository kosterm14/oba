<script>
	import { LinkButton, LogoBlue } from '$lib/index.js';

	function navigateTo(url) {
        window.location.href = url;
    }
</script>

<footer>
	<article>
		<nav>
			<button on:click={() => navigateTo('/')}>Home</button>
            <button on:click={() => navigateTo('/leeslijst')}>Leeslijst</button>
            <button on:click={() => navigateTo('/uitleningen')}>Uitleningen</button>
            <button on:click={() => navigateTo('/reserveringen')}>Reserveringen</button>
            <button on:click={() => navigateTo('/betalingen')}>Betalingen</button>
		</nav>
	</article>
	<article>
		<button on:click={() => navigateTo('/')}>
            <img src={LogoBlue} alt="oba logo" width="200" />
        </button>
	</article>
</footer>

<style>
	footer {
		width: 100%;
		height: max-content;
		display: flex;
		flex-direction: column;
		background-color: var(--primary-dark-color);
		padding: 1rem;
		margin-top: 2rem;
	}

	footer article {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}

	nav, button {
		display: flex;
		flex-direction: column;
	}

	nav a {
		text-decoration: none;
		color: var(--primary-light-color);
		padding: 0.5rem 0;
	}

	button {
		background-color: transparent;
		border: none;
		color: var(--primary-light-color);
		cursor: pointer;
		padding: 0.5rem 0;
		font-size: 1rem;
	}

	@media only screen and (min-width: 45rem) {
		footer {
			display: flex;
			justify-content: space-around;
			flex-direction: row;
		}
	}
</style>
