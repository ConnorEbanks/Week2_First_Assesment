console.log('Welcome to the password validation tool!');

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("*Please enter at least a 10 digit password*: ", function(input){
    password = input;
    if (password.length >= 10){
        console.log('This password will work!!!!')
    } else {
        console.log('You did not enter a 10 digit passcode.')
    }
    reader.close()
})