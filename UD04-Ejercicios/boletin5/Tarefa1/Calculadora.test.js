const Calculadora = require ("./Calculadora");

describe ('Probas da clase calculadora', ()=> {

    let calculadora;

    beforeEach (()=> {
        calculadora = new Calculadora();
    });

    test ('Sumar 2 e 3 debe ser 5', () => {
        expect (calculadora.sumar(2,3)).toBe(5);
    });

    test ('Sumar dous valores cero', () => {
        expect (calculadora.sumar(0,0)).toBe(0);
    });

    test ('Restar dous valores cero', () => {
        expect (calculadora.restar(0,0)).toBe(0);
    });

    test ('Restar 2 e 3 debe ser -1', () => {
        expect (calculadora.restar(2,3)).toBe(-1);
    });
    test ('Multiplicar 2 e 3 debe ser 6', () => {
        expect (calculadora.multiplicar(2,3)).toBe(6);
    });

    test ('Dividir 4 e 2 debe ser 2', () => {
        expect (calculadora.dividir(4,2)).toBe(2);
    });

    test ('Dividir entre 0 debe lanzar un erro', () => {
        expect (()=> calculadora.dividir(4,0)).toThrow ('Non se pode dividir por cero');
    });


});