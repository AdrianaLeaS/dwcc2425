// Abre a base de datos IndexedDB
let db;
const request = indexedDB.open("ScoresDB", 1);

request.onerror = function(event) {
   console.error ("Error al abrir la base de datos: ", event.target.errorCode);
};


request.onsuccess = function(event) {
    db = event.target.result;
    displayScores();
};

// Crea a estrutura da base de datos se non existe
request.onupgradeneeded = function(event) {
    db = event.target.result;
    const objectStore = db.createObjectStore ("xogador", {keyPath: "scoreId", autoIncrement: true });
    objectStore.createIndex ("playerName", "playerName",  {unique: false });
    objectStore.createIndex ("score", "score", {unique: false });
    objectStore.createIndex("data", "data", {unique: false });
};


// Función para rexistrar ou editar a puntuación
document.getElementById("scoreForm").onsubmit = function(event) {
    event.preventDefault();
    const playerName = document.getElementById("playerName").value;
    const score = parseInt(document.getElementById("score").value);
    const scoreId = document.getElementById("scoreId").value;
    const data = document.getElementById("data").value;

    const nuevoJugador = {playerName, score, data};
    engadirXogador (nuevoJugador);
    document.getElementById("scoreForm").reset();
    
    //TODO: Se existe scoreId estamos ante unha edición e noutro caso unha inserción   
      
    
};
function engadirXogador (xogador) {
    const transaction = db.transaction(["xogador"], "readwrite");
    const objectStore = transaction.objectStore("xogador");
    const request = objectStore.add(xogador);

    request.onsuccess = function (){
        console.log("Xogador engadido con éxito: ", xogador);
        displayScores();
    };
    request.onerror = function (event) {
        console.error("Error o engadir o xogador: ", event.target.error);
    };
}

// Función para mostrar as puntuacións rexistradas e calcular a media
function displayScores() {

    const transaction = db.transaction(["xogador"], "readonly");
    const objectStore = transaction.objectStore("xogador");

    const request = objectStore.openCursor();

    request.onsuccess = function(event) {
        const cursor = event.target.result;
        const scoreList = document.getElementById("scoreList");
        scoreList.innerHTML = ""; // Limpa a lista existente
        
        
            if (cursor) {
                let item = cursor.value;
                let fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${item.scoreId}</td>
                    <td>${item.playerName}</td>
                    <td>${item.score}</td>
                    <td>${item.data}</td>
                    <td>
                        <button onclick='deleteScore(${item.scoreId})'> Eliminar </button>
                        <button onclick='editScore(${item.scoreId}, "${item.playerName}", ${item.score})'>Editar</button>
                    </td>
                `;
                scoreList.appendChild (fila);
                cursor.continue();
            }else {
                console.log("Lista completa.")
            }
         
        };
         request.onerror = function(event) {
            console.log ("Error al obtener los datos: ", event.target.error);
         };
    }


// Función para editar a puntuación
function editScore(id, playerName, score) {
    document.getElementById("playerName").value = playerName;
    document.getElementById("score").value = score;
    document.getElementById("scoreId").value = id; // Almacena a ID da puntuación a editar

    //TODO: 
}

// Función para borrar a puntuación
function deleteScore(id) {
     

    const transaction = db.transaction(["xogador"], "readwrite");
    const objectStore = transaction.objectStore("xogador");

    const request = objectStore.delete(id);

    request.onsuccess = function (){
        console.log("Xogador eliminado con éxito ", id);
        displayScores();
    }
    request.onerror = function (event){
        console.log ("Error eliminando ao xogador ", id);
        console.log(event.target.error);
    }
}