document.getElementById('gardar').addEventListener('click', function() {
   
        //Recoge los datos de los campos y los setea en la sessionStorage
        let nome = document.getElementById("nome").value;
        let mensaxe = document.getElementById("mensaxe").value;

        // Se guardan los datos en sesion uno a uno
        sessionStorage.setItem('nome', nome);
        sessionStorage.setItem('mensaxe', mensaxe);
       
        // Para mostrar los datos. Recuperar información.
        
        let nomeSesion = sessionStorage.getItem('nome');
        let mensaxeSession = sessionStorage.getItem('mensaxe');
        
        document.getElementById("resultado").innerHTML = `<p> Nome: ${nomeSesion} - Mensaxe: ${mensaxeSession}</p>`;
   });