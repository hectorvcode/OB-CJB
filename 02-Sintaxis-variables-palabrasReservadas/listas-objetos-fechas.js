// Listas, arreglo
const lista1 = [1, "hola", true, undefined, null];
const lista2 = new Array(1, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista1, lista2, lista3];


console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martin", "Raul"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    },
    "tipo-pantalla": "amoled"
}
movil.anio = 2019;
movil.marca = "Samsung";
console.log(movil.tarjeta.almacenamiento);
console.log(movil.anio);
console.log(movil.marca);
console.log(movil["tipo-pantalla"]);

// no se puede reasignar el objeto, muestra error
//movil = {}

//Fechas
//Librerías de apoo como moment.js
const ahora = new Date();

console.log(ahora);

// se puede definir usando milisegundos
const fecha_miliseg = new Date(10);
console.log(fecha_miliseg);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 2, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth()+1;
const anio = ahora.getFullYear();
console.log(dia, mes, anio);