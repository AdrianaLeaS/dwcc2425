class XestorTarefas{
    constructor(){
        this.tarefas = [];

    }

    engadirTarefa (nome){
        const novaTarefa = {
            id: this.tarefas.length+1 ,
            descripcion: nome ,
            completada: false
        };
        this.tarefas.push(novaTarefa);
        return novaTarefa;
    }

    marcarComoCompletada(id){
        const tarefa = this.tarefas.find(t=> t.id == id);
        if(!tarefa){
            throw new Error('A tarefa non existe');
        }
        tarefa.completada = true;
    }

    obterTarefasPendentes() {
        return this.tarefas.filter(t=> !t.completada);
    }

    obterTarefasCompletadas() {
        return this.tarefas.filter(t=> t.completada);
    }
}

module.exports = XestorTarefas;