<script>
// @ts-nocheck


    import { initializeApp } from "firebase/app";
    import { getFirestore, collection, onSnapshot,doc, updateDoc, deleteDoc, addDoc} from "firebase/firestore";
    import {firebaseConfig} from "$lib/firebaseConfig";

    const firebaseApp = initializeApp(firebaseConfig);
    
    const db =  getFirestore();
    
    const colRef = collection(db, "journal");
    
    let journal = [ ];

const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
    let fbJournal = [];
  querySnapshot.forEach((doc) => {
    let journa = {...doc.data(),id : doc.id}
    fbJournal = [journa,...fbJournal];
  });
  journal = fbJournal;
});



   
    let content="";

    

</script>


<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<p class="fl">
    Here are your previous Journals.!
</p>

<div class="journals">
        <p class = "prevJournal">
            {#each journal as item}
            <div class = "journaltxt"><div class = "text"><li>Date : {item.date}<br><br>Journal : {item.content}</li></div><br></div>
            {/each}
        </p>    
</div>
    

    

   

<style>
    /* General styles */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.fl{
    padding-top: 40px;
    padding-left: 100px;
    padding-bottom: 60px;
    font-family: "Poppins",sans-serif;
    font-weight: bold;
    font-size: 26px;
}



  .journaltxt{
  background-color: #E7FFEB;
  height: 250px;
  width: 600px;
  border-radius: 25px;
  margin-left: 100px;
  margin-bottom: 30px;  
  }


  .prevJournal{
    font-family: "Poppins",sans-serif;
    font-size: 18px;
  }
  .journals{
    padding-bottom: 30px;
  }
  .text{
    padding-left: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-right: 5%;
  }

</style>
