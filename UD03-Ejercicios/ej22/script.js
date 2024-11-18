let cores = ["Vermello", "Verde", "Azul"];
console.log(cores);

//Engadir un elemento o final
cores.push("Amarelo");
console.log(cores);

//Elimina a primerira cor
cores.shift();
console.log(cores);

let numeros = [1,2,3,4,5];
console.log(numeros);

//Eliminar o numero de índice 2. En splice(en que posicion quiero que empiece a borrar, cuantos elementos quiero que borre).
numeros.splice(2,1);
console.log(numeros);

//Añadir elementos en el medio del array
numeros.splice(2,0,6,7); // En este split le digo que en la posicion2, me elimine 0 elementos, y añada el 6 y el 7. Se podria hacer a la vez con el de arriba
console.log(numeros);

//Crea otro array y concatena
var otro = [7,8,9];
console.log(numeros.concat(otro));

var matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] ;
//Añade una nueva fila al final del array
matriz.push([10, 11, 12]);
console.log(matriz);

//Imprimir todos los valores de la matriz
for (let i =0; i<matriz.length; i++) {
    for (let j =0; j<matriz[i].length; j++){
        console.log(matriz[i][j]);
    }
}
//Crea un obxecto
let persoa = {nome: 'Marina', idade: 30, cidade: 'Santiago'};
console.log(persoa);

//Añade una nueva propiedad
persoa.profesion = "Contable";
console.log(persoa);
//modifica el valor de la ciudad
persoa.cidade = "A Coruña";
console.log(persoa);

//Crea un mapa
const persoas = new Map();
//Añade tres entradas al mapa
persoas.set('Pedro', 25);
persoas.set('Manoli', 36);
persoas.set('Adolfo', 40);
//Recupera el valor de una de ellas
console.log(persoas.get('Manoli'));
//elimina una de las entradas y comprueba si existe en el mapa
console.log(persoas);
persoas.delete('Adolfo');
console.log(persoas.has('Adolfo'));
console.log(persoas);