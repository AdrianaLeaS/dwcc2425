 

function eliminarVogais() {
    let texto = prompt("Introduce un texto:");
    if (texto) {
        let resultadoWhile = eliminarVogaisWhile(texto);
        let resultadoDoWhile = eliminarVogaisDoWhile(texto);
        let resultadoFor = eliminarVogaisFor(texto);

        alert("Texto sen vogais (while): " + resultadoWhile);
        alert("Texto sen vogais (do-while): " + resultadoDoWhile);
        alert("Texto sen vogais (for): " + resultadoFor);
    } else {
        alert("Non se introduciu ningún texto.");
    }
}

    let textoSenVogais = "";
    let caracter = [];
    const vocales = ['a', 'e', 'i', 'o', 'u'];

function eliminarVogaisWhile(texto) {
   
    resultadoWhile = textoSenVogais;
    return resultadoWhile;
}

function eliminarVogaisDoWhile(texto) {
     
     resultadoDoWhile = textoSenVogais;
     return resultadoDoWhile;
}

function eliminarVogaisFor(texto) {
    
    
    resultadoFor = textoSenVogais;
    return resultadoFor;
}


//==================================
// Script para automatizar probas.
//==================================
function runTests() {
    const tests = [
        { input: "Hola Mundo", expected: "Hl Mnd", description: "Elimina vogais de 'Hola Mundo'" },
        { input: "aeiou", expected: "", description: "Elimina todas as vogais" },
        { input: "Testando", expected: "Tstnd", description: "Elimina vogais de 'Testando'" },
        { input: "Javascript", expected: "Jvscrpt", description: "Elimina vogais de 'Javascript'" },
        { input: "Vogais", expected: "Vgs", description: "Elimina vogais de 'Vogais'" },
        { input: "", expected: "", description: "Cadena baleira" },
        { input: "12345", expected: "12345", description: "Números sen cambios" },
        { input: "Fruta", expected: "Frt", description: "Elimina vogais de 'Fruta'" },
        { input: "Universidade", expected: "nvrsdd", description: "Elimina vogais de 'Universidade'" },
        { input: "Elefante", expected: "lfnt", description: "Elimina vogais de 'Elefante'" },
        { input: "Consonantes", expected: "Cnsnnts", description: "Elimina vogais de 'Consonantes'" },
        { input: "Árbol", expected: "rbl", description: "Elimina vogais acentuadas de 'Árbol'" },
        { input: "ruído", expected: "rd", description: "Elimina vogais acentuadas de 'ruído'" },
        { input: "Coímbra", expected: "Cmbr", description: "Elimina vogais acentuadas de 'Coímbra'" },
        { input: "xuízo", expected: "xz", description: "Elimina vogais acentuadas de 'xuízo'" },



    ];

    let totalTests = tests.length;
    let passedTests = 0;
    let failedTests = 0;

    let output = '';

    tests.forEach((test, index) => {
        const resultWhile = eliminarVogaisWhile(test.input);
        const resultDoWhile = eliminarVogaisDoWhile(test.input);
        const resultFor = eliminarVogaisFor(test.input);

        let passedWhile = resultWhile === test.expected;
        let passedDoWhile = resultDoWhile === test.expected;
        let passedFor = resultFor === test.expected;

        output += `Test ${index + 1}: ${test.description}\n`;
        output += `  Expected: ${test.expected}\n`;
        output += `  While: ${resultWhile} - ${passedWhile ? "✓" : "✗"}\n`;
        output += `  Do-While: ${resultDoWhile} - ${passedDoWhile ? "✓" : "✗"}\n`;
        output += `  For: ${resultFor} - ${passedFor ? "✓" : "✗"}\n\n`;

        if (passedWhile) passedTests++;
        else failedTests++;

        if (passedDoWhile) passedTests++;
        else failedTests++;

        if (passedFor) passedTests++;
        else failedTests++;
    });

    let successRate = (passedTests / (totalTests * 3)) * 100; // 3 probas por test
    output += `Total de Probas: ${totalTests * 3}\n`;
    output += `Probas Aprobadas: ${passedTests}\n`;
    output += `Probas Fallidas: ${failedTests}\n`;
    output += `Porcentaxe de Acertos: ${successRate.toFixed(2)}%\n`;


     // Mostrar resultados na consola
     console.log(output);

}