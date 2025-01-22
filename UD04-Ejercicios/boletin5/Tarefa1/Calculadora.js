class Calculadora {

    _num1;
    _num2;

    constructor (num1, num2) {
        this._num1 = num1;
        this._num2 = num2;
    }

    sumar(a, b) {
        return a+b;
    }

    restar(a, b) {
        return a-b;
    }

    multiplicar(a, b) {
        return a*b;
    }

    dividir (a, b) {
        if( b== 0){
            throw new Error ('Non se pode dividir por cero');
        }
            return a/b;
        
    }
    
}