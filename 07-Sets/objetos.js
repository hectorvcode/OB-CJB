/**
 * Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amigos
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
 */

// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosHector = {
    nombre: "Hector",
    apellido: "Vasquez",
    edad: 42,
    altura: 177,
    eresDesarrollador: true
}

// Una variable que obtenga tu edad a partir del objeto anterior
const edadPersona = datosHector.edad;
console.log(edadPersona);

//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amigos

const datosJorge = {
    nombre: "Jorge",
    apellido: "Huertas",
    edad: 41,
    altura: 160,
    eresDesarrollador: false
}

const datosLeidy = {
    nombre: "Leidy",
    apellido: "Varela",
    edad: 38,
    altura: 165,
    eresDesarrollador: false
}

const listaAmigos = [datosHector, datosJorge, datosLeidy];
console.log(listaAmigos);


// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaNueva = listaAmigos.sort((a, b) => b.edad - a.edad);
console.log(listaNueva);
