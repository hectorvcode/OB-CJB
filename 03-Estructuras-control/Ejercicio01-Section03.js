/**
 * Crea los siguientes archivos JS:
 *  factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
 * factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
 * factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
 */


//factorial -> for

const num = 10;

for (let i = 1; i < num + 1; i++) {
    console.log(i);
}

//factorial -> while

let n = 1;

while(n <= 10){
    console.log(n);
    n++;
}

// factorial -> break

let n1 = 1;

bucleFactorial: while(n1 <= 10){
    if(n1 <= 10) {
        console.log(n1);
        n1++;
    } else {
        break bucleFactorial;
    }
}