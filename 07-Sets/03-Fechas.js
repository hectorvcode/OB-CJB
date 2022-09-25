// Trabajando con fechas
const fecha = new Date();
console.log(fecha);

// Nota: los meses inicializan con cero -> enero: 0
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(fecha2);

// Usando milisegundos
const fecha3 = new Date(0);
console.log(fecha3);

const fechaT = new Date(-10000000000000);
console.log(fechaT);

// Usando strings
const fecha4 =  new Date("october 13, 1979 12:15:15");
console.log(fecha4);

// Fecha posterior a otra?
console.log(fecha > fecha2);
console.log(fecha < fecha2);

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(fecha2 === fecha5); // no se pueden comparar fecha de esta manera

// Se comparan en milisegundos
console.log(fecha2.getTime() === fecha5.getTime());

// Obtener el dia, mes, año de una fecha
console.log(fecha2.getDate()); // día
console.log(fecha2.getMonth()+1); // mes
console.log(fecha2.getFullYear()); // año

// Mostrar una fecha en un string
console.log(fecha2);
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString('en-GB'));