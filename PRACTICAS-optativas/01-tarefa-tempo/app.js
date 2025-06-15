let boton = document.getElementById("getDogButton");
let imagen = document.getElementById("dogImage");

let apiKey = 'live_LMBzsr99phPqCECjPHBriDj8BA3rxP4NzyVDViG4GLb6ny1m3cEXTG906QcQ9pwk';

function fetchImagenPerro () {

    let url = `https://api.thedogapi.com/v1/images/search?api_key=${apiKey}`;


    fetch(url)
    .then (response => {

        //if (!response.ok) {
        //throw new Error ('Error en la solicitud' + response.status);
        //}
        //return response.json;
        if (response.ok) {
            return response.json();
        }else {
            throw new Error ('Error en la solicitud' + response.status);
        }
    })
    //nos devuelve un array y cogemos la url del primer elemento
    .then(data => {
        
       let imgUrl = data[0].url;

       imagen.src = imgUrl;
       imagen.alt = "Foto de un perro aleatorio";

    })

    .catch(error => console.error("error: ", error));
    
}

boton.addEventListener("click", fetchImagenPerro);