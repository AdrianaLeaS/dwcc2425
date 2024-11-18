document.getElementById("executarOperacions").addEventListener("click",
    function() {
     // Obter os números introducidos polo usuario
     let numero1 = parseFloat(document.getElementById("numero1").value);
     let numero2 = parseFloat(document.getElementById("numero2").value);
     // 1. Potencia (numero1 elevado a numero2)
     function calcularPotencia(num1, num2) {
        
        let resultado1 = Math.pow(num1, num2);
        return resultado1;
     }
     // 2. Raíz cadrada do primeiro número
     function raizCadrada(num1) {
     
        let resultado2 = Math.sqrt(num1);
        return resultado2;
     }
     // 3. Máximo entre os dous números
     function valorMaximo(num1, num2) {
     
        let resultado3 = Math.max(num1, num2);
        return resultado3;
     }
     // 4. Mínimo entre os dous números
     function valorMinimo(num1, num2) {

        let resultado4 = Math.min(num1, num2);
        return resultado4;
     }
     // 5. Seno do primeiro número (en radians)
     function calcularSeno(num1) {

        let resultado5 = Math.sin(num1);
        return resultado5;
     }
     // 6. Coseno do segundo número (en radians)
     function calcularCoseno(num2) {
     
        let resultado6 = Math.cos(num2);
        return resultado6;
     }
     // 7. Exponencial de numero1
     function calcularExponencial(num1) {
     
        let resultado7 = Math.exp(num1);
        return resultado7;
     }
     // 8. Logaritmo natural de numero1
     function calcularLogaritmoNatural(num1) {
     
        let resultado8 = Math.log(num1);
        return resultado8;
     }
     // 9. Cálculo da hipotenusa
     function calcularHipotenusa(num1, num2) {
     
        let resultado9 = Math.hypot(num1, num2);
        return resultado9;
     }
     // 10. Truncado de número
     function truncarNumero(num1) {
     
        let resultado10 = Math.trunc(num1);
        return resultado10;
     }
     // Actualizar os resultados
     document.getElementById("resultado1").textContent = `1. ${numero1} elevado a ${numero2}: ` + calcularPotencia(numero1, numero2);
     document.getElementById("resultado2").textContent = `2. Raíz cadrada de ${numero1}: ` + raizCadrada(numero1);
     document.getElementById("resultado3").textContent = `3. Máximo entre ${numero1} e ${numero2}: ` + valorMaximo(numero1, numero2);
     document.getElementById("resultado4").textContent = `4. Mínimo entre ${numero1} e ${numero2}: ` + valorMinimo(numero1, numero2);
     document.getElementById("resultado5").textContent = `5. Seno de ${numero1} (en radianos): ` + calcularSeno(numero1).toFixed(4);
     document.getElementById("resultado6").textContent = `6. Coseno de ${numero2} (en radianos): ` + calcularCoseno(numero2).toFixed(4);
     document.getElementById("resultado7").textContent = `7. Exponencial de ${numero1}: ` + calcularExponencial(numero1).toFixed(4);
     document.getElementById("resultado8").textContent = `8. Logaritmo natural de ${numero1}: ` + calcularLogaritmoNatural(numero1).toFixed(4);
     document.getElementById("resultado9").textContent = `9. Hipotenusa de ${numero1} e ${numero2}: ` + calcularHipotenusa(numero1, numero2).toFixed(4);
     document.getElementById("resultado10").textContent = `10. Truncado de ${numero1}: ` + truncarNumero(numero1);
    });
    

