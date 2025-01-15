import { Vehiculo } from "./Vehiculo.js";

export default class Coche extends Vehiculo {
    
    _bastidor;
    //El resto de métodos de Vehiculo ya los hereda

    constructor(matricula, prezoAlugueiro){
        super("coche", matricula, prezoAlugueiro)
        this._bastidor = "bastidor1111";
    }

    ofrecerAsistencia(){
        console.log(`O coche con matrícula ${this._matricula} está recibindo asistencia`);
    }

    

}