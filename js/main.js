//Il computer deve generare 16 numeri casuali da 1 a 100.
//In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
//se il numero è presente nella lista dei numeri generati, la partita termina,
//altrimenti continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//Ci sono 2 controlli che van fatti già di base per dar senso all’ex:

//genero 16 numeri casuali da 1 a 100

var numeri = [];

while (numeri.lenght < 16) { //riga da 16
  var numPc = getRandomInt(1, 101); // genero numero casuale da 1 a 100
  //controllo per numero random
  var found = inArray (numPc, numeri); //controllo
  if (found == false) { //se non c'è
    numeri.push(numPc); //pusha
  }
}
console.log(numeri);


function inArray(value, array) {
  var i = false;
  var i = 0;
  while (found == false && i < array.lenght) {
    if (array[i]) == value) {
      found = true;
    }
    i++
  }
   return found;
}

//creare funzione getRandomInt



//for (var i = 0; i < 16; i++) { //per 16 volte
  //var numPc = getRandomInt(1, 101); //genero un numero da 1 100
  //controllo per numero random
//}


//Chiedo all'utente di inserire un numero da 1 a 100 alla volta
//var numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"))

//se il numero è presente nella lista dei numeri generati, la partita termina
//if (numUtente == numPc) {
  //var fine = alert ("la partita è terminata")

//}
//altrimenti continua chiedendo all’utente un altro numero.
//else {
  //numUtente;
//}
