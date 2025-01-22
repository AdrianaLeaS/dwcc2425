export class Producto {
    _nome;
    _stock;
    _prezo;

    constructor(nome, stock, prezo) {
        this._nome = nome;
        this._stock = stock;
        this._prezo = prezo;
    }

    modificarStock (cantidad) {
        this._stock +=cantidad;
    }
}