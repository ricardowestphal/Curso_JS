function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Ricardo', 'Westphal', 44);
const pessoa2 = criaPessoa('Patricia', 'Eyng', 43);
const pessoa3 = criaPessoa('Rodrigo', 'Silva', 42);
const pessoa4 = criaPessoa('Aline', 'Rosauro', 41);
const pessoa5 = criaPessoa('Carlos', 'Nobrega', 44);

console.log(pessoa1.nome, pessoa2.nome);