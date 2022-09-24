// Metodos para ordenar

const array = [2, 5, 9, 15, 1, 2, 0, 4];
console.log(array);


// .sort() -> modifica el array ordenando los elementos
array.sort((elemeAnt, elemenSig)=>{
    //return -1 -> invierte el orden
    if(elemeAnt < elemenSig){
        return 1
    } else if (elemeAnt > elemenSig) {
        return -1
    } else { // a = b
        return 0
    }
});
console.log(array);


// Ordenar únicamente arrays numéricos
const arrayNum = [4, 1, 7, 3, 1, 3, 56, 1, 546];

arrayNum.sort((a, b) => a - b);
console.log(arrayNum);

arrayNum.sort((a, b) => b - a);
console.log(arrayNum);


// Ordenar array de objetos por edad de menor a mayor
const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucia", edad: 3 },
    { nombre: "Amaia", edad: 29 },
]

/* listaObjetos.sort((a, b) => {
    if(a.edad < b.edad) {
        return -1
    } else if (a.edad > b.edad) {
        return 1
    } else {
        return 0
    }
}); */

listaObjetos.sort((a, b) => a.edad - b.edad);

console.log(listaObjetos);