const min = 0;
const max = 9;
const tamanox = 3;
const tamanoy= 3;

// Retorna un número aleatorio entre min e max
const aleatorio = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Retorna unha matriz aleatoria entre as dimensións indicadas como l1 e l2
const matrizAleatoria = function(l1, l2){
    var matriz = [];
    for(let i = 0; i < l1; i++){
        let fila = [];
        for(let j = 0; j < l2; j++){
            fila.push(aleatorio(min, max));
        }
        matriz.push(fila);
    }
    return matriz;
}

// Función para mostrar unha matriz en formato de tabla
const mostrarMatrizTabla = function(matriz){
    let saida = "<table> ";
    matriz.forEach(i => saida += generateRow(i));
    saida += "</table>";
    return saida;
}

// Función para xerar filas da táboa
const generateRow = function (row){
    var fila = "<tr>";
    row.forEach(i => fila += "<td width='10%'>" + i + "</td>");
    fila += "</tr>";
    return fila;
}

// Función que suma dúas matrices
const summatrix = function(m1, m2) {
    let resultado = [];
    
    for (i=0; i<m1.length; i++){
        resultado[i] = []; // Recorro la primera matriz iniciando la matriz resultado
        for (j=0; j<m1[i].length; j++){ 
            resultado[i][j]= m1[i][j]+ m2[i][j]; /*Para cada posicion de la primera matriz, 
            le sumo el elemento de la misma posición de la segunda matriz,
            y se lo asigno a la matriz resultado.*/
        }
    }

    return resultado;
    
};

// Xera dúas matrices aleatorias
let m1 = matrizAleatoria(tamanox, tamanoy);
let m2 = matrizAleatoria(tamanox, tamanoy);

// Suma das dúas matrices
let resultado = summatrix(m1, m2);

// Mostra as matrices en táboas
let tablaM1 = mostrarMatrizTabla(m1);
document.getElementById("m1").innerHTML = tablaM1;

let tablaM2 = mostrarMatrizTabla(m2);
document.getElementById("m2").innerHTML = tablaM2;

let tablaSuma = mostrarMatrizTabla(resultado);
document.getElementById("m3").innerHTML = tablaSuma;
