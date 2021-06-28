// Programador: Victor Hugo | Dicas e boas práticas ao programar em  JS | data: 28/06/2021

/* 1 - Ao resolver problemas é importante saber qual é a entrada e qual será a saida (resposta)
Neste Exercicio será impresso um exemplo calculando a média de um aluno.
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