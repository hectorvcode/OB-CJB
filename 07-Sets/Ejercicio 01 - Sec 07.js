/**
 * Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
 */


// Un nuevo Set con los nombres de tu familia
const famArr = ["Natalia", "Alison", "Danna", "Hector"];
const familia = new Set(famArr);
console.log(familia);

// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familia.add("Hector");
console.log(familia);

// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familia.add("Javascript");
console.log(familia);