// Abre a base de datos IndexedDB
let db;
const request = indexedDB.open("ScoresDB", 1);

request.onerror = function(event) {
   //TODO: Implementar 
};

request.onsuccess = function(event) {
    //TODO: Implementar 
    displayScores();
};

// Crea a estrutura da base de datos se non existe
request.onupgradeneeded = function(event) {
     //TODO: Implementar 
};

// Función para rexistrar ou editar a puntuación
document.getElementById("scoreForm").onsubmit = function(event) {
    event.preventDefault();
    const playerName = document.getElementById("playerName").value;
    const score = parseInt(document.getElementById("score").value);
    const scoreId = document.getElementById("scoreId").value;

    //TODO: Implementar
    //TODO: Se existe scoreId estamos ante unha edición e noutro caso unha inserción   
     
    //TODO: Implementar para a transacción cando se complete.
    
    //TODO: Implementar para a transacción cando haxa un erro. 
    
};

// Función para mostrar as puntuacións rexistradas e calcular a media
function displayScores() {
   //TODO: Implementar a transacción para obter as puntuacións rexistradas

    request.onsuccess = function(event) {
        const scores = event.target.result;
        const scoreList = document.getElementById("scoreList");
        scoreList.innerHTML = ""; // Limpa a lista existente
        //TODO: Implementar ==> Engadir as filas á táboa 
         
    };
}

// Función para editar a puntuación
function editScore(id, playerName, score) {
    document.getElementById("playerName").value = playerName;
    document.getElementById("score").value = score;
    document.getElementById("scoreId").value = id; // Almacena a ID da puntuación a editar
}

// Función para borrar a puntuación
function deleteScore(id) {
     //TODO: Implementar
}
