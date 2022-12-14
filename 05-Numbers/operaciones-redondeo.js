// Principales operaciones aritméticas

let a = 3.5;
let b = 4.8;

console.log(a + b);
console.log(a -b);
console.log(a * b);
console.log(a / b);


// Representación de los numeros en strings
console.log(typeof a);
let a_s =  a.toString();
console.log(a_s);
console.log(typeof a_s);


// Redondear de números decimales
let c = 3.3;
let d = c * 3;
console.log(d);
console.log(typeof d);

//toFixed(x) -> limita el numero de decimales a x
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

let e = 1839.123456789;
let f = 2213556153215;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// toPrecision(x) -> limita el número de cifras significativas
console.log(e.toPrecision(4));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(3));