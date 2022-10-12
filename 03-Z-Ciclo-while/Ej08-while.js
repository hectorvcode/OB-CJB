/**
Exercise 8)
Write a program that will allow someone to guess a four digit pin exactly 4
times. If the user guesses the number correctly. It prints “That was
correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.
// Example output:
// Please make your guess: 
// 4544 
// Sorry that was wrong.
// Please make your guess: 
// 4444
// Sorry that was wrong.
// Please make your guess: 
// 0704
// That was correct!
 */

let pin = 0704;
let i = 0;
const prompt = require("prompt-sync")({ sigint: true });

pin = pin.toString(8);
pin = "0" + pin;

while(i < 4){
    const userInput = prompt("please make your guess a four digit pin: ");
    if(userInput == pin){
        console.log("That was correct!");
        break;
    } else {
        console.log("Sorry that was wrong");
    }
    i++;
}
console.log("Please start the game again");
