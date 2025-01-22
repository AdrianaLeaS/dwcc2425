class Calculadora {

    _num1;
    _num2;

    constructor (num1, num2) {
        this._num1 = num1;
        this._num2 = num2;
    }

    sumar(num1, num2) {
        return num1+num2;
    }

    restar(num1, num2) {
        return num1-num2;
    }

    multiplicar(num1, num2) {
        return num1*num2;
    }

    dividir (num1, num2) {
        if(num1 == 0 | num2 == 0){
            return "Non se pode dividir por cero";
        }else {
            return num1/num2;
        }
    }
    
}