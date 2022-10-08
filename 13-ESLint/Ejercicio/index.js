// Strings (cadenas de caracteres)

let str_dbl = "Hola soy un string con cadena doble";
let str_sng = "Hola soyn un string con comillas simples";

console.log(str_dbl);
console.log(str_sng);

let str_comillas_scape = "El otro dia me dijo literalmente \"ve a sacar la basura\"";
let str_comillas_simples = "El otro dia me dijo literalmente \"ve a sacar la basura\"";
let str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'";
console.log(str_comillas_scape);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);

// Backticks

let str_backticks = "Hola este es un string con backticks";
console.log(str_backticks);


let nombre = "Hector";
let saludo = `Hola, ${nombre}, bienvenido!`;

console.log(saludo);

// Plantillas HTML

let plantilla = `
    <html>
        <h1>Página web de ${nombre}</h1>
        <p>Este es un párrafo</p>
    </html>
`;

console.log(plantilla);


// Introducción de variables en HTML

let libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"];

