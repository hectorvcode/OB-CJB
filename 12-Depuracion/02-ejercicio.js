/**
 * Crea un nuevo fichero JS que contenga las siguientes líneas
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de 
    números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función
 */

//The Rule is xn = xn−1 + xn−2
//0, 1, 2, 3, 4, 5, 6,  7,  8,  9, 10, 11,  12,  13,  14,  15
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811

function Fibo(num) {
    let answer = [];
    let x1 = 1;
    let x2 = 0;
    let xn;
    answer.push(x2);
    answer.push(x1);

    for(let i = 2; i < num; i++){
        xn = x2 + x1;
        x2 = x1;
        x1 = xn;
        answer.push(xn);
    }
    return answer
}

console.log(Fibo(6));

