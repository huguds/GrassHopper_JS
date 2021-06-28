// Programador: Victor Hugo | Algoritmo: Laços de repetição | JavaScript Data: 17/06/2021
// 1 - Laço de string
console.log("\n");
console.log("------------Exemplo 1------------");
for (var letter of 'grasshopper'){
    console.log(letter);
}
// 2 - Contando com laços
console.log("\n");
console.log("------------Exemplo 2------------");
for (var i = 0; i < 10; i = i + 1){
    console.log(i);
}
// 3 - Contagem regressiva utilizando o For
console.log("\n");
console.log("------------Exemplo 3------------");
for (var i = 10; i > 0; i = i - 1){
    console.log(i);
}
console.log("Happy new year !");
// 4 - Manipulando arrays utilizando o For
console.log("\n");
console.log("------------Exemplo 4------------");
for (var adj of ['Feliz','Triste','Alegre']){
    for (var subs of ['Victor','Hugo','Silva']){
        console.log('The ' + subs + ' ' + adj);
    }
}