<script>
   import Logo from "$lib/assets/logosr.png";

</script>


<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<header class = "header sticky sticky--top js-header" id="myHeader">
    <div class="grid">
        <nav class="navbar container">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={Logo} class = "nav-link "alt="download icon"/></nav>

        <ul class="nav-list nav_list-inline" id="list">
            <a href = "/" class="nav-item">
                <a href="/" class="nav-link">Home</a>
            </a>
            <a href = "/journal" class="nav-item">
                <a href="/journal" class="nav-link">Journal</a> 
            </a>
            <a href = "/about" class="nav-item">
                <a href="/about" class="nav-link">About</a>
            </a>
            <a href = "/" class="nav-item">
                <a href="/" class="nav-link">Contact Us</a>
            </a>
            <div class="active"></div>
        </ul>
</div>
</header>

<style>
/* General styles */
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

  a {
    text-decoration: none;
    color: inherit;
  }

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
  
  

  .container {
    max-width: 50rem;
    margin-left: 58px;
    margin-top: 18px;
    margin-right: 48px;
    padding-inline: 2rem;
    color: white;    
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 1.5rem;
  }
  .nav-list {
    position: relative;
    display: flex;
    list-style: none;
      float: right;
      margin-top: -5%;
      margin-right: 5%;
      color: #111111;
  }
  .nav_list-inline{
    display: flex;
  }
  
  .nav-item {
    min-width: 8rem;
    text-align: center;
    padding-block: 0.5rem;
    font-size: large;
    padding: 0%;
  }
  
  .nav-link {
    height: 20%;
      width: 20%;
  }

  .active {
    position: absolute;
    border-radius: 10rem;
    bottom: -1rem;
    left: 1rem;
    height: 3px;
    width: 6rem;
    background-color: #63CCAB;
    transition: transform 0.25s;
  }
  .nav-item:nth-child(2):hover ~ .active {
    transform: translateX(8.0125rem);
  }
  .nav-item:nth-child(3):hover ~ .active {
    transform: translateX(16.0025rem);
  }
  .nav-item:nth-child(4):hover ~ .active {
    transform: translateX(24rem);
  }
  .container {
    max-width: 110rem;
    padding: 1.5rem;
  }

</style>