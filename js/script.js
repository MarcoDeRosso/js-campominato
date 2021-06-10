/*per prima cosa faccio creare al computer 16 numeri randomici, tramite una funzione, dandogli un minimo e un massimo come valore che saranno 1 e 100 */

function numberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}