<script>
    export let data; // Assuming this is your search data

    const results = data.results
    import { Card, Header} from '$lib/index.js'

	import { onMount } from 'svelte';
    
	onMount(() => {
	});
</script>

<header>
    <Header />
    <!-- menu  -->
</header>

<h1>Zoekresultaten: </h1>
<main>
    <section>
        {#if results.length > 0}
            {#each results as result}
            <a href={result.detailLink}>
                <Card             
                    bookAuthor={result.authors[0]}
                    bookTitle={result.frabl.key1}
                    bookUrl={result.coverimages[0]}
                    />
            </a>
            {/each}
        {:else}
            <p>Geen resultaten gevonden</p>
        {/if}
    </section>

</main>

<style>
    h1 {
        padding: 2rem;
    }

    section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
        justify-items: center;
    }

    a {
        display: block;
        margin-left: 1rem;
    }

    /* tablet breakpoint */
@media (min-width: 40em) {

    section {
        gap: 2rem;
        padding: 2rem;
    }
}
</style>
