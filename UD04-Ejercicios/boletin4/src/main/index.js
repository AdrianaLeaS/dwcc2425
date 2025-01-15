import { Vehiculo } from "../classes/Vehiculo.js";
import  Coche  from "../classes/Coche.js";
import  Moto  from "../classes/Moto.js";
import { Producto } from "../classes/Producto.js";
import ProductoConDesconto from "../classes/ProductoConDesconto.js";

let v1 = new Vehiculo ("Coche", "0123ABC", 50);

//En JS si accedo al atributo lo uedo modifiar directamente sin establecer un set
//v1._matricula = "ABCDE";

console.log(v1._matricula);

let c1 = new Coche ("Coche", "9999ABC", 150);
console.log(c1._matricula);
c1.ofrecerAsistencia();

let m1 = new Moto ("Moto", "2222ABC", 20);
console.log(m1._matricula);
m1.chequearEstado();

let p1 = new Producto ("arroz", 30, 3.1);
console.log(p1);
p1.modificarStock(-2);
p1.modificarStock(3);

console.log(p1);

let pc1 = new ProductoConDesconto ("x", 0.1);
let prezoFinal = ProductoConDesconto.calcularPrezoConDesconto(p1._prezo, 50);
console.log("prezo final"+prezoFinal );