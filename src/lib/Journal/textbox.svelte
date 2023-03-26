<script>
    let Texti = "";
    function handleClick() {
        console.log(Texti);
    }
</script>
<div>
<div class = "Texte"><textarea bind:value={Texti} class="journaltxt" maxlength="1200" rows="15" cols="60"></textarea><br>
 
</div>
<div class="button_container">
    <button class="saveit" on:click = {handleClick}><span>Save it! for future</span></button>

  </div>
</div>  
<style>

    .journaltxt{
  background-color: #E7FFEB;
  padding: 10px;
  font-size: 20px;
  font-family: Poppins,sans-serif;
  border: none;
  resize: none;
  height: 400px;
  width: 600px;
  padding-left: 40px;
  border-radius: 25px;
  padding-top: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  }
  

  .Texte{
    padding-left: 99px;
    padding-bottom: 100px;
    padding-top: 30px;
  }




.button_container {
    margin-bottom: 30px;
    padding-left: 120px;
    
}


.saveit {
  border: none;
  display: block;
  text-align: left;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  background-color: #ffffff;
  padding: 17px 60px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.20);
}

.saveit span {
  position: relative; 
  color: #1e3b41;
  z-index: 1;
}

.saveit:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 490%;
  width: 140%;
  background: #89fa9d;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);
}

.saveit:hover:after {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
}
  
</style>