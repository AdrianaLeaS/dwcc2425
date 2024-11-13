// Crea un programa que tras quince segundos deixe de amosar o saúdo do exercicio anterior.
//Hay que crear un contador porque el clearInterval no coge tiempos.

let contador = 0;
var myInterval = null;

function saludo () {
    contador = contador +1;
    console.log (`execucion número ${contador}`);
    if (contador<=3){
        alert ('Hola!')
    }else {
        console.log(`Detenemos cronometro`)
        clearInterval(myInterval);
    }

    
}

myInterval = setInterval(saludo, 5000);

// Lo ejecuto hasta 4 veces porque en la última es donde entra en el else.



