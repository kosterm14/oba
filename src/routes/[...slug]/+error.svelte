<script>
    import { page } from '$app/stores';
</script>

    <main>
        <h1>{$page.error.message}</h1>
        <p>Deze pagina bestaat niet</p>
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
</style>