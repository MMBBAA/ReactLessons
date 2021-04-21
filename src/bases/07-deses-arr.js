const personajes=[
    'Goku',
    'Vegeta',
    'Trunks'
];
//const [  ,p2]=personajes;
//console.log(p2);
const[,,p3]=personajes;
console.log(p3);

const retornaArreglo=()=>{
    return ['ABC',123];
}

const [letras,numeros]=retornaArreglo();
console.log(letras,numeros);

//tarea
const use=(valor)=>{
    return [valor,()=>{console.log('Hola mundo')}];
}

const arr=use('Pato');
//console.log(arr);
arr[1]();
//tarea
//1º-imprimir en consola el nombre, la primera posición se llamará nombre, y el segundo se llamará setNombre
//2º-llamen a setNombre() de esta manera

const [nombre,setNombre]=use('nombre');


console.log(nombre);
setNombre();