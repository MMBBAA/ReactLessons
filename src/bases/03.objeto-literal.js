const persona={

    nombre:'tony',
    apellido:'Montana',
    edad:'35',
    direccion:{
        ciudad:'New York',
        zip:4444,
        lat:43.44
    }

};
const persona2={...persona
}
persona2.nombre='Peter';

console.log(persona);
console.log(persona2);
