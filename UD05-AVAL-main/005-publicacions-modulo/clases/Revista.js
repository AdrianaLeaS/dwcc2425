import { Publicacion } from "./Publicacion.js";

class Revista extends Publicacion{

    _edicion

    constructor(titulo, autor, anho, edicion) {
        super(titulo, autor, anho);
        this._edicion=edicion;
    }


    obtenerInfo(){
        
        return `${super.obtenerInfo()}. Edición ${this._edicion}`;
    }
}
export default Revista;