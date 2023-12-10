// import { registro } from "../../view.js"; //table

export function registroPagina(classe){

    const table = document.createElement('table');
    console.log(classe);

    classe.forEach(studente => {
        const td = document.createElement('td');
        let nome = document.createElement('tr');
        nome.innerHTML = studente.nome;
        td.appendChild(nome);

        let cognome = document.createElement('tr');
        cognome.innerHTML = studente.cognome;
        td.appendChild(cognome);

        registro.appendChild(td);
    });

    return table;
}