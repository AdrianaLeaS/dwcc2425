const XestorTarefas = require ('./XestorTarefas');

describe ('Probas da clase xestorTarefas', () => {
    let xestor;

    beforeEach(() =>{
        xestor = new XestorTarefas();
    });

    test ('Engadir unha tarefa', () => {
        const tarefa = xestor.engadirTarefa('Aprender Jest');
        expect (tarefa).toEqual({id:1, descripcion: 'Aprender Jest', completada:false})
        expect(xestor.obterTarefasPendentes()).toHaveLength(1);


    });

    test ('Marcar como completada unha tarefa' , () => {
        xestor.engadirTarefa('Tarefa1');
        xestor.engadirTarefa('Tarefa2');
        expect(xestor.obterTarefasPendentes()).toEqual(
            [{id:1, descripcion:'Tarefa1', completada: false} ,{id:2, descripcion:'Tarefa2', completada: false}]
        );
        
        xestor.marcarComoCompletada(1);

        expect(xestor.obterTarefasCompletadas()).toEqual(
            [{id:1, descripcion:'Tarefa1', completada: true}]
        );
    });

    test ('Obter tarefas pendentes' , () => {
        xestor.engadirTarefa('Tarefa1');
        xestor.engadirTarefa('Tarefa2');
        expect(xestor.obterTarefasPendentes()).toEqual(
            [{id:1, descripcion:'Tarefa1', completada: false} ,{id:2, descripcion:'Tarefa2', completada: false}]
        );
        
        xestor.marcarComoCompletada(1);

        expect(xestor.obterTarefasCompletadas()).toEqual(
            [{id:2, descripcion:'Tarefa2', completada: false}]
        );
    });

    test ('Verificar que lanza unha excepcion cunha tarefa inexistente' , () => {
        expect (()=>xestor.marcarComoCompletada(99)).toThrow('A tarefa non existe');

        
    });

});