/**
 * Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
 */


// La fecha de hoy
const fechaHoy =  new Date();
console.log(fechaHoy);

// La fecha de tu nacimiento
const fechaNacimiento =  new Date("January 23, 1980");
console.log(fechaNacimiento);

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const masTarde = fechaHoy > fechaNacimiento;
console.log(masTarde);

// Una variable que contenga el día de tu nacimiento
const diaNacimiento =  fechaNacimiento.getDate();
console.log(diaNacimiento);

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyoNacimiento =  fechaNacimiento.getFullYear();
console.log(anyoNacimiento);