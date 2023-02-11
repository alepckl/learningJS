for (let i = 0; i <= 50; i++) {
    split(i.toString());
}
console.log("Boucle terminée.")

function split(x) {
    let firstNumber, secondNumber;

    firstNumber = x.substring(0, 1);
    secondNumber = x.substring(1);


    if (x.includes(3) && secondNumber == "5") {
        console.log("FizzBuzz");
    } else if (firstNumber == "3" || secondNumber == "3") {
        console.log("Fizz");
    } else if (firstNumber == "5" || secondNumber == "5") {
        console.log("Buzz");
    } else {
        console.log("Current number : " + x);
    }

}