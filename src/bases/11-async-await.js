//const getImagenPromes = () => new Promise(resolve => resolve('https://asdsdfs.com'));

//getImagenPromes().then(console.log)

//crear lo mismo con Async/await

/*const getImage=()=>{
    return 'https://asdsdfs.com';
}
console.log(getImage());*/

//la palabra reservada async convierte función normal en una promesa
const getImage = async () => {

    try {
        const apiKey = 'tpHYgV4XqbqIDXL6N21u18apkhSIElpK';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (err) {
        //manejo del error
        console.error(err)
    }
}
getImage();
