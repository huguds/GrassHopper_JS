// Programador: Victor Hugo | Dicas e boas práticas ao programar em  JS II | data: 04/07/2021
// 1 - O algoritmo irá imprimir as pessoas que possuem idades maiores do que 12
console.log("---------Exemplo 1---------");
let names = [{
        name: 'Amelia',
        age: 12,},
    {
        name: 'Charlotte',
        age: 13,},
    {
        name: 'Asdrubal',
        age: 35,},
];
function needsticket(students){
    for (element of students){
        if (element['age'] > 12){
            console.log(element['name']+ ' = '+element['age']+ ' anos');
        }
    }
};
needsticket(names);
// 2 - O algoritmo irá imprimir os carros que possuem motor 1.6
console.log("\n");
console.log("---------Exemplo 2---------");
let carros = [{
        model: 'Renault',
        carName: 'Logan',
        engine: 1.0,},
    {
        model: 'Chevrolet',
        carName: 'Onix',
        engine: 1.0,},
    {
        model: 'Hyundai',
        carName: 'Creta',
        engine: 1.6,},
    {
        model: 'Hyundai',
        carName: 'HB20X',
        engine: 1.6,},
];
function carEngine(cars){
    for (element of cars){
        if (element['engine'] == 1.6){
            console.log(element['model']+' - '+element['carName']+' - '+element['engine']);
        }
    }
}
carEngine(carros);
// 3 - O algoritmo irá verificar as letras de um caça palavras
console.log("\n");
console.log("---------Exemplo 3---------");
function check(/*space,*/word){
    space = '-----';
    if (word.length !== space.length){ // Verifica se as palavras são diferentes dos espaços
        return false;
    }
    for (let i = 0; i < space.length; i++){
        if (space[i] !== '-' && space[i] !== word[i]){ // Verifica se não há espaço e se as palavras são diferentes
            return false;
        }
    }
    return true;
};
console.log(check('-----','arroz')); // primeiro argumento = espaços | segundo argumento = palavras
console.log(check('arroz'));
// 4 - O algoritmo irá guardar em uma váriavel a maior string
console.log("\n");
console.log("---------Exemplo 4---------");
function longestWord(array){
    let longest = '';
    for (element of array){
        if(element.length > longest.length){
            longest = element;
        }
    }
    return longest;
}
console.log(longestWord(['able', 'ale', 'apple']));
//5 - O algoritmo irá retornar um mapa de uma determinada string
console.log("\n");
console.log("---------Exemplo 5---------");
function mapString(string){
    let map = {};
    for (let i = 0; i < string.length; i++){
        let letter = string[i];
        if (map[letter]){
            map[letter].push(i);
        }else{
            map[letter] = [i];
        }
    }
    return map;
}
var teste = 'arroz';
let stringMap = mapString(teste);
for (let letter in stringMap) {
    console.log(letter + ': ' + stringMap[letter]);
};
/*
// 6 - Verifica se todas as letras de uma string existem como propriedades em um objeto feito de outra String
console.log("\n");
console.log("---------Exemplo 6---------");
function isSubsequence(word){
    let minIndex = 0; // Adiciona na variavel o indice do caractere pesquisado anteriormente
    for(let element of word){ // Itera através da string
        if (object[element]){ // Verifica se a letra atual existe no map (object).Caso não retorna false
            minIndex = findNextIndex(object[element], minIndex); // Atualiza para obter os valores do que foi retornado em findNextIndex
            if (minIndex === false){ // Verifica se minIndex é false
                return false;
            }
        }else{
            return false
        }
    }
    return true; // Caso a função chegue até aqui a string é uma subsequencia
};
// 7 - Verifica se um caractere está na posição correta para ser uma subsequência
console.log("\n");
console.log("---------Exemplo 7---------");
function findNextIndex(array, minIndex){
    for (let element of array){
        if (element >= minIndex){
            return element+1;
        }
    }
    return false;
};
// 8 - Retorna a maior subsequencia encontrada
console.log("\n");
console.log("---------Exemplo 8---------");
function longestMatch(string,dictionary){
    let array = [];
    let map = mapString(string);
    for (let element of dictionary){
        if (isSubsequence(element,map)){
            array.push(element);
        }
    }
    return longestWord(array);
};
isSubsequence = ['javascript'];
dictionary = ['art','vascular','avast','javas','vat'];
console.log(longestMatch(isSubsequence, dictionary));
*/