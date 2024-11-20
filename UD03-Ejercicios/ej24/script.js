document.getElementById('gardar').addEventListener('click', function() {
   
    //Recoge los datos de los campos y los setea en la sessionStorage
    let nome = document.getElementById("nome").value;
    let mensaxe = document.getElementById("mensaxe").value;

    // Se guardan los datos en sesion uno a uno
    localStorage.setItem('nome', nome);
    localStorage.setItem('mensaxe', mensaxe);
   
    // Para mostrar los datos. Recuperar información.
    
    let nomeSesion = localStorage.getItem('nome');
    let mensaxeSession = localStorage.getItem('mensaxe');
    
    document.getElementById("resultado").innerHTML = `<p> Nome: ${nomeSesion} - Mensaxe: ${mensaxeSession}</p>`;
});

//Al hacer el window onload lo que hace es una vez que esta cargada la pagina se dispara el evento.
//Con eso conseguimos que se vuelvan a cargar los datos que metimos anteriormente, para no tener que esar escribiendo todo el rato.
window.onload = function() {
    let nomeSesion = localStorage.getItem('nome');
    let mensaxeSession = localStorage.getItem('mensaxe');

    let nome = document.getElementById("nome").value = nomeSesion;
    let mensaxe = document.getElementById("mensaxe").value = mensaxeSession;
    
    document.getElementById("resultado").innerHTML = `<p> Nome: ${nomeSesion} - Mensaxe: ${mensaxeSession}</p>`;
}