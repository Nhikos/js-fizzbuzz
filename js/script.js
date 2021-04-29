// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var numero = 0;

for (var i=0; i<20; i++) {

    numero++;

    // condizioni

    // se multiplo di 3 E 5
    if (numero % 3 === 0 && numero % 5 === 0) {
         console.log("FizzBuzz");

    // se multiplo di 3
    } else if (numero % 3 == 0) {
         console.log("Fizz");

    // se multiplo di 5
    } else if (numero % 5 == 0) {
        console.log("Buzz")

    // fuori condizione
    } else {
         console.log(numero);
    }
}