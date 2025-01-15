export class Vehiculo {
    
    _tipo;
    _matricula;
    _prezo;
    
    constructor(tipo, matricula, prezoAlugueiro){
        this._matricula=matricula;
        this._prezo = prezoAlugueiro;
        this._tipo = tipo;
    }

    calcularDesconto(dias){
        let desconto = Math.floor(dias/5)*0.1 ;
        return this._prezo - desconto*this._prezo;
    }
}