class XestorTarefas {
    //El gestor es un array de tarefas.
    constructor(){
        this.tarefas=[];
    }
    engadirTarefa(nome){

        let novaTarefa = {
            id: this.tarefas.length+1,
            nome: nome,
            completada: false
        };

        this.tarefas.push(novaTarefa);
        return novaTarefa;
    }
    marcarComoCompleta(id){
    //Manipulacion de arrays
        let tarefaEncontrada 
        = this.tarefas.find(tarefa => tarefa.id === id);
        if(!tarefaEncontrada){
            throw new Error ("A tarefa non existe");
        }
            tarefaEncontrada.completada = true;

    }
    obterTarefasPendentes(){
       return this.tarefas.filter(tarefa => tarefa.completada=== false); 

    }
    obterTarefasCompletadas(){
      return  this.tarefas.filter(tarefa => tarefa.completada ===true); 
    }
}
module.exports = XestorTarefas;