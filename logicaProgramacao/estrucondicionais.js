/* 
Entre 0 - 11 - bom dia
entre 12 - 17  - boa tarde
entre 18 - 23 - boa noite

if pode ser usado sozinho
sempre que utilizo else, preciso de um if antes.
Eu posso eu ter varios else ifs na checagem
Só posso ter um else na checagem
podemos usar condições sem else if, utilizando apenas if e else

*/
/*
const hora = 10

if (hora >= 0 && hora <= 11){
    console.log('Bom Dia');
} else if (hora >= 12 && hora <= 17){
    console.log('Boa Tarde');
} else if (hora >= 18 && hora <= 23){
    console.log('Boa Noite')
} else {
    console.log('Olá')
}
*/
/*
const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
}else{
    console.log('Não vou sair de casa');
}
*/

const numero = 9;

if(1 === 1){
    console.log('Literal');
}

if (numero >= 0 && numero <= 5) {
    console.log('O numero está entre 0 e 5');
} else if (numero >= 6 && numero <= 8){
    console.log('O numero está entre 6 e 8');
} else if (numero >= 9 && numero <= 11){
    console.log('O número está entre 8 e 11');
} else {
    console.log('O numero não está entre 0 e 11');
}
console.log('...aqui vai o restante do código')