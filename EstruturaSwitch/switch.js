function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
    }

}

const data = new Date('1976-08-18 13:45:00');
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto);


// if (diaSemana === 0) {
//     diaSemanatexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sabado';
// } else {
//    diaSemanaTexto = ''
// }