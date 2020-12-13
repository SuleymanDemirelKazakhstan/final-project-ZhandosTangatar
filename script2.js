const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let name= urlParams.get('name')
console.log(name);

let url = "https://run.mocky.io/v3/a4049f97-9537-40bb-b915-48b28d7e2d1e";

console.log("sdasdasdas");
fetch(url).then(onSucces, onError).then(Adding);

function onSucces(response){
    return response.json();
}
function onError(error){      
        console.log(error);
}

function Adding(x){
console.log(x)
    let newItem = x;
    for(let i = 0; i < newItem.length; i++){
        if(`"${newItem[i].queryName}"` === name){
            let card = document.createElement("div");
            card.setAttribute("class", "card");

            let img = document.createElement("img");
            let srcImg = newItem[i].image;
            img.setAttribute("src", srcImg);

            let name = document.createElement("a");
            name.setAttribute("class", "name");
            name.innerHTML = newItem[i].name;

            let price = document.createElement("p");
            price.setAttribute("class", "price");
            price.innerHTML = newItem[i].price;

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(price);

            let desc = document.createElement("div");
            desc.setAttribute("id", "descripton");

            let h1 = document.createElement("h1");
            h1.innerHTML = "Description";

            let description = document.createElement("p")
            description.innerHTML = newItem[i].description;

            desc.appendChild(h1);
            desc.appendChild(description);
            document.querySelector("#element").appendChild(card);
            document.querySelector("#element").appendChild(desc);
        }
    }
}

{/* <div class = "card">
    <img src="img/book1.png">
        <a class = "name">In Search of Lost Time</a>
        <p class="price">10.99$</p>
    </div>
    <div id = "descripton">
        <h1>Description</h1>
        In Search of Lost Time also translated as Remembrance of Things Past, is a novel in seven volumes 
        by Marcel Proust (1871–1922). It is his most prominent work, known both for its length and its theme 
        of involuntary memory; the most famous example of this is the "episode of the madeleine," which occurs 
        early in the first volume. It gained fame in English in translations by C. K. Scott Moncrieff and Terence 
        Kilmartin as Remembrance of Things Past, but the title In Search of Lost Time, a literal rendering of the French,
        became ascendant after D. J. Enright adopted it for his revised translation published in 1992.
    </div> */}