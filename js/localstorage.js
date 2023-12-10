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

export function setClasse(classe){
    //console.log(classe.nome);
    localStorage.setItem(classe.nome, JSON.stringify(classe));
}

setClasse(new RegistroClasse('E', 1));

export function insertStudente(nome, cognome){
    let classe = JSON.parse(localStorage['1˚E']);
    RegistroClasse.prototype.inserisci.apply(classe, [new Studente(nome, cognome)]);
    // console.log(classe);
    setClasse(classe);
}

insertStudente('lorenzo', 'Di Grazia');


setClasse(new RegistroClasse('E', 2));
