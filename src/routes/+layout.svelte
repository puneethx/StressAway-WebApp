<script>
    import {onMount} from "svelte"
    import {auth} from "$lib/firebaseConfig"
    onMount (() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log(user)
        })
    })
</script>
<slot/>
