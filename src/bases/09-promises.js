//import { configure } from "@testing-library/dom";
import { getHeroeById } from './bases/08-imp-exp';

/*
const promesa =new Promise((resolve,reject)=>{

    setTimeout(()=>{
        //Tarea
        //importen el getHeroeById
        const heroe=getHeroeById(2);
        //console.log(heroe);
        // resolve(heroe);
         reject('No se pudo encontrar al heroe con ese id');
        //console.log('2segundos despues')
    },2000)
});


promesa.then((heroe)=>{
    console.log('heroe',heroe);
})
.catch(err=>console.warn(err));*/

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            //Tarea
            //importen el getHeroeById
            const heroe = getHeroeById(id);

            if (heroe) {
                resolve(heroe);
            }
            else {
                reject('No se pudo encontrar al heroe con ese id')
            };

        }, 2000)
    });

}
getHeroeByIdAsync(1)
    .then( console.log)
    .catch(console.warn);