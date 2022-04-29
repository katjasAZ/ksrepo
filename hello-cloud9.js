var readline = require('readline-sync');
var i = 5;
var input;

console.log("Hello Katja!");
console.log("i is " + i);

do {
    input = readline.question("Enter a number (or 's' to quit): ");
    if (input === 's') {
        console.log('OK, exiting.')
    }
    else{
        i += Number(input);
        console.log("i is now " + i);
    }
} while (input != 'q');

console.log("Goodbye!");
