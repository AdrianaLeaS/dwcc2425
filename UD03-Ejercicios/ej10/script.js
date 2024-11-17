document.getElementById("analisarTexto").addEventListener("click",
    function() {
     // Obter o texto introducido polo usuario
     let texto = document.getElementById("texto").value;
    
     // 1. Contar palabras no texto
     function contarPalabras(texto) {
     
        texto.trim();
        let array = texto.split(' ');
        let resultado = array.length;
      
     return resultado;
     }
     // 2. Atopar a palabra máis longa
     function palabraMaisLonga(texto) {
        
        texto.trim();
        let array = texto.split(' ');
        let resultado = ""; // Variable que va a almacenar la palabra mas larga
        for (let i =0; i<array.length; i++) {
          
          if (resultado.length <= array[i].length){
            resultado = array [i];
          }
           
        }
        return resultado;
     }
     // 3. Inverter o texto
     function inverterTexto(texto) {
    
        let array = texto.split(" "); // OJO, se separa por espacios
        array.reverse(); // se le da la vuelta
        resultado = array.join(" "); // se vuelve a unir todo dejando un espacio entre cada elemento del array

     return resultado;
     }
     // 4. Eliminar vogais do texto
     function eliminarVogais(texto) {
        //Resolvemos utilizanod una expresion regular con el metodo replace. (Las reemplazamos por 'nada')
        let resultado = texto.replace(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/g, '');

     return resultado;
     }
     // Actualizar o contido dos parágrafos coa análise do texto
     document.getElementById("contarPalabras").textContent = "Número de palabras: " + contarPalabras(texto);
     document.getElementById("palabraMaisLonga").textContent = "Palabra máis longa: " + palabraMaisLonga(texto);
     document.getElementById("textoInvertido").textContent = "Texto invertido: " + inverterTexto(texto);
     document.getElementById("eliminarVogais").textContent = "Texto sen vogais: " + eliminarVogais(texto);
    });
    