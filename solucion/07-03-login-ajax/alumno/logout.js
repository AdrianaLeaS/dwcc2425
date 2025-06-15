// Verificar se o usuario está autenticado
fetch("api/check_session.php")
.then(response => response.json())
.then(data => {
    if (!data.logged_in) {
        window.location.href = "index.html";
    }
});

// Logout
document.getElementById("logout").addEventListener("click", function (event) {
event.preventDefault();
fetch("api/logout.php")
    .then(() => {
        window.location.href = "index.html";
    });
});
