/**
 * Crea un archivo JS que contenga las siguientes líneas
- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos
 */


// Una función sin parámetros que devuelva siempre "true"
function siempreTrue () {
    return true;
};

siempreTrue();

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function miAsinc(){
    setTimeout(function(){
        console.log("Hola soy una promesa")
    }, 5000);
}
miAsinc();

// Una función generadora de índices pares automáticos
function* generaIndices() {
    let indice = 0;
    while(true) {
        indice++;
        if(indice % 2 == 0) { 
            yield indice; // Esperando hasta que se vuelva a llamar
        };
    };
};

const gen = generaIndices();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
