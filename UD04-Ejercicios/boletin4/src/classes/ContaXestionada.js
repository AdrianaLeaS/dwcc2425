import { ContaBancaria } from "./ContaBancaria.js";

export default class ContaXestionada extends ContaBancaria {

    static comision (saldoInicial) {
        let saldoActual = saldoInicial+(saldoInicial*0.2);
        return saldoActual;
    }
}