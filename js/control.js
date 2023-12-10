import { Classi } from './model/pagine/classi.js';
import { menuClassiButton, main } from './view.js';

export function showPage(page){
    subtitle.innerText = page.name; 
    main.replaceChildren(page());
}

// menuClassiButton.addEventListener('click', e => {
//     showPage(Classi);
// });

