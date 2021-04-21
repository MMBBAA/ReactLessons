const apiKey='tpHYgV4XqbqIDXL6N21u18apkhSIElpK';

const peticion=fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
/* petición muy extensa y complicada
peticion.then((resp)=>{
//console.log(resp);
resp.json().then((data)=>{
    console.log(data)
    });
})
.catch(console.warn);*/
//petición mas sencilla con promesas encadenadas

peticion
.then(resp=>resp.json())
.then(({data})=>{
const {url}=data.images.original;

const img=document.createElement('img');
img.src=url;
document.body.append(img);

})
.catch(console.warn);