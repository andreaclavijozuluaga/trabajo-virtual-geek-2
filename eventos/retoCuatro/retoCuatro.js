'use strict';
const kimiNoNaWa = 'kimi No NaWa';
const interestelar = 'interestelar';
const senToChihiroNoKamikakushi = 'Sen To Chihiro No Kamikakushi';
const tonariNoTotoro = 'Tonari No Totoro';

const button = document.querySelector('.click');
button.addEventListener('click', ()=>{    
    document.querySelector('div').innerHTML=`<ul><li id='uno'>${kimiNoNaWa}</li><li id='dos'>${interestelar}</li><li id='tres'>${senToChihiroNoKamikakushi}</li><li id='cuatro'>${tonariNoTotoro}</li></ul>`;
    const primPeli=document.querySelector('#uno');
    const segunPeli=document.querySelector('#dos');
    const tercPeli=document.querySelector('#tres');
    const cuartPeli=document.querySelector('#cuatro');
    const quintPeli=document.querySelector('#cinco');
    primPeli.addEventListener('click',first);
    segunPeli.addEventListener('click',second);
    tercPeli.addEventListener('click',third);
    cuartPeli.addEventListener('click',fourth);
    quintPeli.addEventListener('click',fifth);
});
const first=()=> {
   alert(`${kimiNoNaWa}`);      
 }
 const second=()=>{
    alert( `${interestelar}`)
 }
 const third=()=>{
   alert( `${senToChihiroNoKamikakushi}`)
 }
 const fourth=()=>{
     alert(`${tonariNoTotoro}`);
 }
