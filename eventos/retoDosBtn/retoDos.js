'use strict';
const btn = document.querySelector('.click');
btn.addEventListener('click', ()=>{       
   let name=document.querySelector('input') 
   console.log(`Hola ${name.value}`); 
});