// funciones en JS
/*let nombre='Goku';
const saludar=function (nombre){
    return `hola ${nombre}`;
}*/

//const saludar2=(nombre)=>`Hola ${nombre}`;
//const saludar3=(nombre)=>(`Hola ${nombre}`);
/*
const getUser=()=>({
    
        uid:'123',
        username:'ACX'
    })
    const user=getUser();*/

//console.log(user);
//console.log(getUser());
//1º-TRANSFORMAR A UNA FUNCIÓN FLECHA
//2º-DEBE RETORNAR UN OBJETO IMPLÍCITO
//3º-PRUEBAS
/*function getUsuarioActivo(nombre){
    return{
        uid:'ABC567',
        userName:nombre,
    }
};*/

const getUsuarioActivo=(nombre)=>({
    uid:'ABC567',
    userName:nombre,
});
const usuarioActivo=getUsuarioActivo('fernando');
//const usuarioActivo=getUsuarioActivo('fernando');
console.log(usuarioActivo);