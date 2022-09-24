// Comparación de listas
// .every() -> todos los elementos cumplen una condicion
const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

/* const resultado = array.every((valor) => {
    if(typeof valor === "number") {
        return true
    } else {
        return false
    }
}); */

const resultado = array.every((valor) => typeof valor === "number");
console.log(resultado);

// Comparación de listas
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

// Las listas no se comparan de esta forma
console.log(ar1 === ar2);

const compararArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  /* const res = array1.every((valor, i) => {
        if(valor === array2[1]) return true
        return false
    }) */
  const res = array1.every((valor, i) => valor === array2[i]);
  return res;
};

console.log(compararArrays(ar1, ar2));

const ar3 = [1,2,3,6];
console.log(compararArrays(ar1, ar3));