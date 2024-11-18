let expresion1 = /^\d{3}$/;

console.log(expresion1.test('123'));
console.log(expresion1.test('1a1'));
console.log(expresion1.test('12'));
console.log(expresion1.test('1234'));

let expresion2 = /^\d{3}-\d{3}-\d{4}$/;

console.log(expresion2.test('123-456-7890'));
console.log(expresion2.test('1234567890'));
console.log(expresion2.test('123-45-7890'));

let expresion3 = /^(#[A-Fa-f0-9]{3}|#[A-Fa-f0-9]{6})$/;

console.log(expresion3.test('#FFF'));
console.log(expresion3.test('#FFFFFF'));
console.log(expresion3.test('#FFFF'));

let expresion4 = / /g; 

var texto = "Esta é unha cadea de exemplo.";

console.log(texto.replace(expresion4,'-'));

let expresion5 = /^(\d{5}|\d{5}-\d{4})$/;

console.log(expresion5.test('12345'));
console.log(expresion5.test('12345-6789'));
console.log(expresion5.test('1234'));