
    window.addEventListener('keydown', playSound);

    function playSound(e){
      
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      /*
        This uses 'template-literals' in Javascript. So audio[data-key="65"] is what gets outputted. That dollar sign will output the e.keyCode's result
        This makes an audio variable to store it 

        1. Javascript handles square brackets first
        2. [data-key = "65"]
        3. audio[data-key = "65"]
        4. using query selector, select an audio tag with a data-key of "65"
      */
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      /*
        Look at HTML, each div element has a class of "key". This variable will be used for animatiojn purposes (the reason why it targets <div>)
        This variable just stores, E.g ".key[data-key="65"]"

        1. [data-key = '65']
        2. .key[data-key = '65']
        3. select .key HTML class which has the data-key of '65'
      */

      if(!audio) return;  //Stops the function from running if one of the key-code user pressed cannot be matched with the ones listed in HTML


      //Look up <audio>'s DOM objects to learn more about these things
      audio.currentTime = 0; //This will prrvent the issue of audio not being repetead until existed audio is fully played out

      audio.play(); //This is a method provided by HTML in Javascript. <audio> object has its own methods. 
                    //This will play full-length of the audio file before moving on or repeating
      
      key.classList.add('playing'); //Adds a classList of 'playing' to the <div> in HTML above. This allows us to have transitions and animations in CSS  
    }

    //Now the transitioned has been called




    const keys = document.querySelectorAll('.key');   //generates an 'array' of every <div> which has a class of 'key'


    // for each element of keys[] (renamed as 'key' within this function, add an event listener, which checks if transition has ended then 
    // calls a function removeTransition)
    // 'transitionend' event is only fired when CSS transition has been completed, so this line is checking if any CSS transitions were fired on
    // any <div>

    // This is saying, if any key has finished 'transition', call the removeTransition() function
    keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 
    


      
    //This function will remove the classList of 'playing'
    function removeTransition(e) {
     // console.log(e);   //This will just print all transition events that fired

     if(e.propertyName !== 'transform'){
       return; //skip if its not a tranformation
     }
     //console.log(this);  'this' is 'key' from keys.forEach(key <-- This variable). We can always check what 'this' refers to by console.log

     this.classList.remove('playing');

    }