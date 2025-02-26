import { Publicacion } from "./Publicacion.js";

class Libro extends Publicacion{

    _genero

    constructor(titulo, autor, anho,genero) {
        super(titulo, autor, anho);
        this._genero = genero;
    }


    obtenerInfo(){
        
        return `${super.obtenerInfo()}. Género ${this._genero}`;
    }
}
export default Libro;