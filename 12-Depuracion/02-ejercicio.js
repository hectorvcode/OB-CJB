/**
 * Crea un nuevo fichero JS que contenga las siguientes líneas
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función
 */

/* function Fibo(number){
    if(number <= 1){
        return number;
    }
    const result = [0, 1];
    for(let i = 2; i <= number; i++){
        result[i] = result[i - 2] + result[i - 1]
    }
    return result[result.length - 1]
}
console.log(Fibo(7)); */


function Fibo(numero){
    let n1 = 0, n2 = 1, nextNum, i;
    
    for(i = 0; i < numero; i++){
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }
    return n1;
}

console.log(Fibo(6));