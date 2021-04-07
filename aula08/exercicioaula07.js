/*
Ricardo Westphal tem 44 anos, pesa 98 kg
tem 1.73 de altura e seu imc é de 32.74
Ricardo Westphal nasceu em 1976
*/

const nome = 'Ricardo'
const sobrenome = 'Westphal'
const idade = 44
const peso = 98
const altura = 1.73
let imc  // peso / (altura * altura)
let anoNascimento = 2021 - 45
imc = (peso / (altura * altura)).toFixed(2);

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log(`tem ${altura}, de altura, e seu imc é de ${imc}.`)
console.log(nome, sobrenome, 'nasceu em', anoNascimento )
