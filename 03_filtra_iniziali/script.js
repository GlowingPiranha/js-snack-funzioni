/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// function filtered(array) {

//   const letter = "A";
//   const startsWith = [];

//   for (let i = 0; i < array.length; i++) {
//     const foundName = array[i];
//     if (foundName[0] === letter) {
//       startsWith.push(foundName);
//     }
//   }

//   return startsWith;
// };


function findByInitial(array, letter) {

  //! definisco la variabile array che deve contenere solo i nomi che iniziano per la lettera come parametro
  const filter = [];

  // !ciclo l'array
  for (let i = 0; i < array.length; i++) {

    // ! confronto la prima lettera dell'elemento attualmente ciclato con la lettera passata come parametro
    if (names[i][0].toLowerCase() === letter.toLowerCase()) {
      filter.push(array[i]);
    }
  }

  return filter;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(findByInitial(names, `a`));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]