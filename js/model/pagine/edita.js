import { insertStudente, getClasse, removeStudente } from "../../localstorage.js";
import { showPage } from "../../view.js";
import { registroPagina } from "./registro.js";

export function edita(classe){
    console.log(classe);
    const form = document.createElement('div');

    //aggiungi studente

    const headAggiungi = document.createElement('h2');
    headAggiungi.innerText = 'Aggiungi studente';
    form.appendChild(headAggiungi);

    const inputNome = document.createElement('input');
    inputNome.placeholder = 'nome';
    form.appendChild(inputNome);

    const inputCognome = document.createElement('input');
    inputCognome.placeholder = 'cognome';
    form.appendChild(inputCognome);

    const bottoneAggiungi = document.createElement('button');
    bottoneAggiungi.innerText = 'aggiungi';
    bottoneAggiungi.addEventListener('click', e => {
        insertStudente(inputNome.value, inputCognome.value);
        console.log(localStorage);
    })
    form.appendChild(bottoneAggiungi);

    //modifica studente
    
    const headModifica = document.createElement('h2');
    headModifica.innerText = 'Modifica studente';
    form.appendChild(headModifica);

    const modificaId = document.createElement('input');
    modificaId.placeholder = 'id';
    form.appendChild(modificaId);    

    const modificaNome = document.createElement('input');
    modificaNome.placeholder = 'nome';
    form.appendChild(modificaNome);

    const modificaCognome = document.createElement('input');
    modificaCognome.placeholder = 'cognome';
    form.appendChild(modificaCognome);

    //rimuovi studente

    const headRimuovi = document.createElement('h2');
    headRimuovi.innerText = 'Rimuovi studente';
    form.appendChild(headRimuovi);

    const rimuoviId = document.createElement('input');
    rimuoviId.placeholder = 'id';
    form.appendChild(rimuoviId);

    const bottoneRimuovi = document.createElement('button');
    bottoneRimuovi.innerText = 'rimuovi';
    bottoneRimuovi.addEventListener('click', e => {
        removeStudente(classe, rimuoviId.value);
        console.log(localStorage[classe.nome]);
    })
    form.appendChild(bottoneRimuovi);

    //bottone indietro

    const bottoneIndietro = document.createElement('button');
    bottoneIndietro.innerText = 'indietro';
    bottoneIndietro.addEventListener('click', e => {
        classe = getClasse(classe);
        showPage(registroPagina, classe);
    })
    form.appendChild(bottoneIndietro);

    return form;
}