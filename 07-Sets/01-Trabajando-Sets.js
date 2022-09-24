// Sets o conjuntos
const array = [1, 2, 3, 4, 5, 1, 2, 5, "hola", {id: 5}, {id: 5}];
console.log({id: 5} === {id: 5});

const miSet = new Set(array);

// Los set son un conjunto no ordenado de valores unicos
console.log(array);
console.log(miSet);


// Metodos

// Para adicionar -> .add()
miSet.add(9);
console.log(miSet);

// PAra eliminar -> .delete()
miSet.delete("hola");
console.log(miSet);

// Tiene algun valor? -> .has()
console.log(miSet.has(4));

// Saber tamaño del set
console.log(miSet.size);

// Para iterar
miSet.forEach(valor => {
    console.log(valor);
});

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miSet = [ ...miSet ]
console.log(ar_miSet[1]);

//Para eliminar todos los valores del set -> .clear()
miSet.clear();
console.log(miSet);
