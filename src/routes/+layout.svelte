<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Allura&display=swap">
</svelte:head>

<slot></slot>

<script>
    import bg_image from '$lib/images/blurry-gradient-haikei.svg';
    import '../global.css';
</script>

<style>
    :root {
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        box-sizing: border-box;
        height: 100%;
        --bella-primary: #4D0B62;
        --bella-secondary: #FDBE72;
        --bella-secondary2: #c9c1ca;
        background-image: url('$lib/images/triangle-background.webp');
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        
    }

    
</style>

