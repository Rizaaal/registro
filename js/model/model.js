class RegistroClasse {
  
    constructor(sezione, anno){
        this.sezione = sezione;
        this.anno = anno;
        this.nome = `${anno}˚${sezione}`;
        this.elenco = {};
        this.id = Object.keys(this.elenco).length + 1;
    }
      
    inserisci(studente){
        this.elenco[this.id] = studente;
        studente.classe = `${this.anno}˚${this.sezione}`;
        this.id++;
    }
    
    //read
    elenca(){
        if (!Object.keys(this.elenco).length){
            console.error('elenca(): il registro non ha studenti');
        } else {
            console.log(this.elenco);
        };
    }
    
    chiama(id){
        console.log(this.elenco[id]);
    }
    
    modifica(id, nuovoStudente){
        this.elenco[id] = nuovoStudente;
    }
    
    elimina(id){
        delete this.elenco[id];
    }
    
};
  
class Studente{
  
    constructor(nome, cognome){
        this.nome = nome;
        this.cognome = cognome;
    }
}
    
  
export { RegistroClasse, Studente };
  