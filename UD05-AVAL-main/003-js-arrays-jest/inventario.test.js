const {
    inventario,
    eliminarProdutoPorId,
    obterNomeEStock,
    ordenarPorPrezo,
    obterNomesProdutos,
    filtrarPorStockMaiorDe,
    calcularValorTotal,
    obterPrimeirosNProdutos,
    comprobarCategoria,
    
} = require('./inventario');

describe('Funcións do inventario', () => {

    //1 - Eliminar un produto por ID

    test('1. Elimina un producto por ID válido', () => {
        const nuevoInventario = [...inventario];
        eliminarProdutoPorId(nuevoInventario, 3);
        expect(nuevoInventario).not.toContainEqual({ id: 3, nome: 'Leite', prezo: 1.2, stock: 20, categoria: 'lácteos' });
      }); // Test 1: Elimina un producto por un ID válido (en este caso, el ID 3 para el producto "Leite") y asegura que el inventario ya no contiene ese producto

    test('1. No elimina nada si el ID no existe', () => {
        const nuevoInventario = [...inventario];
        const resultado = eliminarProdutoPorId(nuevoInventario, 999); // ID inexistente
        expect(resultado).toEqual(inventario);
    }); //Test 2: Verifica que no se elimina nada si el ID proporcionado no existe en el inventario (ID 999).


    test('1. El inventario permanece igual si el ID no es encontrado', () => {
        const nuevoInventario = [...inventario];
        eliminarProdutoPorId(nuevoInventario, 999); // ID inexistente
        expect(nuevoInventario).toEqual(inventario);
      }); // Test 3: Asegura que el inventario no cambia cuando se pasa un ID no existente.



    test('1. El inventario se actualiza correctamente después de eliminar el producto', () => {
        const nuevoInventario = [...inventario];
        const resultado = eliminarProdutoPorId(nuevoInventario, 2);
        expect(resultado.length).toBe(inventario.length - 1);
        expect(resultado).not.toContainEqual({ id: 2, nome: 'Pera', prezo: 2, stock: 30, categoria: 'froitas' });
      }); //Test 4: Verifica que el inventario se reduce en 1 cuando un producto es eliminado correctamente.


    //2 
  
    test('2. Debería devolver un array con nome y stock de cada producto', () => {
          const resultado = obterNomeEStock(inventario);
          
          // Verificar que la longitud del array es igual a la longitud del inventario
          expect(resultado.length).toBe(inventario.length);
          
          // Verificar que cada objeto tiene 'nome' y 'stock'
          resultado.forEach((producto, index) => {
            expect(producto).toHaveProperty('nome');
            expect(producto).toHaveProperty('stock');
            expect(producto.nome).toBe(inventario[index].nome);
            expect(producto.stock).toBe(inventario[index].stock);
          });
        });

    test('2. Debería devolver un array vacío si el inventario está vacío', () => {
            const inventarioVacio = [];
            const resultado = obterNomeEStock(inventarioVacio);
            expect(resultado).toEqual([]);
          });

    //3 
    test('3. Debería ordenar los productos por precio en orden ascendente', () => {
        const resultado = ordenarPorPrezo(inventario);
        
        // Verificar que el array está ordenado por precio
        for (let i = 0; i < resultado.length - 1; i++) {
          expect(resultado[i].prezo).toBeLessThanOrEqual(resultado[i + 1].prezo);
        }
      });

    //4. 
  test('4. Debería devolver un array con los nombres de los productos', () => {
    const resultado = obterNomesProdutos(inventario);
    
    // Verificar que el array devuelto tiene la misma longitud que el inventario
    expect(resultado.length).toBe(inventario.length);
    
    // Verificar que cada elemento del array es un nombre de producto
    expect(resultado).toEqual(['Mazás', 'Pera', 'Leite', 'Pan', 'Queixo']);
  });

  test('4. Debería devolver un array vacío si el inventario está vacío', () => {
    const inventarioVacio = [];
    const resultado = obterNomesProdutos(inventarioVacio);
    expect(resultado).toEqual([]);
  });


//5. 

test('5. Debería devolver los productos con stock mayor que el valor dado', () => {
    const resultado = filtrarPorStockMaiorDe(inventario, 20);
    
    // Verificar que el array devuelto contiene productos con stock mayor que 20
    expect(resultado.length).toBe(3); // Hay 3 productos con stock mayor que 20
    expect(resultado).toEqual([
      { id: 1, nome: 'Mazás', prezo: 1.5, stock: 50, categoria: 'froitas' },
      { id: 2, nome: 'Pera', prezo: 2, stock: 30, categoria: 'froitas' },
      { id: 4, nome: 'Pan', prezo: 0.8, stock: 100, categoria: 'panadaría' },
    ]);
  });

    
  test('5. Debería devolver un array vacío si no hay productos con stock mayor que el valor dado', () => {
    const resultado = filtrarPorStockMaiorDe(inventario, 200); // Ningún producto tiene más de 200 de stock
    expect(resultado).toEqual([]);
  });


  test('5. Debería devolver todos los productos si el valor de stock es 0', () => {
    const resultado = filtrarPorStockMaiorDe(inventario, 0);
    expect(resultado.length).toBe(inventario.length); // Todos los productos tienen un stock mayor que 0
    expect(resultado).toEqual(inventario);
  });

    

    //6. calcularValorTotal

    test('6. Debería calcular el valor total correctamente', () => {
        const resultado = calcularValorTotal(inventario);

        // Calcular el valor total esperado manualmente:
        const valorEsperado = (1.5 * 50) + (2 * 30) + (1.2 * 20) + (0.8 * 100) + (3.5 * 10);
        
        // Verificar que el valor total calculado es el esperado
        expect(resultado).toBe(valorEsperado);
        });
    
      test('6. Debería devolver 0 si el inventario está vacío', () => {
        const inventarioVacio = [];
        const resultado = calcularValorTotal(inventarioVacio);
        expect(resultado).toBe(0);
      });



  

    //7. obterPrimeirosNProdutos
    test('7. Debería devolver los primeros n productos', () => {
        const n = 3;
        const resultado = obterPrimeirosNProdutos(inventario, n);
    
        // Verificar que el resultado tiene los primeros 3 productos
        expect(resultado.length).toBe(n);
        expect(resultado).toEqual([
          { id: 1, nome: 'Mazás', prezo: 1.5, stock: 50, categoria: 'froitas' },
          { id: 2, nome: 'Pera', prezo: 2, stock: 30, categoria: 'froitas' },
          { id: 3, nome: 'Leite', prezo: 1.2, stock: 20, categoria: 'lácteos' },
        ]);
      });
    
      test('7. Debería devolver un array vacío si n es 0', () => {
        const n = 0;
        const resultado = obterPrimeirosNProdutos(inventario, n);
        expect(resultado).toEqual([]);
      });
    
      test('7. Debería devolver el inventario completo si n es mayor que el tamaño del inventario', () => {
        const n = 10;  // n es mayor que la longitud del inventario
        const resultado = obterPrimeirosNProdutos(inventario, n);
        expect(resultado.length).toBe(inventario.length);
        expect(resultado).toEqual(inventario);
      });
    
      test('7. Debería devolver el primer producto si n es 1', () => {
        const n = 1;
        const resultado = obterPrimeirosNProdutos(inventario, n);
        expect(resultado.length).toBe(1);
        expect(resultado).toEqual([
          { id: 1, nome: 'Mazás', prezo: 1.5, stock: 50, categoria: 'froitas' },
        ]);
      });

    //8. comprobarCategoria
    test('8. Debería devolver true si existe un producto con la categoría especificada', () => {
        const categoria = 'froitas';
        const resultado = comprobarCategoria(inventario, categoria);
        
        // Verificar que la categoría 'froitas' existe en el inventario
        expect(resultado).toBe(true);
      });
    
      test('8. Debería devolver false si no existe un producto con la categoría especificada', () => {
        const categoria = 'verduras'; // Categoría que no está en el inventario
        const resultado = comprobarCategoria(inventario, categoria);
        
        // Verificar que la categoría 'verduras' no existe en el inventario
        expect(resultado).toBe(false);
      });
    
      test('8. Debería devolver true si existe un producto con la categoría especificada (lácteos)', () => {
        const categoria = 'lácteos';
        const resultado = comprobarCategoria(inventario, categoria);
        
        // Verificar que la categoría 'lácteos' existe en el inventario
        expect(resultado).toBe(true);
      });
    
      test('8. Debería devolver false si el inventario está vacío', () => {
        const inventarioVacio = [];
        const categoria = 'panadaría';
        const resultado = comprobarCategoria(inventarioVacio, categoria);
        
        // Verificar que el inventario vacío no tiene ninguna categoría
        expect(resultado).toBe(false);
      });
});


