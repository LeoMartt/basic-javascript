console.log('trabalhando com listas');
// const salvador = 'Salvador';
// const saoPaulo = 'Sao paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

const listaDeDestinos = new Array(
    'Salvador', 
    'Sao Paulo',
    'Rio de janeiro'
)

listaDeDestinos.push('Curitiba'); // adicionando um item na lista
console.log("Destinos Possiveis");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);

