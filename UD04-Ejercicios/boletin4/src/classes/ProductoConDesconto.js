import { Producto } from "./Producto.js";

export default class ProductoConDesconto extends Producto {
    
    static calcularPrezoConDesconto (prezo, desconto) {
        return prezo - (prezo*desconto/100);
    }
}