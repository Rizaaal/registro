import { RegistroClasse, Studente } from "./model/model.js";

export function getClassi(){
    let classi = [];
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)){
            let classe = JSON.parse(localStorage.getItem(key));

            //ricostruzione metodi (valori JSON unsafe, vengono perduti)
            classe.inserisci = RegistroClasse.prototype.inserisci;

            classi.push(classe);
        }
    }
    return classi;
}

export function getClasse(classe){
    let y = JSON.parse(localStorage.getItem(classe.nome));
    y.inserisci = RegistroClasse.prototype.inserisci;
    console.log(y);
    return y;
}


export function setClasse(classe){
    //console.log(classe.nome);
    localStorage.setItem(classe.nome, JSON.stringify(classe));
}

//setClasse(new RegistroClasse('E', 1));

export function insertStudente(nome, cognome){
    let classe = JSON.parse(localStorage['1˚E']);
    RegistroClasse.prototype.inserisci.apply(classe, [new Studente(nome, cognome)]);
    // console.log(classe);
    setClasse(classe);
}

export function removeStudente(classe, id){
    let newClasse = JSON.parse(localStorage[classe.nome]);
    delete newClasse.elenco[id];
    localStorage[classe.nome] = JSON.stringify(newClasse);
}

//insertStudente('lorenzo', 'Di Grazia');


setClasse(new RegistroClasse('E', 2));
