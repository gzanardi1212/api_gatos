const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector("#change-cat");
const catImg = document.querySelector("#cat");

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const api = await data.json(); //api recebe o vetor
        const json = api[0]; //json recebe o objeto na primeira posição
        return json.url; //retorna a propriedade url
    }
    catch(e){
        console.log(e.message);
    }
}

const loadImg = async () => {
    catImg.src = await getCats();
}

loadImg();

btn.addEventListener('click', loadImg);