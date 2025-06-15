 
 let resultado = document.getElementById("result");
 

 function buscarPais () {
    let country = document.getElementById("country").value.trim();
    let url =  `https://restcountries.com/v3.1/name/${encodeURIComponent(country)}?fields=name,translations,capital,region,population,flags`;

    if(!country) {
        
        resultado.innerHTML="<p>Debe introducir un valor válido</p>";
        return;
     }else {

     

        resultado.innerHTML = "Buscando...";
     fetch (url)
     .then(response=> {

        if(!response.ok){
            throw new Error ('Pais no encontrado' + response.status);
        }
         return response.json();
     })

    .then (data => {

        let pais = data[0];

        let nombreEspañol = pais.translations?.spa?.common || pais.name.common;

        resultado.innerHTML= `
        <h2>${nombreEspañol}</h2>
        <img src="${pais.flags.svg}" alt = "Bandera de ${nombreEspañol}">
        <p>Capital: ${pais.capital ? pais.capital[0]: "Desconocida"} </p>
        <p>Region: ${pais.region}</p>
        <p>Poboación: ${pais.population.toLocaleString()}</p>
        
        `;
        

    })

    .catch(error => {
     
        
        resultado.innerHTML = `<p>Pais no encontrado o error en la busqueda ${error.message}</p>`;
        
    });

} 
}
