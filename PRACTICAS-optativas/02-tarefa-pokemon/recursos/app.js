let boton = document.getElementById("getPokemonButton");
let nome = document.getElementById("pokemonName");
let tipo = document.getElementById("pokemonType");
let img = document.getElementById("pokemonImage");



function fetchRandomPokemon (){

    let aleatorio = Math.floor(Math.random()*898)+1;
    
    let url = `https://pokeapi.co/api/v2/pokemon/${aleatorio}`;
//
    fetch(url)
    .then (response => {
        if (!response.ok){
            throw new Error ("Error en la solicitud" + response.status); //porque no entra en el error
        }

        return response.json();
    })

    .then (data => {
        let nombre = data.name;
        //Puede haber uno o mas tipos
        let type = data.types.map(t => t.type.name).join(", ");
        let imgUrl = data.sprites.front_default;

        //Trata el nombre como un Array, convierte la primera a mayuscula y la concatena con el resto del nombre cortado desde la posicion 1
        nome.textContent = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        tipo.textContent = type;
        img.src = imgUrl;
        img.alt = `Imagen de ${nombre.charAt(0).toUpperCase() + nombre.slice(1)}`;
    })

    .catch (error => console.error ('Error: ', error));
}

boton.addEventListener("click", fetchRandomPokemon);