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

var arrayNum = [];

function numberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
while (arrayNum.length < 16) {
    var randomNum = numberGenerator(1, max)
    if (!arrayNum.includes(randomNum)) {
        arrayNum.push(randomNum)
    }

}
console.log(arrayNum)

var userArray = [];
var gameOver = false;
while (userArray.length < (max - 16)) {
    var userNum = parseInt(prompt("Tenta la FORTUNA! Inserisci un numero da 1 a " + max + ", occhio a non ripetere lo stesso numero! ;)"))
    while (isNaN(userNum) || userNum < 1 || userNum > max) {
        alert("attenzione devi inserire un numero da 1 a 100");
        var userNum = parseInt(prompt("inserisci un numero da 1 a " + max + ", occhio a non ripetere lo stesso numero! ;)"));
    }
    if (!userArray.includes(userNum)) {
        if (arrayNum.includes(userNum)) {
            output.innerHTML += "Mi dispace, hai trovato la mina!" + "\n" + "Le mine erano: " + arrayNum;
            gameOver = true;
            break
        } else {
            userArray.push(userNum);
            console.log(userArray)
        }
    } else {
        alert("Attenzione hai ripetuto lo stesso numero!")
    }
}
output.innerHTML += "\n" + "Complimenti il tuo risultato è: " + userArray.length;

if (!gameOver) {
    alert("HAI VINTO")
} else {
    alert("HAI PERSO")
}

console.log(userNum, " numero utente")