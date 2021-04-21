const activo=true;

/*let mensaje='';
if(activo){
    mensaje='Activo';
}
else{
    mensaje='Inactivo';
}*/

//const mensaje=(activo)?'Activo':'Inactivo';

const mensaje=!activo&&'Activo';//forma corta de hacer un if
//const mensaje=(activo)?'Activo':null;
console.log(mensaje);