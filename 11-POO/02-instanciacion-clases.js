class Persona {
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`);
    }
}

const nueva_persona = new Persona("Gorka", 34, true);
console.log(nueva_persona);
nueva_persona.saludo();

let numero = 60; // inicializar
console.log(typeof numero);

let persona2 = new Persona("Maria, 35, false");  // instanciar


// instanceof -> similar a typeof pero para clases
console.log(persona2 instanceof Persona);

