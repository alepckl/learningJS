let word = "nigga mother fucking n";

let splittedWord = word.split(" ");

let finalWord = "";
for (let currentWord of splittedWord) {
    finalWord += currentWord.charAt(0).toUpperCase() + currentWord.substring(1) + " ";
}

console.log(finalWord);
