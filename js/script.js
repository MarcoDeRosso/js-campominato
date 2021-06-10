/*per prima cosa faccio creare al computer 16 numeri randomici, tramite una funzione, dandogli un 
minimo e un massimo come valore che saranno 1 e 100 */

function numberGenerator(min, max) {
    var arrayNum = [];
    while (arrayNum.length < 16) {
        var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        arrayNum.push(randomNum)

    }
    console.log(arrayNum)
}

console.log(numberGenerator(1, 100))

/*devo però generare 16 numeri, dovrò quindi utilizzare un ciclo che ripeta il generatore di numeri n volte fino a 16
facendo però in modo che ogni numero generato venga inserito dentro un array vuoto, tramite un push. darò quindi al while, come condizione,
di ripetersi 16 volte fino a che l'array.length non sarà pieno*/