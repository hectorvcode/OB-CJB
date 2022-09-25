// Carga y sobrecarga de funciones

function saludar() {
    hola();
}

function hola() {
    console.log("Soy la función Hola");
}

saludar();

// Ejecuta el código de arriba hacia abajo
// 1. global() -> Carga la función global()
// 2. saludar() global() -> Carga la función saludar por encima de global()
// 3. hola() saludar() global() -> Entra a la función saludar y descubre que debe llamar a la función hola
// 4. saludar() global() -> cuando termina con hola, la retira de la carga
// 5. global() -> cuando termina la función saludar, la retira de la carga

/* function recursivo() {
    recursivo(); Maximum call stack size exceeded -> OverFlow
}
recursivo() */