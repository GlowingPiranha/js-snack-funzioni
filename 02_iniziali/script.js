/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function primaLettera(array) {
  const iniziale = [];

  for (let i = 0; i < names.length; i++) {
    iniziale.push(names[i][0]);
  }

  return iniziale;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(primaLettera(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]