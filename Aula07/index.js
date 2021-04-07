// não podemos criar Constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Nâo podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos redeclarar Constantes com let
// Não utilize var, utilize let

const primeiroNumero = 5
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5
console.log(typeof resultadoTriplicado)

