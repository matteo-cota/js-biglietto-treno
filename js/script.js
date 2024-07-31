console.log('JS OK');



/*
   Step da seguire:
   1. Selezioniamo il form e il paragrafo dove visualizzeremo il risultato
   2. Chiedere all'utente il numero di chilometri
   3. Chiedere all'utente l'età
   4. Calcolare il prezzo base del biglietto
   5. Inizializzare il prezzo finale
   6. Applicare sconto per minorenni 
   7. Applicare sconto per over 65
   8. Arrotondare il prezzo finale a due decimali
   9. Stampare il risultato
*/

// Selezioniamo il form e il paragrafo dove visualizzeremo il risultato
const resultelement = document.getElementById('result');
console.log(resultelement);


// Chiedere all'utente il numero di chilometri
let km = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));


// Chiedere all'utente l'età
let eta = parseInt(prompt("Inserisci la tua età:"));

// Calcolare il prezzo base del biglietto
const prezzoPerKm = 0.21;
let prezzoBase = km * prezzoPerKm;

// Inizializzare il prezzo finale
let prezzoFinale = prezzoBase;

// Applicare sconto per minorenni
if (eta < 18) {
    prezzoFinale = prezzoBase * 0.80;
}

// Applicare sconto per over 65
if (eta > 65) {
    prezzoFinale = prezzoBase * 0.60;
}

// Arrotondare il prezzo finale a due decimali
prezzoFinale = prezzoFinale.toFixed(2);

// Mostrare il risultato nella console
console.log(`Chilometri: ${km} km`);
console.log(`Età del passeggero: ${eta} anni`);
console.log(`Prezzo prima dello sconto: €${prezzoBase.toFixed(2)}`);
console.log(`Prezzo totale del biglietto: €${prezzoFinale}`);


// Stampare i risultati sulla pagina
document.body.innerHTML += `
<p>Chilometri: ${km} km</p>
<p>Età: ${eta} anni</p>
<p>Prezzo prima dello sconto: €${prezzoBase.toFixed(2)}</p>
<p>Prezzo finale del biglietto: €${prezzoFinale}</p>
`;

