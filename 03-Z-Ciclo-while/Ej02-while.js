// #1 — Print the numbers from 0 to 15
console.log("Numbers from 0 to 15");
let i = 0;

while(i <= 15){
    console.log(i);
    i++;
}


//#2 — Print the numbers from 12 to 24
console.log("Numbers from 12 to 24");
let j = 12;

while(j <= 24){
    console.log(j);
    j++;
}


//#3 — Print the ODD numbers from 7 to 31
console.log("Print the ODD numbers from 7 to 31");
let k = 7;

while(k <= 31){
    if(k % 2 !== 0){
        console.log(k);
    }
    k++;
}


//#4 — Print the EVEN numbers from 10 to -20
console.log("Print the EVEN numbers from 10 to -20");

let l = 10;
while(l >= -20){
    if(l % 2 === 0){
        console.log(l);
    }
    l--;
}


/**
#5 — Iterate through all numbers from 1 to 45. Print the following:

For multiples of 3 print “Fizz”
For multiples of 5 print “Buzz”
For multiples of 3 and 5 print “FizzBuzz”
 */

console.log("FizzBuzz Exercise");
let n = 1;

while(n <= 45){
    if(n % 3 === 0 && n % 5 === 0){
        console.log("FizzBuzz");
    } else if(n % 3 === 0) {
        console.log("Fizz");
    } else if(n % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(n);
    }
    n++
}
