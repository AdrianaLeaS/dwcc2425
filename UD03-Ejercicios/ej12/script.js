document.getElementById("executarNumeros").addEventListener("click",
    function() {
     // Obter o número introducido polo usuario
     let numero = parseFloat(document.getElementById("numero").value);
     // 1. Arredondamento do número (Math.round)
     function arredondarNumero(num) {
     
        let resultado1 = Math.round(num);
        return resultado1; 
     }
     // 2. Valor absoluto do número (Math.abs)
     function valorAbsoluto(num) {
     
        let resultado2 = Math.abs(num);
        return resultado2;
     }
     // 3. Arredondamento cara abaixo (Math.floor)
     function arredondarAbaixo(num) {
     
        let resultado3 = Math.floor(num);
        return resultado3;
     }
     // 4. Arredondamento cara arriba (Math.ceil)
     function arredondarArriba(num) {
     
        let resultado4 = Math.ceil(num);
        return resultado4;
     }
     // 5. Xeración dun número aleatorio entre 1 e 100
     function numeroAleatorio() {

        let resultado5 = Math.floor(Math.random()*(100));
        return resultado5;
     }
     // 6. Traballo con decimais (limitación a dous decimais)
     function decimaisDous(num) {

        let resultado6 = num.toFixed(2);
        return resultado6;
     }
     // Actualizar os resultados
     document.getElementById("resultado1").textContent = "1. Arredondamento do número: " + arredondarNumero(numero);
     document.getElementById("resultado2").textContent = "2. Valor absoluto do número: " + valorAbsoluto(numero);
     document.getElementById("resultado3").textContent = "3. Arredondamento cara abaixo: " + arredondarAbaixo(numero);
     document.getElementById("resultado4").textContent = "4. Arredondamento cara arriba: " + arredondarArriba(numero);
     document.getElementById("resultado5").textContent = "5. Número aleatorio entre 1 e 100: " + numeroAleatorio();
     document.getElementById("resultado6").textContent = "6. Número limitado a dous decimais: " + decimaisDous(numero);
    });
    