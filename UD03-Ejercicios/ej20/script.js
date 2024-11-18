function dividirNumeros (num1, num2) {
    try {
        if(num2 ===0){
            throw new Error ("Non é posible dividir por cero")
        }
        return num1/num2;

    }catch(error){
        console.log("Error: ", error.message);
    }

}

function validarEdad (edad) {
    
        if (edad <18){
            throw new Error ("Debes ser maior de idades para acceder");
        }

        console.log("Acceso permitido");
}

function calcularSalario (horasTraballadas, salarioPorHora){
    try {
        if (horasTraballadas<0 || salarioPorHora<0){
            throw new Error ("Os valores non poden ser negativos.");
        }
    } catch (error) {
        console.log(error.message);
    }finally{
        console.log("Calculo de salario finalizado.");
    }

}