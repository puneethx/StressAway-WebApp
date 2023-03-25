<script>
    let src = "images/logosr.png";

</script>
<header class = "header sticky sticky--top js-header" id="myHeader">
    <div class="grid">

        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img {src} alt="Background image"/>
        <ul class="nav-list nav_list-inline" id="list">
            <li class="nav-item">
                <a href="/" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="Journal.html" class="nav-link">Journal</a>
            </li>
            <li class="nav-item">
                <a href="/" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="/" class="nav-link">Contact Us</a>
            </li>
            <div class="active"></div>
        </ul>
    
</div>
</header>

<style>
    .header {
    background-color: #ffffff;
      font-family: 'Poppins', sans-serif;
  }
  .header::after {
    bottom: 0;
    box-shadow: 0 0.0625em 0.5em rgba(0, 0, 0, 0.3);
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.3s;
    z-index: -1;
  }
  .header.is-active::after {
    opacity: 1;
  }
</style>