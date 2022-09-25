// Que son las funciones

/**
 * Son bloques de código que se ejecutan con un fin específico
 */

// Como se declaran
/* function saludar(parametro1, parametro2, parametro3) {
    console.log("Hola");
} */

//saludar("Miguel");

const nom = "Gorka"

saludar(nom)

function saludar(nombre) {
    console.log(nom);
    console.log(`Hola ${nombre}`);
}


// Pasando valores string
let nombre2 = "Juan"
console.log(nombre2);

despedir(nombre2)

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adiós ${nombre}`);
}


//pasando valores referencia
let persona = {
    nombre: "Juan",
    apellido: "González"
}

saludarPersona(persona)
console.log(persona);

function saludarPersona(objeto) {
    objeto.apellido = "Villar" //Nos cambia el objeto original
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

saludar();

// Parámetros por defecto
function imprimeNumero(numero = 7) {
    console.log(numero);
}

imprimeNumero();


// Definir funciones con unos parámetros indeterminados
function imprimir(...parametros) {
    console.log(parametros);
};

imprimir(1,3,9,2,"hola", {id:9});

function suma(...nums) {
    //console.log(nums[2]); -> 3
    //console.log(...nums); -> 1, 2, 3, 4
    console.log(nums);
    console.log(nums.reduce((a, b) => a + b));
    return nums.reduce((a, b) => a + b)
};
const s = suma(1, 2, 3, 4, 9, 15, 16);
console.log(s); // Undefined si no hay return


// Ambito de una función

let variable = "Hi"

function multiplicar(a = 0, b = 0){
    console.log(variable);
    let variableInterna = "Bye";
    return a * b
}

console.log(multiplicar(4, 9));
// console.log(variableInterna); No se puede acceder a esta variable desde fuera