
 // TODO: O alumnado debe usar o obxecto navigator para obter e
// mostrar na páxina:
document.getElementById("appName").textContent = navigator.appName;
document.getElementById("appVersion").textContent = navigator.appVersion;
document.getElementById("language").textContent = navigator.language;
document.getElementById("platform").textContent = navigator.platform;

 // TODO: O alumnado debe usar o obxecto screen para obter e mostrar
//na páxina:
document.getElementById("screenWidth").textContent = screen.width;
document.getElementById("screenHeight").textContent = screen.height;

 // TODO: O alumnado debe implementar as funcións para o obxecto
//location:
function actualizarPaxina () {
    window.location.reload();
}

function irAGoogle () {
    window.location.assign ("https://www.google.com");
}
 
 // TODO: O alumnado debe implementar as funcións para o obxecto
//history: (fixate no html como se chaman)
function irAtras () {
    window.history.back;
}

function irAdiante() {
    window.history.forward;
}

