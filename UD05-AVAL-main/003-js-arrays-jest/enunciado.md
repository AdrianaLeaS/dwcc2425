
# Práctica: Manipulación de Arrays en JavaScript

A continuación, tes un array chamado `inventario` que contén unha lista de produtos con propiedades como `id`, `nome`, `prezo`, `stock` e `categoria`. O obxectivo desta práctica é implementar diversas **funcións que manipulen este array empregando os métodos de arrays de JavaScript.** Deberás completar cada función co comportamento descrito.


## **Array Inicial**

```javascript
const inventario = [
    { id: 1, nome: 'Mazás', prezo: 1.5, stock: 50, categoria: 'froitas' },
    { id: 2, nome: 'Pera', prezo: 2, stock: 30, categoria: 'froitas' },
    { id: 3, nome: 'Leite', prezo: 1.2, stock: 20, categoria: 'lácteos' },
    { id: 4, nome: 'Pan', prezo: 0.8, stock: 100, categoria: 'panadaría' },
    { id: 5, nome: 'Queixo', prezo: 3.5, stock: 10, categoria: 'lácteos' },
];
```

---

## Funcións a Implementar

### **1. eliminarProdutoPorId(inventario, id)**
Elimina do inventario o produto que teña un identificador (`id`) específico.  Para implementar esta función deberas empregar os métodos findIndex e splice. 


### **2. obterNomeEStock(inventario)**

Crea unha lista de obxectos que conteñan só o nome e o stock de cada produto.  

### **3. ordenarPorPrezo(inventario)**

Ordena os produtos do inventario polo prezo, de menor a maior.  


### **4. obterNomesProdutos(inventario)**

Xera unha lista que conteña só os nomes dos produtos.  


### **5. filtrarPorStockMaiorDe(inventario, stock)**

Filtra os produtos que teñan un stock maior que un valor dado.  



### **6. calcularValorTotal(inventario)**

Calcula o valor total do inventario, considerando o prezo e o stock de cada produto.  



### **7. obterPrimeirosNProdutos(inventario, n)**

Obter unha lista cos primeiros `n` produtos do inventario.  
 
### **8. comprobarCategoria(inventario, categoria)**

Comproba se existe algún produto no inventario que pertenza a unha categoría específica.  
**Instrucións:**
- Usa o método `some` para verificar se algún elemento do array ten unha propiedade `categoria` igual ao valor dado.
- Retorna `true` se existe polo menos un produto, ou `false` en caso contrario.


## **Exemplo de Uso**

Aquí tes exemplos de como deberían funcionar as túas funcións:

```javascript
console.log(eliminarProdutoPorId(inventario, 2)); // Elimina o produto coa ID 2 (Pera)
console.log(obterNomeEStock(inventario)); // [{ nome: 'Mazás', stock: 50 }, ...]
console.log(ordenarPorPrezo(inventario)); // Lista ordenada por prezo
console.log(obterNomesProdutos(inventario)); // ['Mazás', 'Pera', 'Leite', 'Pan', 'Queixo']
console.log(filtrarPorStockMaiorDe(inventario, 20)); // Produtos con stock > 20
console.log(calcularValorTotal(inventario)); // Valor total do inventario
console.log(obterPrimeirosNProdutos(inventario, 3)); // Primeiros 3 produtos
console.log(comprobarCategoria(inventario, 'froitas')); // true
```

---

## **Instrucións de Entrega**

- Implementa as funcións no arquivo especificado.
- Asegúrate de que cada función devolve o resultado esperado empregando un arquivo de probas.
- Emprega  Jest para verificar o correcto funcionamento das funcións.

