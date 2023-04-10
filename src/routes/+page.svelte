<script>
    import Header from "$lib/header.svelte";
    import Login from "$lib/login.svelte";
    import Mainphoto from "$lib/mainlogo.svelte";
    import Appadv from "$lib/appAd.svelte";
    import Footer from "$lib/footer.svelte";
</script>

<slot></slot>

<Header/>
<Login/>
<Mainphoto/>
<Appadv/>
<Footer/>


