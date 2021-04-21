//desestructuración
//asignación desestructurante
/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/
const persona={

    nombre:'Fernando',
    edad:45,
    clave:'ironman',
};

//const {nombre}=persona;//extrae lo que yo estoy poniendo dentro de estas llaves en este objeto
//cada rasgo
const {nombre,edad,clave}=persona;

console.log(nombre);
console.log(edad);
console.log(clave);
//console.log(persona.edad);
//console.log(persona.clave);
//extraer lo que interesa
/*
const retornaPersona=(usuario)=>{
    const {nombre,edad,clave}=usuario;
    console.log(nombre);
    console.log(edad);
    console.log(clave);
}
*/

/*const usContext=({nombre,edad,rango='Capitan'})=>{
 //   console.log(nombre,edad,rango);
    return {
        nombreClave:clave,
        anios:edad,
    }
}*/

const usContext=({nombre,edad,rango='Capitan'})=>{
    //   console.log(nombre,edad,rango);
       return {
           nombreClave:clave,
           anios:edad,
           latlog:{
               lat:10,
               long:11,
           }
        }
   }
//const avenger=usContext(persona);
const{nombreClave,anios,latlog:{lat,long}}=usContext(persona);
//console.log(avenger.nombreClave,avenger.anios);
console.log(nombreClave,anios,lat,long);
//retornaPersona(persona);