for (let i = 0; i <= 50; i++) {
    console.log("Numéro actuel : " + i);
    isFuzzOrBuzz(i);
}

console.log("Boucle terminée.")

function isFuzzOrBuzz(x) {
    if (x % 3 == 0) {
        console.log("Fizz")
    }
    if (x % 5 == 0) {
        console.log("Buzz")
    }
}



function FizzIiziziziBuzz() {
    let number = 0;
    let output = number;
    do {
        if (x % 5 === 0 && x % 3 === 0) {
            console.log("FizzBuzz");
        } else if (x % 3 == 0) {
            console.log("Fizz");
        } else if (x % 5 == 0) {
            console.log("Buzz");
        }
        number++;
        yield* output;
    } while (number <= 50)
}

let values = Array.from(FizzIiziziziBuzz());
console.log(values.join(" - "));