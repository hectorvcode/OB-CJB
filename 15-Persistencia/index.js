//localStorage.setItem("nombre", "Gorka");
//localStorage.setItem("nombre", "Miguel");

console.log(localStorage.getItem("nombre"));

//JSON.stringify -> Convierte un objeto / array en string
localStorage.setItem("persona", JSON.stringify({ nombre: "Gorka", edad: 32 }));

//JSON.parse -> Convierte un objeto / array convertido a través de stringify en un objeto de JavaScript
console.log(JSON.parse(localStorage.getItem("persona")));

localStorage.removeItem("nombre");


//Ahora con session storage
sessionStorage.setItem("nombre-sesion", "Gorka");


//Cookies
document.cookie = "nombreCookie=GorkaCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString();

console.log(document.cookie);

