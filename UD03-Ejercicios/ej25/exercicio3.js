document.getElementById('crearCookie').addEventListener('click', function crearCookie()
{
    let nomeCookie = prompt("Introduce o nome da Cookie");
    let valorCookie = prompt("Introduce un valor da Cokkie");
    document.cookie = `${nomeCookie}=${valorCookie};max-age=2000;path=/`;
});
document.getElementById('mostrarCookie').addEventListener('click',
function mostrarCookie(usuario) {
    let nomeCookie = prompt("Introduce o nome da Cookie a recuperar");
   // Las cookies son un string de clave valor separa por un igual, por lo que hay que hacerle un splid
   
    let galleta = document.cookie.split("; ");

    for (let i=0; i<galleta.length; i++) {
        let c = galleta[i].trim(); // Para quitarle los espaciond el principio y del final
        if(c.indexOf(`${nomeCookie}=`)===0){
            alert(c.substring(nomeCookie.length+1))
            return c.substring(nomeCookie.length+1);//El mas uno es para que no me aparezca el igual
        }
    }
    return null;  
});

