/**
- Replica el ejercicio completo del vídeo
- Añade dos párrafos más en cada una de las secciones
- Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: 
    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)
- Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, 
    éste se elimine
 */


//Obtener todos los parrafos en un array
const parrafos = document.querySelectorAll(".parrafo");
//Obtener todas las secciones en un array
const secciones = document.querySelectorAll(".section");
const papelera = document.querySelectorAll(".recicle-bin");

//Recorre el array
parrafos.forEach(parrafo => {
    //Agrega eventListener a cada elemento esperando que comience el drag
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText);
        //Poner una clase nueva
        parrafo.classList.add("dragging");
        //Transfiere el id del párrafo que se arrastra
        event.dataTransfer.setData("id", parrafo.id);
        const elemento_fantasma = document.querySelector(".imagen-fantasma");
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0);
    })
    
    //Agrega eventListener a cada elemento retirando la clase dragging cuando se deja de arrastrar el elemento
    parrafo.addEventListener("dragend", () => {
        //console.log("He Terminado de Arrastrar");
        parrafo.classList.remove("dragging");
    })
});

//Recorre el array de secciones
secciones.forEach(section => {
    //Agrega eventListener cuando se está arrastrando el elemento
    section.addEventListener("dragover", event => {
        //Evita el comportamiento por defecto de html
        event.preventDefault();
        //efecto del puntero cuando se arrastra el elemento
        event.dataTransfer.dropEffect = "move"; //copy por defecto
        //console.log("Drag Over");
    });

    //Agrega eventListener cuando se deja de arrastrar el elemento
    section.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id");
        //console.log("Parrafo id: ", id_parrafo);
        //Captura la información del id de cada párrafo en la variable parrafo
        const parrafo = document.getElementById(id_parrafo);
        //Mueve el párrafo a otra seccion
        section.appendChild(parrafo);
    })
});

papelera.forEach(papelera => {

    papelera.addEventListener("dragover", event => {
        event.preventDefault();
    })

    papelera.addEventListener("drop", event => {
        console.log("Drop in recicle - bin");
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        papelera.appendChild(parrafo);
        parrafo.classList.add("deleted");
    })
});