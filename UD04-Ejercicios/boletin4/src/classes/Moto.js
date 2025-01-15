import { Vehiculo } from "./Vehiculo.js";

export default class Moto extends Vehiculo {
    
    _bastidor;
    //El resto de métodos de Vehiculo ya los hereda

    constructor(matricula, prezoAlugueiro){
        super("moto", matricula, prezoAlugueiro)
        
    }

    chequearEstado(){
        console.log(`A moto con matrícula ${this._matricula} está lista para ser entregada`);
    }

    

}