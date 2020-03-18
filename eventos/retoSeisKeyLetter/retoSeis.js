'use strict';
const body=document.querySelector('body');
var keyLetter;
body.addEventListener('keydown',(event)=>{
    keyLetter=event.keyCode;  
    console.log(keyLetter);  
    if ( keyLetter==82){
        body.classList.add('red');
        body.classList.remove('purple');
    }
    else if(keyLetter==77){
        body.classList.add('purple');
        body.classList.remove('red');
    }
})