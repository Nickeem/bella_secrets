<script>
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Bella Secrets Home Page" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Allura&display=swap">
</svelte:head>

<section>
    <h1>Bella Secrets</h1>
    <a href="/inventory">View inventory</a>
</section>

<style>

    a {
        text-decoration: none;
        color: #000;
        padding: 14px;
        border: black solid 1px;
        background-color: white;
    }

    a:hover {
        background-color: var(--bella-secondary);

    }
    
    section {
        margin-top: 20%;
        text-align: center;
    }
    
    h1 {
        color: var(--bella-secondary);
        font-family: 'Allura', cursive;
        font-size: 80px;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }
</style>