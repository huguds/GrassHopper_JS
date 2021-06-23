// Programador: Victor Hugo | Manipulações de String e Arrays | data: 19/06/2021
// 1 - Mostra os alimentos e calcula quantos caracteres cada um possui através do comando .length()
console.log("\n");
console.log("------------Exemplo 1------------")
alimento = ['arroz','feijao','batata'];
for (var i = 0; i < alimento.length; i++){
    console.log ("Alimento "+i+"°: "+alimento[i]+" Possui "+alimento[i].length+"° quantidade de string");
}
// 2 - Faz uma consulta e verifica se o parâmetro se encontra na variável através do comando .includes()
console.log("\n");
console.log("------------Exemplo 2------------")
nome = 'Asdrubal';
if (nome.includes('x')){
    console.log('Verdadeiro');
}else{
    console.log('Falso');
}
// 3 - Faz uma consulta e se encontrar o valor passado no parâmetro ele o substituirá através do comando .replace()
console.log("\n");
console.log("------------Exemplo 3------------")
if (nome == 'Asdrubal'){
    nome = nome.replace('Asdrubal', 'Emengarda')
    console.log(nome);
}else{
    console.log('Falso');
}
// 4 - Retorna uma cópia de elementos do array original de acordo com os parâmetros através do comando .slice()
console.log("\n");
console.log("------------Exemplo 4------------")
var fruits = ['Apple','Orange','BlueBarry']
var copy = fruits.slice(0,3);
for (let num of copy){
    console.log(num)
};
// 5 - Método adiciona um ou mais elementos ao final de um array e retorna o novo comprimento através do comando .push()
console.log("\n");
console.log("------------Exemplo 5------------")
var transport = ['Bus','Taxi','Car'];
transport.push('Limousine');
console.log(transport.join(", ")); // O comando join é responsável por juntar o array da forma que estiver no parâmetro: ", "|' '|'-'|
// 6 - Método remove o ultimo item de um array através do comando .pop()
console.log("\n");
console.log("------------Exemplo 6------------")
transport.pop();
console.log(transport.join(", "));