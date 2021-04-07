function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);










// // // função construtora
// // const tresHoras = 60 * 60 * 3 * 1000;
// // const umDia = 60 * 60 * 24 * 1000;
// // const data = new Date(0 + tresHoras - umDia);
// // const data = new Date(2021, 3);
// const data = new Date(1617278143170);
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // mês começa do 0
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getUTCSeconds());
// console.log('ms', data.getUTCMilliseconds());
// console.log('Dia semana', data.getDay()); // 0 = Domingo, 6 = Sabado
// console.log(data.toString());
// //console.log(Date.now());