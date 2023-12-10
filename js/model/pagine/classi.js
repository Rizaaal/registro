import { getClassi } from "../../localstorage.js";
// import { showPage } from "../../control.js";
import { showPage } from "../../view.js";   
// import { registro } from "../../view.js";
import { registroPagina } from "./registro.js";

const classi = getClassi();
console.log(classi);

function createButton(classe){
    const bottoneSelezione = document.createElement('button');
    bottoneSelezione.innerText = classe.nome;
    bottoneSelezione.addEventListener('click', e => {
        console.log('nome classe in createButton() = ', classe.nome);
        showPage(registroPagina, classe);
    });
    return bottoneSelezione;
}

export function Classi(){
    const list = document.createElement('ul');
    const bottoneAggiungi = document.createElement('button');

    classi.forEach(classe => {
        let entry = document.createElement('li');
        entry.append(createButton(classe));
        list.appendChild(entry);
    });

    bottoneAggiungi.innerText = 'aggiungi nuovo registro';
    list.append(bottoneAggiungi);

    return list;
};

