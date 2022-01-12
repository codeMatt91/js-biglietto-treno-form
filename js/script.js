console.log('JS OK!');

/*

Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).

BONUS:
replicare anche lo stile estetico fornito dallo screenshot tramite CSS

1- Recuperare nome e cognome dal DOM
2- Recuperare i km dal DOM
3- recuperare la fascia di età del passeggero dal DOM
4- calcolare il prezzo del biglietto in base ai km
5- applicare lo sconto in base alla fascia di età
6- stampare il prezzo finale 
7- stamparlo in pagina
*/

//! Elementi da cui raccogliere i dati dell'utente 
const userName = document.getElementById('name');
const userKm = document.getElementById('km');
const rangeAge = document.getElementById('age');

//! Elementi su cui devo scrivere
const nameSurname = document.getElementById('user-name-surname');
const offerTicket = document.getElementById('offer');
const cabTrain = document.getElementById('cab');
const codeTicket = document.getElementById('code');
const priceTicket = document.getElementById('price-ticket');

const generate = document.getElementById('generate');
const remove = document.getElementById('remove');


// ! Numero di carrozza da 1 a 9
const numberCab = Math.floor(Math.random() * 10) + 1;
console.log(numberCab);

// ! Codice CP da 1 a 9999
const codeCp = Math.floor(Math.random() * 10000) + 1;
console.log(codeCp);


// ! Al click devi scrivere: 
generate.addEventListener('click', function(){
   
   
   // ! Raccolgo il nome e cognome 
   const pippo = userName.value;
   
   // ! Raccolgo i km 
   let distance = userKm.value;

   //! prezzo biglietto 
   let ticket = distance * 0.21;

   // ! Raccolgo la fascia di età 
   const rangeAge = document.getElementById('age');
   const age = rangeAge.value;
   
   if (age === 'over65') {
      nameSurname.innerText = pippo;
      offerTicket.innerText = 'Biglietto ridotto over-65';
      cabTrain.innerText = numberCab;
      codeTicket.innerText = codeCp;
      let prezzo = ticket * 0.6;
      priceTicket.innerText = prezzo.toFixed(2) + '€';
   } else if (age === 'minorenne') {
      nameSurname.innerText = pippo;
      offerTicket.innerText = 'Biglietto ridotto minorenni';
      cabTrain.innerText = numberCab;
      codeTicket.innerText = codeCp;
      let prezzo = ticket * 0.8;
      priceTicket.innerText = prezzo.toFixed(2) + '€';
   } else {
      nameSurname.innerText = pippo;
      offerTicket.innerText = 'Biglietto standard';
      cabTrain.innerText = numberCab;
      codeTicket.innerText = codeCp;
      priceTicket.innerText = ticket.toFixed(2) + '€';
   }

});

remove.addEventListener('click', function(){
   nameSurname.innerText = '';
   offerTicket.innerText = '';
   cabTrain.innerText = '';
   codeTicket.innerText = '';
   priceTicket.innerText = '';

   userName.value = '';
   userKm.value = '';
   rangeAge.value = '';

});