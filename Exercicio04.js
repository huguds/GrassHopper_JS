// Programador: Victor Hugo | Manipulações de String | data: 19/06/2021
// 1 - Mostra os alimentos e calcula quantos caracteres cada um possui através do comando .length()
alimento = ['arroz','feijao','batata'];
for (var i = 0; i < alimento.length; i++){
    console.log ("Alimento "+i+"°: "+alimento[i]+" Possui "+alimento[i].length+"° quantidade de string");
}
// 2 - Faz uma consulta e verifica se o parâmetro se encontra na variavél através do comando .includes()
nome = 'Asdrubal';
if (nome.includes('x')){
    console.log('Verdadeiro');
}else{
    console.log('Falso');
}
// 3 - Faz uma consulta e se encontrar o valor passado no parâmetro ele o substituirá através do comando .replace()
if (nome == 'Asdrubal'){
    nome = nome.replace('Asdrubal', 'Emengarda')
    console.log(nome);
}else{
    console.log('Falso');
}
// 4 - Retorna uma cópia de elementos do array original de acordo com os parâmetros através do comando .slice()
var fruits = ['Apple','Orange','BlueBarry']
var copy = fruits.slice(0,3);
for (let num of copy){
    console.log(num)
};