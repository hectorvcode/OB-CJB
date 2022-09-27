const miFuncion = val => {
    if(typeof val === "number"){
        return 2 * val;
    }
    //return false;
    throw new Error("El valor debe ser de tipo número");
}

//const elDoble = miFuncion("ala1");
const numero = "8";

/* try {
// Código que puede fallar
console.log("Está ejecutándose de forma correcta");
const doble = miFuncion(numero);
console.log(doble);
} catch(e) {
    // En caso de fallar, quiero que ejecutes
    console.log("Error!!!");
} finally {
    console.log("Esto se va a ejecutar si existe o no un error");
} */

try {
    // Código que puede fallar
    console.log("Está ejecutándose de forma correcta");
    const doble = miFuncion(numero);
    console.log(doble);
    } catch(e) {
        // En caso de fallar, quiero que ejecutes
        console.log(`El valor de e es: ${e}`);
        console.log("Error!!!");
    } finally {
        console.log("Esto se va a ejecutar si existe o no un error");
    }

// InternalError -> por ejemplo el overflow de callback function

// SyntaxError -> errores en la sintaxis del código

// TypeError -> errores en el tipo de dato

// RangeError -> se intenta acceder a una posición que sobrepasa la cantidad de elementos

// ReferenceError -> cuando no existe la refencia

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error