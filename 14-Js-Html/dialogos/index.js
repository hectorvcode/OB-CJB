const boton = document.querySelector("#btn")
//console.log(boton);

boton.addEventListener("click", () => {
    //alert("Se ha hecho click");
    //confirm("Estás de acuerdo?") && console.log("ok");
    //confirm("Estás de acuerdo?") ? console.log("ok") : console.log("Noooo!");;

    const respuesta = confirm("Seguro?")
    if(respuesta){
        console.log("Estas de acuerdo");
    } else {
        console.log("No estas de acuerdo");
    }
});

const botonInfo = document.querySelector("#info");
botonInfo.addEventListener("click", () => {
    const nombre = prompt("Cuál es tu nombre?");
    if(nombre){
        console.log("Tu nombre es: " + nombre);
    } else {
        console.log("No has introducido nombre");
    }
})

const lista = [
    {
        nombre: "Gorka",
        edad: 34
    },
    {
        nombre: "Julen",
        edad: 21
    },
    {
        nombre: "Amaia",
        edad: 30
    }
]

//console.log(lista);
console.table(lista);
