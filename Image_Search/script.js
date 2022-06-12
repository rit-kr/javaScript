


let url = 'https://api.unsplash.com/photos/?client_id=TtTf_CgIbRu4k2WhKJjiPMhCSPOEwI0sKcuckb3rzow';
let GetSearchUrl = (query) => {
    return `https://api.unsplash.com/search/photos/?query=${query}&client_id=TtTf_CgIbRu4k2WhKJjiPMhCSPOEwI0sKcuckb3rzow`;
};

let input = document.querySelector('input');
let ul = document.querySelector('ul');

function fetch (url) {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('Get', url);
        xhr.onload = () => 
            resolve(JSON.parse(xhr.response));
        xhr.onerror = () => 
            reject(console.error('Something went wrong ...'));
        xhr.send();
    });
};



function createUI(data){
    ul.innerHTML = "";
    data.forEach((elm) => {
        console.log(elm);
        let imagesLi = document.createElement("li");
        let images = document.createElement("img");
        images.src = elm.urls.thumb;
        imagesLi.append(images);
        ul.append(imagesLi);
    });
}

fetch(url)
.then(createUI)
.catch((error) => alert(error));

function handleChange(event) {
    if(event.keyCode === 13 && input.value){
        fetch(GetSearchUrl(input.value))
        .then((searchResults) => 
            createUI(searchResults.results))
        .catch((error) => alert(error));
        event.target.value = "";
    }
};

input.addEventListener('keydown', handleChange);

