// import { showPage } from './control.js';
import { Classi } from './model/pagine/classi.js';

// DOM
//const registro = document.querySelector('#registro');
const main = document.querySelector('main');
const title = document.querySelector('subtitle');
const menuClassiButton = document.querySelector('button#classi');

function showPage(page, specificatore=undefined){
    subtitle.innerText = page.name;
    console.log('showPage() = ', page);
    main.replaceChildren(page(specificatore)); 
}

menuClassiButton.addEventListener('click', e => {
    showPage(Classi);
});


export { main, title, menuClassiButton, showPage };




