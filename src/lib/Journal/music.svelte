<script>
    import artistPic1 from "$lib/assets/artpic1.png"
    import artistPic2 from "$lib/assets/artpic2.png"
    import artistPic3 from "$lib/assets/artpic3.png"
    import artistPic4 from "$lib/assets/artpic4.png"
</script>

<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<p class="music">Hear this Music out</p>

<span class="music-set">
    <div class="music-box-dance">
        <p class="genre">DANCE</p>
        <div class="artist-img">
            <img src={artistPic1} alt="network issue"/>
        </div>
        <div class="back-grad">
            <span class="bottom-to">
                <button class="play-button">▶</button>
                <div>
                    <p class="music-name">Flowers</p>
                    <p class="artist-name">Miley Cyrus</p>
                </div>
            
            </span>
        </div>
    </div>

<div class="music-box-pop">
        <p class="genre">POP</p>
        <div class="artist-img">
            <img src={artistPic2} alt="network issue"/>
        </div>
        <div class="back-grad">
            <span class="bottom-to">
                <button class="play-button">▶</button>
                <div>
                    <p class="music-name">Levitating</p>
                    <p class="artist-name">Dua Lipa</p>
                </div>
            
            </span>
        </div>
    </div>

    <div class="music-box-rock">
        <p class="genre">ROCK</p>
        <div class="artist-img">
            <img src={artistPic3} alt="network issue"/>
        </div>
        <div class="back-grad">
            <span class="bottom-to">
                <button class="play-button">▶</button>
                <div>
                    <p class="music-name">Blinding Lights</p>
                    <p class="artist-name">The Weeknd</p>
                </div>
            
            </span>
        </div>
    </div>

    <div class="music-box-melody">
        <p class="genre">MELODY</p>
        <div class="artist-img">
            <img src={artistPic4} alt="network issue"/>
        </div>
        <div class="back-grad">
            <span class="bottom-to">
                <button class="play-button">▶</button>
                <div>
                    <p class="music-name">Perfect</p>
                    <p class="artist-name">Ed Sheeran</p>
                </div>
            
            </span>
        </div>
    </div>
</span>






<style>
    .music{
        font-family: "Poppins",sans-serif;
        padding-left:100px;
        font-size : 33px;
        font-weight: bold;
        padding-top: 80px;
        padding-bottom: 20px;
    }






    .music-set{
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




.music-box-rock{
    background: #e69b00;
    width: 200px;
    height: 300px;
    border-radius: 20px;
    display: block;
    padding: 24px;
    margin-left: 40px;
}
.music-box-rock:hover{
    background: radial-gradient(
        at 20% 128%,
        #e69b00 20%,
        #ece75f 60%) ;
        box-shadow: 0px 0px 20px #ece75f;
}

.music-box-pop{
    background: #4C9A2A;
    width: 200px;
    height: 300px;
    border-radius: 20px;
    display: block;
    padding: 24px;
    margin-left: 40px;
}
.music-box-pop:hover{
    background: radial-gradient(
		at 20% 128%,
		#ACDF87 20%,
		#4C9A2A 60%,
		#68BB59 90%
	);
    box-shadow: 0px 0px 20px #68BB59;
}

.music-box-dance{
    background: #1da1f2;
    width: 200px;
    height: 300px;
    border-radius: 20px;
    display: block;
    padding: 24px;
    margin-left: 40px;
}
.music-box-dance:hover{
    background: radial-gradient(
        at 20% 128%,
        #b9e2f5 20%,
        #1da1f2 60% ) ;
    box-shadow: 0px 0px 20px #1da1f2;
}

.music-box-melody{
    background: #ff074f;
    width: 200px;
    height: 300px;
    border-radius: 20px;
    display: block;
    padding: 24px;
    margin-left: 40px;
}
.music-box-melody:hover{
    background: radial-gradient(
        at 20% 128%,
        #ff5252 30%,
        #ff074f 60%) ;
        box-shadow: 0px 0px 20px #ff5252;    
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
.music-name{
    margin-bottom: 0px;
    margin-left: 20px;
    color: white;
    margin-top: 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
}
.artist-name{
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