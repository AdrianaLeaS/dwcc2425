

// Implementa un sistema de login utilizando AJAX y PHP
// Este script xestiona o inicio de sesión do usuario mediante AJAX
// e PHP. O formulario de login envía os datos ao servidor,
// que os procesa e devolve unha resposta JSON.
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    fetch("api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = "dashboard.html";
            } else {
                document.getElementById("message").innerText = "Credenciais incorrectas.";
            }
        });
});