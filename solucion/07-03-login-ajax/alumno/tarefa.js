 // Cargar datos do tarefas ao facer clic en "tarefas" tarefas.html
 document.querySelector('a[href="tarefa.html"]').addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("main").innerHTML = ""; // Limpar o contido principal
    // Realizar unha petición GET para obter os datos dos tarefas
    fetch("api/tarefa.php", { credentials: "include" })
    .then(response => response.json())
    .then(data => {
        let  listado = JSON.parse(data);

    
    // Crear unha táboa para mostrar os tarefas
    let table = " <h1> tarefas</h1><table border='1' style='width: 100%; text-align: left; border-collapse: collapse;'>";
    table += "<thead><tr><th>ID</th><th>Produto</th><th>Cantidade</th><th>Prezo</th><th>Data</th></tr></thead>";
    table += "<tbody>";

    // Iterar sobre os datos e engadir filas á táboa
    listado.forEach(tarefa => {
        table += `<tr>
            <td>${tarefa.id_tarefa}</td>
            <td>${tarefa.titulo}</td>
            <td>${tarefa.descripcion}</td>
            <td>${tarefa.prioridade}</td>
            <td>${tarefa.data_limite}</td>
        </tr>`;
    });

    table += "</tbody></table>";

    // Inserir a táboa no contido principal
    document.querySelector("main").innerHTML += table;

      })
    .catch(error => {
        console.error("Erro ao cargar os tarefas:", error);
        alert("Non foi posible cargar os tarefas. Por favor, inténteo de novo.");
    });
});



