// Métodos más utilizados con strings

// Como obtener la longitud de un string

let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice() substring() substr()
let slice_str = str.slice(5,10)
console.log(slice_str);

let substring_str = str.substring(5, 10)
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

// Reemplazar parte del contenido de un string
let cadena = "Hola mi nombre es Gorka"
console.log(cadena);

// Al utilizar strings solo reemplaza la primera instancia
console.log(cadena.replace("Gorka", "Miguel"));

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles. Siempre va cargado con una cesta hecha con ramitas y cuando tiene más de treinta nueces, elabora una deliciosa tarta de frutos secos y mermelada de mango. Como Tito es generoso, comparte el postre con sus amigos la ardilla y el puerco espín."

console.log(texto_largo.replace("los", "5"));

// Al usar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g,'cinco'));

