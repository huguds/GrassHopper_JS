// Programador: Victor Hugo | Dicas e boas práticas ao programar em  JS II | data: 04/07/2021
/* 1 - O algoritmo irá imprimir as pessoas que possuem idades maiores do que 12
*/
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
/* 2 - O algoritmo irá imprimir os carros que possuem motor 1.6
*/
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
/* 3 - O algoritmo irá verificar as letras de um caça palavras
*/
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
//console.log(check('-----','arroz')); // primeiro argumento = espaços | segundo argumento = palavras
console.log(check('arroz'));