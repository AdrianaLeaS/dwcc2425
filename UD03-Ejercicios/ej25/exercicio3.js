document.getElementById('crearCookie').addEventListener('click', function crearCookie()
{
 document.cookie = "usuario=adriana";
});
document.getElementById('mostrarCookie').addEventListener('click',
function mostrarCookie(usuario) {
   let cookies = document.cookie.split("; ");
    for (let i=0; i<cookies.length; i++) {
        let par = cookies[i].split("=");
        if (par[0] === usuario){
            return par[1];
        }
    }
 return console.log(mostrarCookie("usuario"));
}
);

