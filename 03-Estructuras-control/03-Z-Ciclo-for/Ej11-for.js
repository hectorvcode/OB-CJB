// Exercise 2 - Using a for loop print all even numbers up to and including n. Don’t include 0.
function evenNumbers (n) {
    let arr = [];
    for(let i = 1; i < n; i++){
        if(i % 2 === 0){
            arr.push(i);
        }
    }
    return arr;
}

console.log(evenNumbers(22));