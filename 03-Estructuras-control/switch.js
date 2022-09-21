// switch

let nota = 5;

switch(nota){
    case 5:
        console.log("Haz obtenido un sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo, puedes mejorar");
        break;
    case 3:
        console.log("Has obtenido un suficiente");
        break;
    case 2:
        console.log("no has aprobado por poco");
        break;
    case 1:
        console.log("No haz estudiado nada");
        break;
    default:
        console.log("Error, introduce una nota entre 1 y 5");
        break;
}