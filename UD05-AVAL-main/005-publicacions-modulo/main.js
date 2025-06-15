// /main.js
//TODO: Engade os moódules necesarios para que o código funcione correctamente.
import { Publicacion }  from "./clases/Publicacion.js";
import Revista from "./clases/Revista.js"
import Libro from "./clases/Libro.js"


/*const publicaciones = [
  new Libro("El Quijote", "Miguel de Cervantes", 1605, "Novela"),
  new Revista("National Geographic", "Varios", 2023, "Enero"),
];*/



//TODO: Implementa o código preciso para que se engada o evento DOMContentLoaded ao documento e se execute o seguinte:
// 1. Obter o elemento co id "contenedor" e gardalo nunha constante chamada contenedor.
// 2. Recorrer o array de publicaciones e, por cada publicación:
// 3. Emprega o código forEach publicaciones.forEach((pub) => { para recorrer o array de publicaciones.

document.addEventListener("DOMContentLoaded", ()=> { //Cargamos la página

  const contenedor = document.getElementById("contenedor"); //Obtenemos el elemento contenedor.

  const publicaciones = [
    new Libro("La novia gitana", "Carmen Mola",2018, "Novela"),
    new Libro("La chica de nieve", "Javier Castillo", 2020, "Novela"),
    new Revista("Elle", "Varios", 2025, "Febrero"),
    new Revista("Sportlife", "Deporte", 2024, "Mayo"),
  ];
  
  publicaciones.forEach((pub) => {
    const elemento = document.createElement("div"); //Crea un div para cada elemento
    elemento.textContent = pub.obtenerInfo(); //Le da el contenido que obtiene de obtenerInfo
    contenedor.appendChild(elemento); //Añade el elemento al contenedor
  });

});
