/**
 * Crea un nuevo proyecto de Node
- Crea un fichero index.html (utiliza el comando "!")
- Crea un fichero index.js
- Integra el fichero index.js en el html
 */

//- Crea una variable con tu nombre
const nombre = "Hector";

//- Crea una variable con tu apellido
const apellido = "Vasquez";

//- Crea un objeto con tu nombre y tu apellido
const objeto = {
    nombre: "Hector",
    apellido: "Vasquez"
}

//- Almacena el objeto anterior en la SessionStorage
//sessionStorage.setItem("persona", objeto);

//- Almacena el objeto anterior en la LocalStorage
//localStorage.setItem("persona", objeto);

//document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString();
//- Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
let cookieName = "person";
let expDate = new Date(new Date().getTime()+ 2 * 60 * 1000);

//document.cookie = cookieName + "=" + objeto + expDate + "path=/";

/**
- Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies
- Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo
- Observa cómo la SessionStorage está vacía
- Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador
- Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado
 */