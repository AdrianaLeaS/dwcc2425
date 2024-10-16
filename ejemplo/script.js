//const coche
/*let {marca, modelo, ano} = coche;

console.log (`${marca} - ${modelo} - ${ano}`);*/
// La dessestructuracion es una asignación rápida de variables
/*const persoa = {
    nome: "Pedro",
    idade: 25,
};

let {nome:nomeCompleto, idade:anos} = persoa; // El atributo nome lo vas a volvar en una variable que se llame nombre completo.
console.log (`${nomeCompleto} - ${anos}`);

const usuario = {
    nome: "Laura",
    idade: 28,
};
let {nome, idade01, pais="Desconocido"}=usuario;*/

const estudante = {
    nome: "Alba",
    curso: "programacion",
    notas: {
        matematica: 9,
        lingua: 7,
    },
};


let {nome, curso} = estudante;
let {
    notas: {matematica, lingua}
} = estudante;

console.log(matematica + " " + lingua);

let {
    nome: n,
    curso: c,
    notas: {
        matematica: m,
        lingua: l,
    }
} = estudante;

console.log (n+" "+c+" "+m+" "+l);
