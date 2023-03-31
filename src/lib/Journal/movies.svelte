<script>
    import moviePic1 from "$lib/assets/movpic1.png"
    import moviePic2 from "$lib/assets/movpic2.png"
    import moviePic3 from "$lib/assets/movpic3.png"
    import moviePic4 from "$lib/assets/movpic4.png"
</script>

<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<p class="movies">Check out some movies</p>

<span class="movie-set">
    <div class="movie-box-feelgood">
        <p class="genre">Feel Good</p>
        <div class="artist-img">
            <img src={moviePic1} alt="network issue"/>
        </div>
        <div class="back-grad">
            <span class="bottom-to">
                <button class="play-button">▶</button>
                <div>
                    <p class="movie-name">Forrest Gump</p>
                    <p class="director-name">Robert Zemeckis</p>
                </div>
            
            </span>
        </div>
    </div>

<div class="movie-box-fantasy">
        <p class="genre">Fantasy</p>
        <div class="artist-img">
            <img src={moviePic2} alt="network issue"/>
        </div>
        <div class="back-grad">
            <span class="bottom-to">
                <button class="play-button">▶</button>
                <div>
                    <p class="movie-name">Harry Potter</p>
                    <p class="director-name">David Yates</p>
                </div>
            
            </span>
        </div>
    </div>

    <div class="movie-box-science">
        <p class="genre">science Fiction</p>
        <div class="artist-img">
            <img src={moviePic3} alt="network issue"/>
        </div>
        <div class="back-grad">
            <span class="bottom-to">
                <button class="play-button">▶</button>
                <div>
                    <p class="movie-name">Avatar</p>
                    <p class="director-name">James Cameron</p>
                </div>
            
            </span>
        </div>
    </div>

    <div class="movie-box-thriller">
        <p class="genre">Thriller</p>
        <div class="artist-img">
            <img src={moviePic4} alt="network issue"/>
        </div>
        <div class="back-grad">
            <span class="bottom-to">
                <button class="play-button">▶</button>
                <div>
                    <p class="movie-name">John Wick</p>
                    <p class="director-name">Chad Stahelski</p>
                </div>
            
            </span>
        </div>
    </div>
</span>









<style>
    .movies{
        font-family: "Poppins",sans-serif;
        padding-left:100px;
        font-size : 33px;
        font-weight: bold;
        padding-top: 80px;
        padding-bottom: 20px;
    }






    .movie-set{
        display: flex;
        margin-left: 10%;
        padding-bottom: 5rem;
    }
    @font-face {
        font-family: 'Gelasio';
        font-style: normal;
        font-weight: 400;
        src: local('Gelasio Regular'), local('Gelasio-Regular'), url(https://fonts.gstatic.com/s/gelasio/v1/cIf9MaFfvUQxTTqS9C6hYQ.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }




.movie-box-science{
    background: #e69b00;
    width: 200px;
    height: 300px;
    border-radius: 20px;
    display: block;
    padding: 24px;
    margin-left: 40px;
}
.movie-box-science:hover{
    background: radial-gradient(
        at 20% 128%,
        #e69b00 20%,
        #ece75f 60%) ;
        box-shadow: 0px 0px 20px #ece75f;
}

.movie-box-thriller{
    background: #4C9A2A;
    width: 200px;
    height: 300px;
    border-radius: 20px;
    display: block;
    padding: 24px;
    margin-left: 40px;
}
.movie-box-thriller:hover{
    background: radial-gradient(
		at 20% 128%,
		#ACDF87 20%,
		#4C9A2A 60%,
		#68BB59 90%
	);
    box-shadow: 0px 0px 20px #68BB59;
}

.movie-box-fantasy{
    background: #1da1f2;
    width: 200px;
    height: 300px;
    border-radius: 20px;
    display: block;
    padding: 24px;
    margin-left: 40px;
}
.movie-box-fantasy:hover{
    background: radial-gradient(
        at 20% 128%,
        #b9e2f5 20%,
        #1da1f2 60% ) ;
    box-shadow: 0px 0px 20px #1da1f2;
}

.movie-box-feelgood{
    background: #ff074f;
    width: 200px;
    height: 300px;
    border-radius: 20px;
    display: block;
    padding: 24px;
    margin-left: 40px;
}
.movie-box-feelgood:hover{
    background: radial-gradient(
        at 20% 128%,
        #ff5252 30%,
        #ff074f 60%) ;
        box-shadow: 0px 0px 20px #ff5252;    
}







:root {
  --backgroundColor: rgba(246, 241, 209);
  --colorShadeA: rgb(106, 163, 137);
  --colorShadeB: rgb(121, 186, 156);
  --colorShadeC: rgb(150, 232, 195);
  --colorShadeD: rgb(187, 232, 211);
  --colorShadeE: rgb(205, 255, 232);
}













.genre{
    color: white;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    margin-top: 0px;
}
.play-button{
    height: 56px;
    width: 56px;
    border-radius: 100px;
    margin-top: 20px;
    display: block;
    box-sizing: border-box;
    line-height: 20px;
    border: 6px solid #fff;
    border-radius: 50%;
    color:#f5f5f5;
    text-align:center;
    text-decoration:none;
    background-color: #60EC7A;
    font-size:20px;
    font-weight:bold;
    transition: all 0.3s ease;
    
}
.play-button:hover {
    background-color: #3FBAFF;
    box-shadow: 0px 0px 10px #3FBAFF;
    text-shadow: 0px 0px 10px #3FBAFF;
}
.bottom-to{
    display: flex;
    
    
}
.movie-name{
    margin-bottom: 0px;
    margin-left: 20px;
    color: white;
    margin-top: 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
}
.director-name{
    margin-top: 0px;
    margin-left: 20px;
    color: white;
    font-family: 'Poppins', sans-serif;
    opacity: 80%;
    
}

img{
    width: 190px;
    height: 170px;
    object-fit: cover;
    align-self: center;
}
/* .back-grad{
    width: 190px;
    height: 80px;
    background-image: linear-gradient(#60EC7A, #786FFF);
} */

  
</style>