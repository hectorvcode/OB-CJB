/**
 * Crea un archivo JS que contenga las siguientes líneas
    - Una variable que contenga la lista de la compra (mínimo 5 elementos)
    - Modifica la lista de la compra y añádele "Aceite de Girasol"
    - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
    - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
    - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
    - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
    - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
    - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
    - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
 */

// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compras = ["atun", "carne", "huevos", "queso", "leche"];

// Modifica la lista de la compra y añádele "Aceite de Girasol"
compras.push("Aceite de Girasol");
console.log(compras);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.pop();
console.log(compras);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculas = [
    { titulo: "El Señor de los Anillos", director: "Peter Jackson", fecha: 2001 },
    { titulo: "El Hobbit", director: "Peter Jackson", fecha: 2012 },
    { titulo: "La Liga de la Justicia", director: "Zack Snyder", fecha: 2021 }
];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const posteriores = peliculas.filter(film => film.fecha > 2010);
console.log(posteriores);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(valor => valor.director);
console.log(directores);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(valor => valor.titulo);
console.log(titulos);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const newList = directores.concat(titulos);
console.log(newList);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listSpread =  [...directores, ...titulos];
console.log(listSpread);