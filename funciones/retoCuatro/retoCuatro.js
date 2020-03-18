'use strict';

let width;
let parametros;
let parametros2;
let parametros3;
let parametros4;

parametros=parseInt(prompt(' Escriba B si es Border-box, de lo contrario escriba C para content-box'));
parametros2=parseInt(prompt('Escriba ancho'));
parametros3=parseInt(prompt('Escriba el padding'));
parametros4=parseInt(prompt('escriba el borde'));

if(parametros === b){
    parametros=true;
}
else(parametros !== b);{
    parametros = false
}

if(parametros === true && parametros2 > 0 && parametros3 > 0 && parametros4 > 0){
    let printB = (width, padding,border) =>{
        return `Ancho es: ${((width -(2*padding +2*border))+2*padding+2*border)}px`;

    };
    console.log(printB(parametros2,parametros3,parametros3));
}