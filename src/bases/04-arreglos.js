//Arreglos en js

//const arreglo=new Array();
const arreglo=[1,2,3,4];
//arreglo.push(1);
let arreglo2=[...arreglo,5];

const arreglo3=arreglo2.map(function(x){
   // console.log(x*2);
    return 'hola';
    //return x*2;
});
console.log(arreglo3);