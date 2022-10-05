// Exercise 8)
// Write a program that will allow someone to guess a four digit pin exactly 4
// times. If the user guesses the number correctly. It prints “That was
// correct!” Otherwise it will print “Sorry that was wrong.” Program stops after 
//the 4th attempt of if they got it right.
let pin = "0704";
const prompt = require("prompt-sync")({ sigint: true });

for(let i = 1; i <= 4; i++){
    const userPin = prompt("Please, make your guess ");
    if(userPin === pin){
        console.log("That's correct");
        break;
    } else {
        console.log("Sorry, that was wrong");
    }
}