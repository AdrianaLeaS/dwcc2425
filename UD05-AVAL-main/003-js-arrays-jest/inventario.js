const inventario = [
    { id: 1, nome: 'Mazás', prezo: 1.5, stock: 50, categoria: 'froitas' },
    { id: 2, nome: 'Pera', prezo: 2, stock: 30, categoria: 'froitas' },
    { id: 3, nome: 'Leite', prezo: 1.2, stock: 20, categoria: 'lácteos' },
    { id: 4, nome: 'Pan', prezo: 0.8, stock: 100, categoria: 'panadaría' },
    { id: 5, nome: 'Queixo', prezo: 3.5, stock: 10, categoria: 'lácteos' },
];

// 1. Funcións
const eliminarProdutoPorId = (inventario, id) => {
   let buscar = inventario.findIndex(producto => producto.id === id); // Busco la posicion del producto cuyo id coincide con el qeu quiero eliminar
   if (buscar === -1){
    return inventario;
   }else if(buscar != -1){
   inventario.splice(buscar,1);
   return inventario; //Le paso la posicion al splice y le digo a partir de esa posicion cuantos elementos quiero borrar (en este caso solo uno)
}
};


//2. 
const obterNomeEStock = (inventario) => {

    return inventario.map(producto => {
        
        return {nome: producto.nome, stock: producto.stock};
    });
    
    
    //Crea un nuevo array de productos que devuelve los atributos indicados
};

//3. 
const ordenarPorPrezo = (inventario) => {

    const copia = inventario.slice(); //Al pasar slice sin parametros crea una copia del array completo
    
    return copia.sort((a,b) =>a.prezo-b.prezo);
    //Tenemos que pasarle a sort una funcion. En este caso compara los precios de dos productos.
    
};

//4. 
const obterNomesProdutos = (inventario) => {

    return inventario.map(producto => producto.nome);
    
};

//5. 
const filtrarPorStockMaiorDe = (inventario, stock) => {
 
    return inventario.filter(producto => producto.stock > stock);
    
};

//6.
const calcularValorTotal = (inventario) => {
    
    return inventario.reduce((acumulador, producto)=>{
        return acumulador + (producto.prezo*producto.stock);}, 0);
    
        
    //Al reduce le doy un acumulador, un valor que suma y un valor de inicio.
    //En este caso el valor se lo doy como función porque es una combinacion de dos valores del producto

};
//7. 
const obterPrimeirosNProdutos = (inventario, n) => {
    return inventario.slice(0, n);
    //las posiciones empiezan a contar en 0. La última posición no la incluye en el array,
    //pero no hay que modificar nada porque al empezar en cero ya seria la posicion n-1
   
};
//8. 
const comprobarCategoria = (inventario, categoria) => {

    return inventario.some(producto => producto.categoria === categoria);
    
};

module.exports = {
    inventario, // ojo! hay que exportar tb el array!!
    eliminarProdutoPorId,
    obterNomeEStock,
    ordenarPorPrezo,
    obterNomesProdutos,
    filtrarPorStockMaiorDe,
    calcularValorTotal,
    obterPrimeirosNProdutos,
    comprobarCategoria
};