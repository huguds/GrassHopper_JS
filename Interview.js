// Programador: Victor Hugo | Dicas e boas práticas ao programar em  JS | data: 28/06/2021
/* 1 - Ao resolver problemas é importante saber qual é a entrada e qual será a saida (resposta)
Neste Exercício será impresso um exemplo calculando a média de um aluno.
*/
console.log("\n");
console.log("---------Exemplo 1---------");
function media(nota1,nota2){ // Parâmetros de uma função é utilizado ao criar a função
    var media = (nota1+nota2)/2  // A entrada será as notas e a saida será a média
    return console.log("A média é de: "+media);
}
media(10,7.5); // Argumento de uma função é utilizado ao chamar a função
/* 2 - Todos os valores em JS podem ser considerados boolean onde são chamados de Truthy = verdadeiro e Falsy = falso
Neste Exercicio será impresso os números -3 até 3 porém ele irá pular o 0. utilizando o Falsy = False, 0, '', NaN, undefined, null.
*/
console.log("\n");
console.log("---------Exemplo 2---------");
for (let i = 0 - 3; i < 4; i++){
    if (i){ // 
        console.log(i)
    }  
};
/* 3 - Para acessar um elemento especifico em um array pode ser utilizado a indexação []
Vale lembrar que os arrays começam a partir do indice [0]
*/
console.log("\n");
console.log("---------Exemplo 3---------");
let alimentos = ['arroz','feijao','batata'];
let essencial = alimentos[2];
console.log(`Alimentos: ${alimentos}`)
console.log(`Essencial: ${essencial}`);
/* 4 - É possivel também utilizar a indexação para adicionar ou alterar um valor em uma array
*/
console.log("\n");
console.log("---------Exemplo 4---------");
alimentos[3] = 'Macarrão';
console.log(`Novos alimentos: ${alimentos}`);
/* 5 - Utilizando o .lenght() irá retornar o número de elementos que possui um determinado array
*/
console.log("\n");
console.log("---------Exemplo 5---------");
let numeros = [9,8,7,6,5,4,3,2,1];
let index = numeros.length - 1; // Para achar o número de indices de um array basta fazer .length - 1
console.log(`O tamanho do array é igual a: ${+numeros.length}`);
console.log(`O número de indices é igual a: ${index}`);
/* 6 - Acessando o primeiro e o ultimo elemento do array
*/
console.log("\n");
console.log("---------Exemplo 6---------");
console.log(`O primeiro elemento do array numeros é: ${numeros[0]}`);
console.log(`O segundo ultimo elemento do array numero é: ${numeros.length-1}`);
let i = 0; let x = 4;
console.log(`Acessando o array a direita do 9: ${numeros[i+1]}`);
console.log(`Acessando o array a esquerda do 5: ${numeros[x-1]}`);
/* 7 - Acessando uma string
Tudo que foi aprendido nas ultimas lições em array pode ser feito em uma String também
*/
console.log("\n");
console.log("---------Exemplo 7---------");
let nome = 'victor'.length;
let upper = 'victor';
let lastUpper = upper[5].toUpperCase();
console.log(`Tamanho da String nome é igual a: ${+nome}`);
console.log(`Tamanho do indice da String nome é igual a: ${nome-1}`);
console.log(`O último indice da String 'Victor' é: ${'victor'[5]}`);
console.log(`A última letra da String 'Victor' ficara maiúscula: ${lastUpper}`);
/* 8 - Para percorrer uma string é através da mesma forma de percorrer um array
*/
console.log("\n");
console.log("---------Exemplo 8---------");
for (let index = 0; index < 'victor'.length; index++){ // Imprimi todos os caracteres da string
    console.log(`${'victor'[index]}`);
}