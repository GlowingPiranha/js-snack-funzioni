/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countvowels(string) {
  // dichiaro array di vocali
  const vowels = [`a`, `e`, `i`, `o`, `u`];
  // dichhiaro una variabile che conta le vocali all'interno della parola
  let count = 0;
  // ciclo la parola come se fosse un array di caratteri
  for (let i = 0; i < string.length; i++) {

    if (vowels.includes(string[i])) {
      count++;  //count = count + 1
    }
  }
  return count

}

// Invoca la funzione qui e stampa il risultato in console
console.log(countvowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)