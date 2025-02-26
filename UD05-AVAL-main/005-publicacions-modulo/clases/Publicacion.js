export class Publicacion {
    
    _titulo;
    _autor;
    _anho;
    
    constructor(titulo, autor, anho){
        this._titulo=titulo;
        this._autor = autor;
        this._anho = anho;
    }

    obtenerInfo(){
        
        return `${this._titulo}, por ${this._autor} (${this._anho})`;
    }
}


