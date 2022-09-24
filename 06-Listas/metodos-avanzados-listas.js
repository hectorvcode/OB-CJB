// Métodos más avanzados

// map() .filter() .reduce()
const array = ["San Sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"];

const val = array.forEach(v => {
    console.log(v);
});

console.log(val);

// Colocarle indice a cada elemento del array
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newArray);

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucia", edad: 3 },
    { nombre: "Amaia", edad: 29 },
]

// True para los que quiero pasar

/* const personasMayores = listaObjetos.filter(obj => {
    if(obj.edad > 30){
        return true
    } else {
        return false
    }
    
}); */

const personasMayores = listaObjetos.filter(obj => obj.edad > 30);
console.log(personasMayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel");
console.log(nuevaLista);


// reduce() para sumar todas las edades
const valores = [3, 56, 23, 5, 90, 100];
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur
});
console.log(suma);