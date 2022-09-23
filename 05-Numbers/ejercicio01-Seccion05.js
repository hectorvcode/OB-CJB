/**
 * Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" 
    es igual al máximo valor que se puede obtener en Javascript
 */


// Una variable que contenga tu altura en centímetros (entero)
let alturaCentrimetros = 177;

// Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMetros = 1.77;

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKilos = 94.6;

// Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRedondeadaArriba = alturaMetros.toFixed();
console.log(alturaRedondeadaArriba);

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoKilosAbajo = Math.floor(pesoKilos);
console.log(pesoKilosAbajo);

/**
 * Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" 
 * es igual al máximo valor que se puede obtener en Javascript
 */

let max_val = Number.MAX_VALUE;
let max_val_1 = Number.MAX_VALUE + 1;

if(max_val === max_val + 1){
    console.log("No son iguales");
} else {
    console.log("Si son iguales");
}