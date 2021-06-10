var output = document.getElementById("output")

var userChallenge = parseInt(prompt("Scegli il livello di difficoltà: 0, 1, 2."))
while (isNaN(userChallenge) || userChallenge < 0 || userChallenge > 2) {
    alert("Attenzione i livelli di difficoltà sono: 0, 1, 2.")
    var userChallenge = parseInt(prompt("Scegli il livello di difficoltà: 0, 1, 2."))
}
console.log(userChallenge);
switch (userChallenge) {
    case 1:
        max = 80;
        break;
    case 2:
        max = 50;
        break;
    default:
        max = 100;
}
console.log(max, "questo è il valore di max")
    /*per prima cosa faccio creare al computer 16 numeri randomici, tramite una funzione, dandogli un 
    minimo e un massimo come valore che saranno 1 e 100 */

var arrayNum = [];

function numberGenerator(min, max) {
    while (arrayNum.length < 16) {
        var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!arrayNum.includes(randomNum)) {
            arrayNum.push(randomNum)
        }

    }
    console.log(arrayNum)
}

console.log(numberGenerator(1, max))

/*devo però generare 16 numeri, dovrò quindi utilizzare un ciclo che ripeta il generatore di numeri n volte fino a 16
facendo però in modo che ogni numero generato venga inserito dentro un array vuoto, tramite un push. darò quindi al while, come condizione,
di ripetersi 16 volte fino a che l'array.length non sarà pieno*/

/*Devo però fare in modo che dentro l'array vengano messi solo numeri diversi, 
qui SE il numero generato è diverso da quelli presenti dentro l'array, ALLORA PUSHALO */

/*avendo generato le 16 mine, pronte ad esplodere, andrò a chiedere all'utente un numero, tramite prompt. 
Mi dovrò assicurare che l'utente inserisca solo un numero, che vada da 1 a 100 ed in caso contrario gli farò ripetere l'azione, 
grazie ad un ciclo while  */
var userArray = [];
while (userArray.length < (max - 16)) {
    var userNum = parseInt(prompt("Tenta la FORTUNA! Inserisci un numero da 1 a " + max + ", occhio a non ripetere lo stesso numero! ;)"))
    while (isNaN(userNum) || userNum < 1 || userNum > max) {
        alert("attenzione devi inserire un numero da 1 a 100");
        var userNum = parseInt(prompt("inserisci un numero da 1 a " + max + ", occhio a non ripetere lo stesso numero! ;)"));
    }
    if (arrayNum.includes(userNum) || (userArray.includes(userNum))) {
        output.innerHTML += "Mi dispace, hai trovato la mina!" + "\n" + "Le mine erano: " + arrayNum
        break
    }
    userArray.push(userNum)
}
output.innerHTML += "\n" + "Complimenti il tuo risultato è: " + userArray.length;

console.log(userNum, " numero utente")
console.log(userArray)

/*Devo chiedere questo numero massimo 86 volte (100-16), avrò bisogno di un ciclo while e di un array dove mettere i numeri generati dall'utente.
il while avrà quindi come condizione la lungezza dell'array che dovrà essere minore di 84*/

/*ora, dovrò fare in modo che l'utente, se scrive un numero dentro all'array generato dalla funzione perde il gioco, con break che interrompe il ciclo while
devo anche scrivere una codizione che se l'utente ripete un numero dentro l'array utente, ha perso*/
/*dichiaro il punteggio dell'utente prendendo il numero di "item" dentro l'array dell'utente */

/*per il bonus devo chiedere all'utente tramite prompt di inserire un livello di difficoltà: 
SE sceglie 0 allora il max della funzione che calcola i numeri random sarà 100
SE sceglie 1 il max sarà 80
SE sceglie 2 il max sarà 50

userò il switch per determinare le varie condizioni*/