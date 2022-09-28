const logger = require('./logger')

//logger.log("Hola estoy saliendo por pantalla");
logger.info("Mensaje informativo");
logger.debug("Mensaje de debug");
logger.warn("Advertencia");
logger.error("Este es un error");

try {
    // Código que puede fallar
    console.log("Está ejecutándose de forma correcta");
    const doble = miFuncion(numero);
    console.log(doble);
    } catch(e) {
        // En caso de fallar, quiero que ejecutes
        console.log(`El valor de e es: ${e}`);
        console.log("Error!!!");
    } finally {
        console.log("Esto se va a ejecutar si existe o no un error");
    }