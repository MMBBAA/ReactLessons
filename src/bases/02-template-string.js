

const nombre='Alberto';
const apellido='Bm';
//const nombreCompleto=nombre+' '+apellido;
//const nombreCompleto=` Hola Mundo `;

const nombreCompleto=`
${nombre } 
${ apellido}
`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return `Hola ${nombre}`;
}

console.log(`Esto es un saludo: ${getSaludo()}`);