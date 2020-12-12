let url = "https://run.mocky.io/v3/3681eb70-37e8-4b5d-bc32-19e5c4ad0ca4";

console.log("sdasdasdas");
fetch(url).then(onSucces, onError).then(text => console.log(text));

function onSucces(response){
    return response.json();
}
function onError(error){      
        console.log(error);
}

