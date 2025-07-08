/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtered(array) {

  const letter = "A";
  const startsWith = [];

  for (let i = 0; i < array.length; i++) {
    const foundName = array[i];
    if (foundName[0] === letter) {
      startsWith.push(foundName);
    }
  }

  return startsWith;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(filtered(names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]