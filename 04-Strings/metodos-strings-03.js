// Métodos de string (parte 3)
// https:regexr.com

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles. Siempre va cargado con una cesta hecha con ramitas y cuando tiene más de treinta nueces, elabora una deliciosa tarta de frutos secos y mermelada de mango. Como Tito es generoso, comparte el postre con sus amigos la ardilla y el puerco espín."

console.log(texto_largo.match(/no/g));

// Existe la palabra dentro del texto?
console.log(texto_largo.includes("prefiere"));

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito"));

// Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("n."));