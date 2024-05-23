// @import url('./js/pixabay-api.js');
// @import url('./js/render-function.js');

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const myForm = document.querySelector(".form");
const imagesList = document.querySelector('.images_container')

// imagesList.style.flexWrap = 'wrap';

myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = event.target.elements.query.value.trim();

    if(!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'You should input something',
            position: 'topCenter',
        });
    } else {
        searchImage(query)
            .then(data => {
                if(data.hits.length != 0) {
                    const markup = imagesTemplate(data.hits);
                    imagesList.innerHTML = markup;
                } else {
                    iziToast.error({
                        title: 'Error',
                        message: 'Sorry, there are no images matching your search query. Please try again!',
                        position: 'topCenter',
                    });
                }
                
            })
            .catch(err => {
                iziToast.error({
                    title: 'Error',
                    message: 'Error',
                    position: 'topCenter',
                });
            });
    }  

    
});

function searchImage(query) {
    const BASE_URL = 'https://pixabay.com/api/';

    const params = new URLSearchParams({
        key: '44028683-118753c7a8296875ea6775d6e',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: '9',
    });

    const url = `${BASE_URL}?${params}`;

    return fetch(url)
          .then(response => response.json());
}

function imageTemplate(image){
    return `<img src="${image.webformatURL}" alt="${image.tags}>
    <ul class="property_list">
    <li class="property_elem">Likes ${image.likes}</li>
    <li class="property_elem>Views ${image.views}</li>
    <li class="property_elem>Comments ${image.comments}</li>
    <li class="property_elem>Downloads ${image.downloads}</li>
    </ul>`;
    
}

function imagesTemplate(arr) {
    return arr.map(imageTemplate).join('');
}


