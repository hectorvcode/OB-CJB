class Estudiante {
    nombre;
    asignaturas = ["JavaScript", "HTML", "CSS"];
    constructor(nombre){
        this.nombre = nombre;
    }

    obtenDatos(){
        return this.nombre
    }
}

const nuevoEstudiante = new Estudiante("Hector");
console.log(nuevoEstudiante);

const datosEstudiante = nuevoEstudiante.obtenDatos();
console.log(datosEstudiante);