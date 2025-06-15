const XestorTarefas = require('./XestorTarefas');


describe ('Probas do xestor', ()=> {
let xestor;

//Antes de nada hay que instanciar la clase
    beforeEach(() => {
    xestor = new XestorTarefas();
});

test('Engadir tarefa', ()=>{
    const tarefa= xestor.engadirTarefa('aprenderJest');
    expect (tarefa).toEqual({id: 1, nome: 'aprenderJest', completada: false});
    expect(xestor.obterTarefasPendentes()).toHaveLength(1);
});



});
