const biblioteca = [
    { id: 1, titulo: '1984', autor: 'George Orwell', genero: 'Distopía', ano: 1949, copias: 5 },
    { id: 2, titulo: 'O gran Gatsby', autor: 'F. Scott Fitzgerald', genero: 'Ficción', ano: 1925, copias: 3 },
    { id: 3, titulo: 'Matar a un ruiseñor', autor: 'Harper Lee', genero: 'Ficción', ano: 1960, copias: 2 },
    { id: 4, titulo: 'Cien anos de soidade', autor: 'Gabriel García Márquez', genero: 'Realismo máxico', ano: 1967, copias: 4 },
    { id: 5, titulo: 'O alquimista', autor: 'Paulo Coelho', genero: 'Aventura', ano: 1988, copias: 6 }
];

// Función para obter todos os títulos dos libros
const obterTitulosLibros = (biblioteca) => {
    return biblioteca.map(libro => libro.titulo);
};

// Función para filtrar os libros por xénero
const filtrarPorXenero = (biblioteca, xenero) => {
    return biblioteca.filter(libro => libro.genero === xenero);
};

// Función para calcular o total de copias de libros na biblioteca
const calcularTotalCopias = (biblioteca) => {
    return biblioteca.reduce((total, libro) => total + libro.copias, 0);
};

// Función para verificar se hai algún libro dun autor específico
const comprobarAutor = (biblioteca, autor) => {
    return biblioteca.some(libro => libro.autor === autor);
};

module.exports = { biblioteca, obterTitulosLibros, filtrarPorXenero, calcularTotalCopias, comprobarAutor };