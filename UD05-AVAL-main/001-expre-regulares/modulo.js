import{validarResultado} from './index.js';

class Test{
    constructor(valor,resultado){
        this._valor=valor;
        this._resultado=resultado;
    }
}

function estimar(){
  
    let listFallos=Array.apply(null, Array(20)).map(Number.prototype.valueOf,0);

    //Recuperar banco de probas
    let request = new XMLHttpRequest();
    request.open("GET", "datos.json", false);
    request.send(null)
    let resultadoEsperado = JSON.parse(request.responseText);
    
    for(let i=0; i<resultadoEsperado.length;i++){
        console.log(">>>> TEST: "+resultadoEsperado[i]._valor);

        let resalumno=validarResultado(resultadoEsperado[i]._valor);

        for(let j=0; j<resalumno.length; j++){
           if(resalumno[j]!=resultadoEsperado[i]._resultado[j]){
                    listFallos[j]=listFallos[j]+1;
                    console.log(`Patron ${j+1} falla : ${resultadoEsperado[i]._valor} .
                     Valor esperado: ${resultadoEsperado[i]._resultado[j]} resultado alumno ${resalumno[j]}`);
            }
        }
        
    }
    //Calculo nota
    let totalFallos= listFallos.filter(i=>i>0).length;
    let nota = (20-totalFallos)/20*10;
    alert(nota);

}


export{Test, estimar}