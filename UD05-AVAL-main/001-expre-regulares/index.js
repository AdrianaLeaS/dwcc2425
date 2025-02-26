import{Test, estimar} from './modulo.js';
 


 
function eventoVerificar(){
    let input="";

    //TODO: Recuperar o valor do input para pasar a funcion 
    input = document.getElementById("valor").value;
    
    validarResultado(input);
}

//Función que valida o resultado é correcto. 
function validarResultado(input){
        let resultado= new Array();
        let saida="";
    //TODO
    //1. Validar un número entero
    let patron = /^\d+$/;
    saida +=`Resultado de 1 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //2. Validar un numero entero positivo
    patron = /^(?<!-)\d+$/;
    saida += `Resultado de 2 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //3. Validar un numero entero negativo
    patron = /^(?<=-)\d+$/;
    saida += `Resultado de 3 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //4. Validar DNI, 8 números y una letra al final.
    patron = /^[0-9]{8}[A-Za-z]$/;
    saida += `Resultado de 4 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));


    //5. Validar una IP.(192.168.50.0 - 10.0.0.2) (Habria qeu validar cada parte por separado?)
    patron = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
    saida += `Resultado de 5 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //6. Validar una matricula de un coche con formato 0000XXX.
    patron = /^[0-9]{4}[A-Z]{3}$/;
    saida += `Resultado de 6 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //7. Validar un número binario.
    patron = /^[01]+$/;
    saida += `Resultado de 7 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //8. Validar un número octal.
    patron = /^[0-7]+$/;
    saida += `Resultado de 8 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //9. Validar un número hexadecimal.
    patron = /^[0-9A-Fa-f]+$/;
    saida += `Resultado de 9 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //10. Validar un número real.
    patron = /^-?\d+(\.\d+)?$/;
    saida += `Resultado de 10 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //11. Validar un número real positivo.
    patron = /^(?<!-)\d+(\.\d+)?$/;
    saida += `Resultado de 11 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));
    
    //12. Validar un número real negativo.
    patron = /^(?<=-)\d+(\.\d+)?$/;
    saida += `Resultado de 12 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //13. Validar un número real con 0 o 1 o 2 decimales.
    patron = /^-?\d+(\.\d{1,2})?$/;
    saida += `Resultado de 13 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //14. Validar un número real positivo con 0 o 1 o 2 decimales.
    patron = /^(?<!-)\d+(\.\d{1,2})?$/;
    saida += `Resultado de 14 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //15. Validar un número real negativo 0 o 1 o 2 decimales.
    patron = /^(?<=-)\d+(\.\d{1,2})?$/;
    saida += `Resultado de 15 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //16. Validar una fecha con formato dd/mm/aaaa o dd-mm-yyyy.
    patron = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/;
    saida += `Resultado de 16 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //17. Validar una fecha con formato  Fecha, hora y minuto: dd/mm/yyyy hh:mm o dd-mm-yyyy hh:mm.
    patron = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})\s(\d{1,2})\:(\d{1,2})$/;
    saida += `Resultado de 17 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //18. Validar un email.
    patron = /^(?:\w+\.?)*\w+@(?:\w+\.)+\w+$/;
    saida += `Resultado de 18 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //19. Valida un nombre de usuario en twitter, empieza por @ y puede contener letras mayusculas y minusculas, numeros y guiones bajos.
    patron = /^@\w+$/;
    saida += `Resultado de 19 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //20. Validar ISBN de 13 digitos, siempre empieza en 978 o 979.
    patron = /^(978|979)\d{10}$/;
    saida += `Resultado de 20 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    document.getElementById("resultado").innerHTML = saida;

    return resultado; // Ojo con esto, sino no funciona el estimar.

    /*//Ejemplo
        // 1.  Validar un número 0-3.
         patron= /^[0-3]+$/; 
        saida+=`Resultado de 1: ${patron.test(input)}`;
        resultado.push(patron.test(input));

        // 2.  Ejemplo que no me sale
        patron= /^[0-3]+$/; 
        saida+=`Resultado de 2: ${patron.test(input)}`;
        resultado.push(null); //Como no me sale le añado un null
 

        // 3.  VAlidar o que sexa 
        patron= /^[A-B]+$/; 
        saida+=`Resultado de 3: ${patron.test(input)}`;
        resultado.push(patron.test(input));*/

       
}


//Engader o evento ao botón validar
//TODO 
verificar.addEventListener("click", eventoVerificar,false);



//Engade o evento ao botón estimar
//TODO 
document.addEventListener('DOMContentLoaded',() => {
document.getElementById("estimar").addEventListener("click", estimar, false);

});

export{validarResultado}