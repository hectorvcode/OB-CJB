// El número de narcisos se refiere a un número de tres dígitos y la suma de los 
// dígitos a la potencia de 3 es igual a si mismo. Por ejemplo:
// 1^3 + 5^3 + 3^3 = 153, imprima todos los numeros de narcisos menores a 1000

arrayNarcisos = [];
for(let i = 100; i < 1000; i++) {
    let digi1 = i % 10;
    let digi2 = parseInt((i / 10) % 10);
    let digi3 = parseInt((i / 100));
    
    if(digi1 ** 3 + digi2 ** 3 + digi3 ** 3 === i){
        arrayNarcisos.push(i);
    }
}
console.log(arrayNarcisos);