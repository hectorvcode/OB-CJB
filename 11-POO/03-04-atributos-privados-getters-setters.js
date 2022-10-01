class Persona {
    // Private -> # : colo se puede acceder desde dentro de la clase
    #nombre;
    #edad;

    // Protected -> _ :  solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true;

    constructor(nom, edad){
        this.#nombre = nom;
        this.#edad = edad;
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`);
    }

    // Funcion Getter -> nos permite acceder de forma controlada a algun atributo
    obtenerNombre() {
        return this.#nombre;
    }

    #obtenerEdad() {
        return this.#edad;
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaEdad){
        this.#edad = nuevaEdad;
    }
}

const persona= new Persona("Gorka", 70);


/**
 * 
 persona.nombre = "Adios";
 console.log(persona);
 console.log(persona.nombre);
 */

//persona.saludo();

//console.log(persona.obtenerNombre());

// console.log(persona.#obtenerEdad());
//console.log(persona._isDeveloper);

// Getter -> metodos que nos permiten obtener atributos / métodos privados o protegidos
const edad = persona.getEdad();
console.log(edad);

// Setter -> métodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
// Cambiar la edad de la persona
persona.setEdad(34);
console.log(persona.getEdad());