//app.js


let resultado = document.getElementById("result");

document.getElementById('ipForm').addEventListener("submit", function (event) {

    event.preventDefault();

    resultado.innerHTML = '';
    let ip = document.getElementById("ipInput").value.trim();

    if(!ip) {
        mostrarErro("Por favor, introduce una ip válida");
        return;
    }

    const url = `https://ipapi.co/${ip}/json/`;
    
    fetch(url)
        .then(response => {
            if(!response.ok)  throw new Error ('Error en la consulta');
            
            return response.json();
        
        })

        .then (data => {

            mostrarResultado(data);
        })

        .catch(error => {
            mostrarErro(error.message);
        });




});

function mostrarResultado(data){
    resultado.innerHTML = `
    
    <div class="alert alert-success mt-4">
    <h4 class="alert-heading">Información da IP: <span class="fw-bold">${data.ip}</span></h4>
    <hr>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Cidade:</strong> ${data.city || "-"}</li>
        <li class="list-group-item"><strong>Rexión:</strong> ${data.region || "-"}</li>
        <li class="list-group-item"><strong>País:</strong> ${data.country_name || "-"} (${data.country_code})</li>
        <li class="list-group-item"><strong>Continente:</strong> ${data.continent_code || "-"}</li>
        <li class="list-group-item"><strong>Latitude:</strong> ${data.latitude || "-"}</li>
        <li class="list-group-item"><strong>Lonxitude:</strong> ${data.longitude || "-"}</li>
        <li class="list-group-item"><strong>Organización:</strong> ${data.org || "-"}</li>
        <li class="list-group-item"><strong>Zona horaria:</strong> ${data.timezone|| "-"}</li>
    </ul>
</div>
    
    `;

}

function mostrarErro (mensaje) {
    document.getElementById("result").innerHTML = `
    <div class="alert alert-danger mt-4">
    <strong>Erro:</strong> ${mensaje}
</div>
    
    `;
}

