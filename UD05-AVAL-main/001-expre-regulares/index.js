import{Test, estimar} from './modulo.js';
 


 
function eventoVerificar(){
    let input="";

    //TODO: Recuperar o valor do input para pasar a funcion 
    input = document.getElementById("valor").value; // recupero el valor
    //y se lo pase a la funcion validarResultado   
    validarResultado(input);
}

//Función que valida o resultado é correcto. 
function validarResultado(input){
        let resultado= new Array();
        let saida="";
    
    //1. Validar un número entero
    let patron = /^\d+$/; ///^[-+]?[0-9]+$/ EN LUGAR DEL INTERVALOD E NUMEROS SE PUEDE UTILIZAR EL \d
    saida +=`Resultado de 1 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //2. Validar un numero entero positivo
    patron = /^(?<!-)\d+$/; ///^[+]?[0-9]+$/ IGUAL UE EL DE ARRIBA PERO SIN EL NEGATIVO
    saida += `Resultado de 2 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //3. Validar un numero entero negativo
    patron = /^(?<=-)\d+$/; ///^[-][0-9]+$/ IGUAL QUE EL DE ARRIBA PERO SIN EL + NI EL ? PORQUE NO ES OPCIONAL
    saida += `Resultado de 3 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //4. Validar DNI, 8 números y una letra al final.
    patron = /^[0-9]{8}[A-Za-z]$/; // HABRIA QUE DETERMINAR BIEN LAS LETRAS QUE PUEDEN IR EN UN DNI
    saida += `Resultado de 4 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));


    //5. Validar una IP.(192.168.50.0 - 10.0.0.2) (Habria que validar cada parte por separado?)
    patron = /^([0-9] | [1-9] | [0-9] | 1[1-9][0-9] | 2[0-4][0-9] | 25[0-5])[.:]{3}([1-9] | [1-9] | [0-9] | 1[1-9][0-9] | 2[0-4][0-9] | 25[0-5])$/; 
    // le estoy validando que no puedan ser mayores de 255 y le digo que tiene que estar ese patron tres veces, que acabe en punto , y que lo haga una vez mas que no termine en punto.
    saida += `Resultado de 5 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //6. Validar una matricula de un coche con formato 0000XXX. //las matriculas no tienen vocales
    patron = /^[0-9]{4}[A-Z]{3}$/; ///^[0-9]{4}[B|C|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|V|W|X|Y|Z]{3}$/;
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
    patron = /^[0-9A-F]+$/i; //
    saida += `Resultado de 9 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //10. Validar un número real.Real es que pueda tener decimales.
    patron = /^[-+]?\d+([\.,]\d+)?$/;
    saida += `Resultado de 10 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //11. Validar un número real positivo.
    patron = /^(?<!-)\d+(\.\d+)?$/; // /^[+]?\d+([\.,]\d+)?$/ IGUAL QUE ARRIBA PERO SOLO PARA POSITIVOS
    saida += `Resultado de 11 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));
    
    //12. Validar un número real negativo.
    patron = /^(?<=-)\d+(\.\d+)?$/; // /^[-]\d+([\.,]\d+)?$/ IGUAL QUE ARRIBA PERO SOLO PARA NEGATIVOS
    saida += `Resultado de 12 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //13. Validar un número real con 0 o 1 o 2 decimales.
    patron = /^-?\d+(\.\d{1,2})?$/; ///^[-+]?\d+([\.,]\d{1,2})?$/;
    saida += `Resultado de 13 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //14. Validar un número real positivo con 0 o 1 o 2 decimales.
    patron = /^(?<!-)\d+(\.\d{1,2})?$/; ///^[+]?\d+([\.,]\d{1,2})?$/;
    saida += `Resultado de 14 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //15. Validar un número real negativo 0 o 1 o 2 decimales.
    patron = /^(?<=-)\d+(\.\d{1,2})?$/; ///^[-]\d+([\.,]\d{1,2})?$/;
    saida += `Resultado de 15 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //16. Validar una fecha con formato dd/mm/aaaa o dd-mm-yyyy.
    patron = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/; ///^(0[1-9] | [0-2][0-9] | 3[0-1])(\/ | -)(0[1-9] | 1[0-2])(\/ | -)(\d){4}$/;
    saida += `Resultado de 16 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //17. Validar una fecha con formato  Fecha, hora y minuto: dd/mm/yyyy hh:mm o dd-mm-yyyy hh:mm.
    patron = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})\s(\d{1,2})\:(\d{1,2})$/; ///^(0[1-9] | [0-2][0-9] | 3[0-1])(\/ | -)(0[1-9] | 1[0-2])(\/ | -)(\d){4} (\s)([0-1][0-9] | 2[0-3])(:)([0-5][0-9])$/;
    saida += `Resultado de 17 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //18. Validar un email.
    patron = /^(?:\w+\.?)*\w+@(?:\w+\.)+\w+$/; ///^[a-zA-1z0-9\.+]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9]+)*$/
    saida += `Resultado de 18 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //19. Valida un nombre de usuario en twitter, empieza por @ y puede contener letras mayusculas y minusculas, numeros y guiones bajos.
    patron = /^@\w+$/; ///^@[a-zA-Z0-9_]{4,15}$/;
    saida += `Resultado de 19 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    //20. Validar ISBN de 13 digitos, siempre empieza en 978 o 979.
    patron = /^(978|979)\d{10}$/; 
    saida += `Resultado de 20 ${patron.test(input)}<br>`;
    resultado.push(patron.test(input));

    document.getElementById("resultado").innerHTML = saida;

    return resultado; // Ojo con esto, sino no funciona el estimar.

       
}


//Engadir o evento ao botón validar
//TODO 
let botonValidar = document.getElementById("verificar"); //Hay que seleccionar el boton
botonValidar.addEventListener("click", eventoVerificar,false); // y despues darle el listenner



//Engade o evento ao botón estimar
//TODO 
document.addEventListener('DOMContentLoaded',() => {
document.getElementById("estimar").addEventListener("click", estimar, false);
/* ESTO ES LO QUE HIZ EL PROFE, ES MENOS LIOSO.
let botonEstimar = document.getElementById("estimar");
botonEstimar.addEventListener("click", estimar,false );
*/
});

export{validarResultado}