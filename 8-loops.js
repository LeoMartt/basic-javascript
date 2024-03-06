console.log('\ntrabalhando com condicionais');

const listaDeDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de janeiro'
)

const idadeComprador = 14;
const estaAcompanhada = true;
let temPassagem = false;
const destino = "Salvador"

console.log("Destinos Possiveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {

    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe:", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe ocorreu algum erro!");
}
for (let cont = 0; cont < 3; cont++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
    }
}
