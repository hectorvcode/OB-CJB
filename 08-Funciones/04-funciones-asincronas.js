/**
 * Funciones asíncronas:
 * Cuando hacemos la llamada a una bd externa, puede tardar algún tiempo
 * no depende de nuestra infraestructura
 */

function miAsinc() {
    // Hace llamada a bd externa
    // Puede darnos algún error
}


/**
 * Promesas:
 * 
 */

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2);
    console.log(i);
    // Si esta todo correcto
    if(i !== 0){
        resolve();
    } else {
        reject();
    }
});


// Cómo consumir las promesas
miPromesa   
    .then(() => console.log("Se ha ejecutado correctamente"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))
    

