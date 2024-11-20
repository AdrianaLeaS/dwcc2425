document.getElementById("executarReplace").addEventListener("click",
    function() {
     // Obter o texto introducido polo usuario
     let texto = document.getElementById("texto").value;
     // 1. Substituír a primeira ocorrencia da palabra "exemplo"
     console.log("Substituír primeira ocorrencia de 'exemplo':");
     let resultado1 = texto.replace(/exemplo/, '');
     console.log(resultado1);
     // 2. Substituír todas as ocorrencias da palabra "exemplo" usando o flag 'g'
     console.log("Substituír todas as ocorrencias de 'exemplo' (flag 'g'):");
     let resultado2 = texto.replace(/exemplo/g, '');
     console.log(resultado2);
     // 3. Substituír a palabra "EXEMPLO" ou "exemplo" ignorando maiúsculas/minúsculas (flag 'i')
     console.log("Substituír 'EXEMPLO' ou 'exemplo' (flag 'i'):");
     let resultado3 = texto.replace(/exemplo/i, '');
     console.log(resultado3);
      // 4. Substituír todas as ocorrencias de "exemplo" ignorando maiúsculas/minúsculas (flags 'gi')
    console.log("Substituír todas as ocorrencias de 'EXEMPLO' ou 'exemplo' (flags 'gi'):");
    let resultado4 = texto.replace(/exemplo/gi, '');
    console.log(resultado4);
    // 5. Multiline flag: Substituír a palabra ao comezo de cada liña (flag 'm')
    console.log("Substituír a palabra ao comezo de cada liña (flag 'm'):");
    let resultado5 = texto.replace(/^exemplo/gim, 'xxx');
    console.log(resultado5);
    });


