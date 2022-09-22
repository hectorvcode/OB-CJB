// Métodos de string (parte 2)

let input =  "Escorpio";
let db = "escorpio";

// toLowerCaser() - toUpperCase()

console.log(input.toLowerCase());
console.log(input.toUpperCase());

console.log(input === db);
console.log(input.toLowerCase() === db.toLowerCase());

// concatenar dos string

let str_1 = "Yo soy la primera cadena.";
let str_2 = "Yo soy la segunda cadena";

console.log(str_1.concat(" ",str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1}${str_2}`);

// Eliminar espacios al inicio y final
let str_3 = "      Hola soy un string con espacios al final.       "
console.log(str_3.length);
// usar método trim
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string número 4";

console.log(str_4.charAt(0));

//Se comporta como un array
console.log(str_4[0]);

// Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Gorka yt me gusta el surf. Mi nombre es Gorka y mi apellido es Villar"

console.log(str_5.indexOf("Gorka"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Gorka"));