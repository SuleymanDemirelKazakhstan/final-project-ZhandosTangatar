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
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let img = document.createElement("img");
        let srcImg = newItem[i].image;
        img.setAttribute("src", srcImg);

        let name = document.createElement("a");
        let href = "elementPage.html?name=";
        console.log(newItem[i].queryName);
        href += `"${newItem[i].queryName}"`;
        name.setAttribute("href", href);
        name.setAttribute("class", "name");
        name.innerHTML = newItem[i].name;

        let price = document.createElement("p");
        price.setAttribute("class", "price");
        price.innerHTML = newItem[i].price;

        let deleting = document.createElement("a");
        deleting.setAttribute("class", "delete");
        deleting.innerHTML = "delete";

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(deleting);
        document.querySelector('.cards').appendChild(card);
    }
}

{/* <div class = "card">
    <img src="img/book1.png">
    <a class = "name" href="elementPage.html">In Search of Lost Time</a>
    <p class="price">10.99$</p>
    <a class = "delete">delete</a>
</div> */}