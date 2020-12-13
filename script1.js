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

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        document.querySelector('.cards').appendChild(card);
    }
}

let button = document.querySelector("#filt_price");

button.addEventListener("click", filt);


function filt(){
    fetch(url).then(onSucces, onError).then(sort);
}

function sort(x){
    console.log("click");
    let card = document.querySelectorAll(".card");
    for(c of card)
        c.parentNode.removeChild(c);

    let newItem = x;
    let t = [];
    for(let i = 0; i < newItem.length; i++){
        t[i] = newItem[i].price;
    }    

    t.sort();

    console.log(t);

    for(let i = 0; i < t.length ; i++){
        for(let j = 0; j < newItem.length ; j++)
          if(t[i] === newItem[j].price){
            let card = document.createElement("div");
            card.setAttribute("class", "card");
    
            let img = document.createElement("img");
            let srcImg = newItem[j].image;
            img.setAttribute("src", srcImg);
    
            let name = document.createElement("a");
            let href = "elementPage.html?name=";
            console.log(newItem[j].queryName);
            href += `"${newItem[j].queryName}"`;
            name.setAttribute("href", href);
            name.setAttribute("class", "name");
            name.innerHTML = newItem[j].name;
    
            let price = document.createElement("p");
            price.setAttribute("class", "price");
            price.innerHTML = newItem[j].price;
    
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(price);
            document.querySelector('.cards').appendChild(card);
            break;
          }
    }  
}

