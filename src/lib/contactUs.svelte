<script>
    import Avatar1 from "$lib/assets/avatar1.png"
    import Avatar2 from "$lib/assets/avatar2.png"
    import Avatar3 from "$lib/assets/avatar3.jpg"
</script>
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<p class="fl">
    Contact Us
</p>

<nav class = "flex">
<div class="journaltxt">
    <nav class="container2">
        <div class = "imag">
          <img src={Avatar1} class="main-photo"alt="logo">
        </div>
        <div class="info">
          <p class="name">T Puneeth Reddy</p>
          <p class = "job">Web Developer</p>
          <nav class = "social"><div class = "gap"><form action="https://www.linkedin.com/in/puneeth-reddy-75069824b/" target="_blank">
            <button class="link">
              <span class="link-name">LinkedIn</span>
            </button>
        </form>
      </div>
      
      <form action="https://github.com/puneethx" target="_blank">
          <button class="git"><span class="git-name">Github</span></button>
        </form>
      </nav>
    </div>
  </nav>
  <div>

  </div>
</div>


<div class="journaltxt">
    <nav class="container2">
        <div class = "imag">
          <img src={Avatar3} class="main-photo"alt="logo">
        </div>
        <div class="info">
          <p class="name">G Aniesh Reddy</p>
          <p class = "job">Web Developer</p>
          <nav class = "social"><div class = "gap">
            <form action="https://www.linkedin.com/in/aniesh-reddy-gundam-016365232/" target="_blank">
            <button class="link">
              <span class="link-name">LinkedIn</span>
            </button>
        </form>
      </div>
      
      <form action="https://github.com/Aniesh04" target="_blank">
          <button class="git"><span class="git-name">Github</span></button>
        </form>
      </nav>
    </div>
  </nav>
  <div>
    
  </div>
</div>
</nav>

<div class="journaltxt1">
  <nav class="container2">
      <div class = "imag">
        <img src={Avatar2} class="main-photo"alt="logo">
      </div>
      <div class="info">
        <p class="name">Rion Dsilva</p>
        <p class = "job">Android Developer</p>
        <nav class = "social"><div class = "gap"><form action="https://www.linkedin.com/in/rion-dsilva-043464229/" target="_blank">
          <button class="link">
            <span class="link-name">LinkedIn</span>
          </button>
      </form>
    </div>
    
    <form action="https://github.com/RionDsilvaCS" target="_blank">
        <button class="git"><span class="git-name">Github</span></button>
      </form>
    </nav>
  </div>
</nav>
<div>
  
</div>
</div>



<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>




<style>
      .journaltxt{
  background-color: rgb(214, 255, 221);
  height: 250px;
  width: 600px;
  border-radius: 25px;
  margin-left: 100px;
  margin-bottom: 30px;  
  margin-top:20px;
  font-family: "Poppins",sans-serif;
  }
  .journaltxt1{
  background-color: rgb(214, 255, 221);
  height: 250px;
  width: 600px;
  border-radius: 25px;
  margin-left: 100px;
  margin-bottom: 90px;  
  margin-top:20px;
  font-family: "Poppins",sans-serif;
  }

  .fl{
    font-family: "Poppins",sans-serif;
    font-size: 30px;
    padding-left: 100px;
    font-weight: bold;
  }
  img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  }
  .container2{
    padding-left: 25px;
    padding-top: 25px;
    display: flex;
  }
  .name{
    font-size: 26px;
    font-weight:lighter;
  }
  .info{
    padding-left: 50px;
  }

  .imag{
    padding-top: 20px;
    padding-left: 10px;
  }
  .job{
    font-size: 20px;
  }


img{
    width: 170px;
    height: 170px;
    object-fit: cover;
    align-self: center;
}



.link{
    background-color: #1da1f2;
    width: 120px;
    height: 50px;
    border-radius: 15px;
    border-color: transparent;
}
.link:hover{
    background: radial-gradient(
        at 20% 128%,
        #5db9e3 20%,
        #1da1f2 60% ) ;
    box-shadow: 0px 0px 20px #1da1f2;
}
.link-name{
  font-family: "Poppins",sans-serif;
  font-size: 15px;
  color: #fff;
}

.git{
    background-color: #151c26;
    width: 120px;
    height: 50px;
    border-radius: 15px;
    border-color: transparent;
}
.git:hover{
    background: radial-gradient(
        at 20% 128%,
        #1a1c27 20%,
        #151823 60% ) ;
    box-shadow: 0px 0px 20px #151c26;
}
.git-name{
  font-family: "Poppins",sans-serif;
  font-size: 15px;
  color: #fff;
}

.gap{
  padding-right: 15px;
}

.social{
  display: flex;
}

.flex{
  display:flex;
}
</style>