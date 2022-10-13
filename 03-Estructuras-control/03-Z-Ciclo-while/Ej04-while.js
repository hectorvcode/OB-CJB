/**
4. Construct while loops to do the following:
    a. Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive value greater than 5000 but less than 30000.
    b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry by having the loop continue until the user enters an integer from 1 - 7.
    c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers. (Hint: The loop should end when there is not enough fuel to boost the crew another 50 km, so the fuel level might not reach 0).

5. After the loops complete, output the result with the phrase, The shuttle gained an altitude of ___ km.
    a. If the altitude is 2000 km or higher, add "Orbit achieved!"
    b. Otherwise add, "Failed to reach orbit."
 */


// 4. Construct while loops to do the following:
// a. Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive value greater 
//  than 5000 but less than 30000.

const prompt = require("prompt-sync")({ sigint: true });

let fuel = prompt("Please enter the fuel, greater than 5000 but less than 30000: ");
let min = 5000;
let max = 30000;

while(fuel <= min){
    fuel = prompt("You are below, please enter the fuel again: ");
    while(fuel >= max){
        fuel = prompt("You are above, please enter the fuel, again: ");
    }
}
console.log(fuel);

// b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). 
//      Validate the entry by having the loop continue until the user enters an integer from 1 - 7.
let numberAstronauts = prompt("Please enter the number of Astronauts: ");
while(numberAstronauts < 1){
    numberAstronauts = prompt("You are below, please enter the number of Astronauts: ");
    while(numberAstronauts > 7){
        numberAstronauts = prompt("You are above, please enter the number of Astronauts: ");
    }
}
console.log(numberAstronauts);

// c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, 
//  decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers. 
//  (Hint: The loop should end when there is not enough fuel to boost the crew another 50 km, so the fuel level might not reach 0).

let altitude = 0;
while(fuel >= 100){
    altitude = altitude + 50;
    fuel = (fuel -100) * numberAstronauts;
}
console.log(altitude);