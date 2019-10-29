//Il computer deve generare 16 numeri casuali da 1 a 100.
//In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
//se il numero è presente nella lista dei numeri generati, la partita termina,
//altrimenti continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//Ci sono 2 controlli che van fatti già di base per dar senso all’ex:

//genero 16 numeri casuali da 1 a 100

for (var i = 0; i < 100; i++) {
  var numScelti = Math.floor(Math.random()*16)+1;
  console.log(numScelti);

}
