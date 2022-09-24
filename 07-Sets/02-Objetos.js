// Trabajando con Objetos
const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "González",
    isDeveloper: true,
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1,2,3,4]
}

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "isDeveloper"
console.log(obj[prop]);

// Pilas con este tipo de asignaciones al trabajar con strings
const obj2 = obj;
console.log(obj2);

obj2.nombre = "Carlos";
console.log(obj2.nombre);
console.log(obj.nombre);


// Al trabajar con números se hace una copia del valor
let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1);
console.log(val2);


// Para trabajar con una copia del set
const obj3 = { ...obj }
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Hector"

console.log(obj.nombre);
console.log(obj3.nombre);


// Cómo ordenar listas de objetos en función de una propiedad
const listaPelis = [
    { titulo: "Lo que el viento se llevó", anyo: 1939 },
    { titulo: "Titanic", anyo: 1997 },
    { titulo: "Mohana", anyo: 2016 },
    { titulo: "El efecto mariposa", anyo: 2004 },
    { titulo: "Ted", anyo: 2012 }
];

console.log(listaPelis);

// .sort() -> cambia el valor original de la lista
listaPelis.sort((a, b) => a.anyo- b.anyo);
console.log(listaPelis);
