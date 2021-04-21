const heroes= [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
//const owners=['DC','Marvel'];

//esta es la forma de exportación individual que se usará comunmente en el curso
export const owners=['DC','Marvel'];

//export const owners;
//esta es la forma por defecto 
export default heroes;
//export {heroes as default ,owners}