let url = "https://run.mocky.io/v3/7ef86aa5-2fc9-4167-ab07-8a9ddab26f3b";

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

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        document.querySelector('.cards').appendChild(card);
    }
}




/* <div class = "card">
        <img src="img/book1.png">
        <a class = "name" href="elementPage.html?name='losttime'">In Search of Lost Time</a>
        <p class="price">10.99$</p>
    </div>  */