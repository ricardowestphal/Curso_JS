/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valor

Referencia (mutável) - array, Object, Function
*/

const a = {
    nome: 'Ricardo',
    sobrenome: 'Westphal'
};

const b = a;
a.nome = 'Joao';
console.log(a);
console.log(b);