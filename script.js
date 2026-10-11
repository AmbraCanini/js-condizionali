
//esercizio let e if/else
//let ora = 20

//if (ora <= 12) console.log("Buongiorno");
//else if (ora <= 18) console.log("Buon pomeriggio");
//else if (ora <= 22) console.log("Buonasera");
//else console.log("Notte")


//esercizio math random
//Math.floor(Math.random()* (max - min + 1) ) + min
//genera un numero a caso tra min e max
//let numero = Math.floor(Math.random() * 101);
//if (numero == 100)
//    console.log("Jackpot!");
//else
//    console.log(`Ritenta! Numero estratto: ${numero}`);

//esercizio prompt
//let citta = prompt("Nome della tua città", "Roma");
//if (citta)
//    console.log("Ciao ti trovi a " + citta);
//else
//    console.log("Annullato");



//esercizio number e prompt
//let numero = Number(prompt("Inserisci un numero", 10));
//if (numero >= 60)
//    console.log("sei un/a grande!");
//else
//    console.log(`Ritenta!` + numero);


//esercizio if nested
let eta = 19
let biglietto = true

if (eta >= 18) {
    if (biglietto == true)
        console.log("benvenuto")
    else
        console.log("Non puoi entrare")
} else {
    console.log("Sei minorenne!")
}

//operatori binari e confronto

let codice = "1234"

if (codice == "1234") {
    console.log("confronto debole sono considerati uguali");
}
if (codice === 1234) {
    console.log("Confronto maggiore e non sono uguali");
}
else {
    console.log("Confronto stretto: tipo diverso, non sono uguali");
}

//Valori falsy e condizioni reali

//let nome = prompt("Inserisci il nome")
//if (nome) {
//    console.log("Ciao" + nome)
//} else {
//    console.log("errore")
//}

//Operatori logici combinati

let luceaccesa = true
let personepresenti = true

if (luceaccesa && personepresenti) {
    console.log("La stanza è occupata")
}
if (luceAccesa === false && personePresenti === false) {
    console.log("Stanza libera");
}

