console.log('trabalhando com condicionais');

const listaDeDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de janeiro'
)

const idadeComprador = 14;
const estaAcompanhada = true;
const temPassagem = true;

console.log("Destinos Possiveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log('Boa Viagem!!!!');
    listaDeDestinos.splice(2, 1); // removendo um item da lista

} else {
    console.log("Nao é maior de idade nao pode comprar");
}

console.log("Embarque: \n\n ")
if (idadeComprador >= 18 || estaAcompanhada == true && temPassagem == true){
    console.log("Boa Viagem!!!")
}else{
    console.log("Nao pode embarcar")
}


