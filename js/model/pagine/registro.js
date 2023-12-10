// import { registro } from "../../view.js"; //table

export function registroPagina(classe){

    const table = document.createElement('table');
    console.log(classe);

    for (const key in classe.elenco) {
        if (classe.elenco.hasOwnProperty(key)) {
            const tr = document.createElement('tr');
            let nome = document.createElement('td');
            nome.innerHTML = classe.elenco[key].nome;
            tr.appendChild(nome);
    
            let cognome = document.createElement('td');
            cognome.innerHTML = classe.elenco[key].cognome;
            tr.appendChild(cognome);
    
            table.appendChild(tr); 
        }
    }

    return table;
}