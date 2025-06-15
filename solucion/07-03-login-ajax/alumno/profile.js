// Cargar datos do perfil ao facer clic en "Perfil"
// Este script xestiona a carga dos datos do perfil do usuario
 
   document.querySelector('a[href="profile.html"]').addEventListener("click", function (event) {
    event.preventDefault();

    // Realizar unha petición POST para obter os datos do perfil
    fetch("api/profile.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include", // Inclúe as cookies na petición
        body: JSON.stringify({ action: "get_profile" }) // Exemplo de corpo da petición
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro na resposta do servidor");
            }
            return response.json();
        })
        .then(data => {
            // Crear unha nova páxina para mostrar os datos do perfil
            const profilePage = `
            <h2>Perfil de Usuario</h2>
            <p><strong>Nome:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Rexistrado desde:</strong> ${data.registered_since}</p>
            <a href="dashboard.html">Volver ao Panel</a>
        `;
            document.querySelector("main").innerHTML = profilePage;
        })
        .catch(error => {
            console.error("Erro ao cargar o perfil:", error);
            alert("Non foi posible cargar o perfil. Por favor, inténteo de novo.");
        });
});