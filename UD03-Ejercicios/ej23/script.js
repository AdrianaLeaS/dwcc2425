document.getElementById('gardar').addEventListener('click', function() {
   
        //Recoge los datos de los campos y los setea en la sessionStorage
        let nome = document.getElementById("nome");
        let mensaxe = document.getElementById("mensaxe");

        sessionStorage.setItem(nome, mensaxe);
        resultado = sessionStorage.getItem("nome");
        console.log(sessionStorage.getItem("nome"));
   
   });