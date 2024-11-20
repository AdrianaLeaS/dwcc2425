let frase = "Ola, benvido á práctica de manipulación de strings!";
console.log(frase.length);

let saudo = "Ola";
let nome = "Ana";
console.log(saudo.concat(nome));
console.log(String.prototype.concat(saudo,nome));

let texto = "JavaScript é moi interesante!";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

let paragrafo = "Aprender JavaScript pode ser divertido e útil.";
console.log(paragrafo.indexOf('po'));

let cita = "O saber non ocupa lugar.";
console.log(cita.slice(3,16));
console.log(cita.substring(3,8));
console.log(cita.substr(3,20));

let mensaxe2 = "JavaScript é complicado!";
console.log(mensaxe2.replace('complicado', 'fácil'));

let lista = "mazá, laranxa, plátano, pera";
console.log(lista.split(' '));

let textoConEspazos = " Ola mundo! ";
console.log(textoConEspazos.trim());

