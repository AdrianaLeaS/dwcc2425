
### Exercicio de Implementación de Tests con Jest

#### Contexto:

Vas a crear unha serie de funcións para xestionar unha **biblioteca**. Os obxectos desta biblioteca contiñen información sobre os libros, como o seu título, autor, xénero, ano de publicación e o número de copias dispoñibles. O obxectivo é que implementes tests con **Jest** para verificar que as funcións operan correctamente en diferentes escenarios.

#### Código inicial:

No seguinte código, defínense varias funcións para xestionar os libros dunha biblioteca.

```javascript
// Biblioteca.js
const biblioteca = [
    { id: 1, titulo: '1984', autor: 'George Orwell', genero: 'Distopía', ano: 1949, copias: 5 },
    { id: 2, titulo: 'O gran Gatsby', autor: 'F. Scott Fitzgerald', genero: 'Ficción', ano: 1925, copias: 3 },
    { id: 3, titulo: 'Matar a un ruiseñor', autor: 'Harper Lee', genero: 'Ficción', ano: 1960, copias: 2 },
    { id: 4, titulo: 'Cien anos de soidade', autor: 'Gabriel García Márquez', genero: 'Realismo máxico', ano: 1967, copias: 4 },
    { id: 5, titulo: 'O alquimista', autor: 'Paulo Coelho', genero: 'Aventura', ano: 1988, copias: 6 }
];

//1 Función para obter todos os títulos dos libros
const obterTitulosLibros = (biblioteca) => {
    return biblioteca.map(libro => libro.titulo);
};

//2 Función para filtrar os libros por xénero
const filtrarPorXenero = (biblioteca, xenero) => {
    return biblioteca.filter(libro => libro.genero === xenero);
};

//3 Función para calcular o total de copias de libros na biblioteca
const calcularTotalCopias = (biblioteca) => {
    return biblioteca.reduce((total, libro) => total + libro.copias, 0);
};

//4 Función para verificar se hai algún libro dun autor específico
const comprobarAutor = (biblioteca, autor) => {
    return biblioteca.some(libro => libro.autor === autor);
};

module.exports = { biblioteca, obterTitulosLibros, filtrarPorXenero, calcularTotalCopias, comprobarAutor };
```

#### Funcións a probar:

1. **`obterTitulosLibros(biblioteca)`**: Devolve un array cos títulos de todos os libros.
2. **`filtrarPorXenero(biblioteca, xenero)`**: Filtra os libros por o xénero solicitado e devolve só os que coinciden.
3. **`calcularTotalCopias(biblioteca)`**: Calcula o total de copias de todos os libros na biblioteca.
4. **`comprobarAutor(biblioteca, autor)`**: Verifica se existe polo menos un libro dun autor específico.

#### Requisitos:

Debes implementar os tests para as funcións anteriores utilizando **Jest**. Os tests deben verificar:

1. Que a función `obterTitulosLibros` devolve correctamente os títulos de todos os libros. (xa resolto)
2. Que a función `filtrarPorXenero` filtra correctamente os libros por o xénero solicitado.
3. Que a función `calcularTotalCopias` calcula correctamente o número total de copias na biblioteca.
4. Que a función `comprobarAutor` verifica correctamente a existencia dun autor.

#### Exemplo de test a implementar para `obterTitulosLibros`:

```javascript
// Biblioteca.test.js
const { biblioteca, obterTitulosLibros, filtrarPorXenero, calcularTotalCopias, comprobarAutor } = require('./Biblioteca');

describe('Probas da función obterTitulosLibros', () => {
  test('Debería devolver os títulos de todos os libros', () => {
    const resultado = obterTitulosLibros(biblioteca);
    expect(resultado).toEqual(['1984', 'O gran Gatsby', 'Matar a un ruiseñor', 'Cien anos de soidade', 'O alquimista']);
  });
});
```

#### Detalles do que deberás facer:

1. **Test para `obterTitulosLibros`**:
    - Verifica que a función devolve correctamente os títulos dos libros no inventario.

2. **Test para `filtrarPorXenero`**:
    - Verifica que a función filtra correctamente os libros por xénero. Exemplo: Filtra todos os libros de **"Ficción"**.

3. **Test para `calcularTotalCopias`**:
    - Verifica que a función calcula correctamente o total de copias dispoñibles de todos os libros da biblioteca.

4. **Test para `comprobarAutor`**:
    - Verifica se a función devolve `true` cando existe polo menos un libro dun autor, e `false` cando non existe ningún libro dese autor.

