
//(condição) ? 'valor para verdadeiro' : 'valor para falso';

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

// const corUsuario = 'azul';
// const corPadrao = corUsuario || 'Preta';
// console.log(nivelUsuario, corPadrao);

