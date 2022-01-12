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
const userName = document.getElementById('name').value;
const userKm = document.getElementById('km').value;
const rangeAge = document.getElementById('age').value;


//! Elementi su cui devo scrivere
const nameSurname = document.getElementById('user-name-surname');
const offerTicket = document.getElementById('offer');
const cabTrain = document.getElementById('cab');
const codeTicket = document.getElementById('code');
const priceTicket = document.getElementById('price-ticket');

const generate = document.getElementById('generate');
const remove = document.getElementById('remove');

// ! Prezzo delbiglietto 
const ticket = userKm * 0.21;



if (rangeAge === 'maggiorenne') {
   priceTicket.innerText = ticket;
} else if (rangeAge === 'minorenne') {
   priceTicket.innerText = ticket * 0.8;
} else (rangeAge === 'over65') {
   priceTicket.innerText = ticket * 0.6;
}