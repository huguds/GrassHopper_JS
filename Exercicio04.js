// Programador: Victor Hugo | Manipulações de String e Arrays | data: 19/06/2021
// 1 - Mostra os alimentos e calcula quantos caracteres cada um possui através do comando .length()
console.log("\n");
console.log("------------Exemplo 1------------");
alimento = ['arroz','feijao','batata'];
for (var i = 0; i < alimento.length; i++){
    console.log ("Alimento "+i+"°: "+alimento[i]+" Possui "+alimento[i].length+"° quantidade de string");
}
// 2 - Faz uma consulta e verifica se o parâmetro se encontra na variável através do comando .includes()
console.log("\n");
console.log("------------Exemplo 2------------");
nome = 'Asdrubal';
if (nome.includes('x')){
    console.log('Verdadeiro');
}else{
    console.log('Falso');
}
// 3 - Faz uma consulta e se encontrar o valor passado no parâmetro ele o substituirá através do comando .replace()
console.log("\n");
console.log("------------Exemplo 3------------");
if (nome == 'Asdrubal'){
    nome = nome.replace('Asdrubal', 'Emengarda')
    console.log(nome);
}else{
    console.log('Falso');
}
// 4 - Retorna uma cópia de elementos do array original de acordo com os parâmetros através do comando .slice()
console.log("\n");
console.log("------------Exemplo 4------------");
var fruits = ['Apple','Orange','BlueBarry']
var copy = fruits.slice(0,3);
for (let num of copy){
    console.log(num)
};
// 5 - Método adiciona um ou mais elementos ao final de um array e retorna o novo comprimento através do comando .push()
console.log("\n");
console.log("------------Exemplo 5------------");
var transport = ['Bus','Taxi','Car'];
transport.push('Limousine');
console.log(transport.join(", ")); // O comando join é responsável por juntar o array da forma que estiver no parâmetro: ", "|' '|'-'|
// 6 - Método remove o ultimo item de um array através do comando .pop()
console.log("\n");
console.log("------------Exemplo 6------------");
transport.pop();
console.log(transport.join(", "));
// 7 - Operador de propagação que copia todos os elementos de um array para outro array através do método ...()
console.log("\n");
console.log("------------Exemplo 7------------");
let new_array = ['rice','beans',...alimento]; // Adiciona todos os itens de um array(alimento) a partir do ponto que desejar em outro array (new_array)
//new_array.push(...fruits); // Adiciona todos os itens de um array(fruits) no final de outro array(new_array)
//new_array.unshift(...alimento); // Adiciona todos os itens de um array(alimento) no inicio de outro array(new_array)
console.log(new_array.join(", "));
// 8 - O filter é responsável por filtrar e retornar os valores que passaram pelo teste de acordo com a função fornecida através do método .filter()
console.log("\n");
console.log("------------Exemplo 8------------");
function maior(values){ // É uma função que retorna os valores maiores que 10 de um array
    return values > 10;
}
function menor(values){
    return values < 10;
}
var new_number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log("Valores maiores que 10: "+new_number.filter(maior).join(", "));
console.log("Valores menores que 10: "+new_number.filter(menor).join(", "));
// 9 - O método percorre cada item de um array e retorna um valor de acordo com a função através do método .forEach();
console.log("\n");
console.log("------------Exemplo 9------------");
let gasoline_prices = [4.35, 5.50, 10.00];
function findDeals(values){
    if (values < 10){
        console.log('$'+values+' is good deal!')
    }
}
gasoline_prices.forEach(findDeals);