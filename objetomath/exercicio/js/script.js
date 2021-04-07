const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>A Raiz Quadrada de é: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} É inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É um NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arrendondando para baixo é:  ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arrendondando para cima é:  ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas Decimais:  ${numero.toFixed(2)}</p>`;
