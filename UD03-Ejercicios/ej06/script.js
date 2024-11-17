/*Crea un arquivo JavaScript e engade o seguinte código, creando as seguintes variables:

Número: Unha variable de tipo numérico.
Texto: Unha variable de tipo cadea de caracteres (string).
Booleano: Unha variable de tipo booleano (true/false).
Nulo: Unha variable que conteña un valor nulo.
Indefinido: Unha variable que non teña asignado ningún - valor (undefined).
Símbolo: Unha variable de tipo símbolo
Data: unha variable co instante actual.

A continuación mostra por consola o tipo de dato para cada un dos casos. **Cal é o motivo do valor de typeof
cun Date ? (Xustifica a resposta)
 */

var numero = 15;
let nombre = 'Adriana';
let booleano = true;
let apellido = null;
let edad;
let simbolo = Symbol();
let ahora = new Date ();

console.log(typeof numero);
console.log(typeof nombre);
console.log(typeof booleano);
console.log(typeof apellido); //Cuando se asigna valor nulo devuelve como tipoDeDato Object
console.log(typeof edad);
console.log(typeof simbolo);
console.log(typeof ahora); // Me da un Object porque Date es un tipo de dato primitivo, sino un objeto con propiedades