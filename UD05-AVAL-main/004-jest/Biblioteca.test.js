const { biblioteca, obterTitulosLibros, filtrarPorXenero, calcularTotalCopias, comprobarAutor } = require('./Biblioteca');

describe('Probas da función obterTitulosLibros', () => {
    test('Debería devolver os títulos de todos os libros', () => {
      const resultado = obterTitulosLibros(biblioteca);
      expect(resultado).toEqual(['1984', 'O gran Gatsby', 'Matar a un ruiseñor', 'Cien anos de soidade', 'O alquimista']);
    });
  });


  describe('Probas da función filtraPorXenero', () => {
    test('Debería devolver os títulos de todos os libros que coincidan co xenero Ficción', () => {
      const resultado = filtrarPorXenero(biblioteca, 'Ficción'); //Ojo, devuelve un array de objetos, no solo los titulos, para eso habria que modificar la funcion en biblioteca.js
      expect(resultado).toEqual([
        { id: 2, titulo: 'O gran Gatsby', autor: 'F. Scott Fitzgerald', genero: 'Ficción', ano: 1925, copias: 3 },
        { id: 3, titulo: 'Matar a un ruiseñor', autor: 'Harper Lee', genero: 'Ficción', ano: 1960, copias: 2 },
      ]);
    });
  });


  describe('Probas da función calcularTotalCopias', () => {
    test('Debería devolver o total de copias de todos os libros na biblioteca', () => {
      const resultado = calcularTotalCopias(biblioteca);
      expect(resultado) === 20;
    });
  });

  describe('Probas da función comprobarAutor', () => {
    test('Debería devolver true se existe polo menos un libro do autor', () => {
      const resultado = comprobarAutor(biblioteca, 'Harper Lee');
      expect(resultado) === true;
    });

    test('Debería devolver false se non existe ningún libro do autor ', () => {
        const resultado = comprobarAutor(biblioteca, 'Adriana Lea');
        expect(resultado) === false;
    });
  });

