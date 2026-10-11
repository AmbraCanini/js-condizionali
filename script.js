let ora = 20

if (ora <= 12) console.log("Buongiorno");
else if (ora <= 18) console.log("Buon pomeriggio");
else if (ora <= 22) console.log("Buonasera");
else console.log("Notte")


//Math.floor(Math.random()* (max - min + 1) ) + min
//genera un numero a caso tra min e max
//let numero = Math.floor(Math.random() * 101);
//if (numero == 100)
//    console.log("Jackpot!");
//else
//    console.log(`Ritenta! Numero estratto: ${numero}`);


let citta = prompt("Nome della tua città", "Roma");
if (citta)
    console.log("Ciao ti trovi a " + citta);
else
    console.log("Annullato");
