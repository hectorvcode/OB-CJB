//  Imprima todos los números primos entre 1 y 100

function esPrimo(numero) {
    if(numero < 2){
        return false;
    }
    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            return false;
        }
    }
    return true;
}

function encontrarPrimos(limite){
    respuesta = [];
    for(let i = 2; i <= limite; i++){
        if(esPrimo(i)){
            respuesta.push(i);
        }
    }
    return respuesta
}

console.log(encontrarPrimos(100));








