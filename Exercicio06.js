// Programador: Victor Hugo | Funções | data: 21/06/2021
// Uma função é um conjunto de instruções que retornam um valor quando chamado.
function Dollars(Real){ // Função para converter Real em dólares
    let Result = Real*5.04;
    return Result;
};
//console.log('100 Reais = '+Dollars(100)+' Dollars');

// Função para retornar o maior numero de um array

var list = [58,25,99,57,64];

function larger(a,b){ // Função retorna o maior número
    return a > b ? a : b;
};
function smaller(a,b){ // Função retorna sempre o menor número
    return a < b ? a : b;
};
function maximum(array){ // Função percorre o array e retorna o maior número
    let max = 0;
    for (let num of array){
        max = larger(max, num);
    }
    return max;
};
function minimum(array){ // Função percorre o array e retorna o menor número
    let min = maximum(list); // Recebe o valor do maior para que ele consiga percorrer e não parar no 0
    for (let num of array){
        min = smaller(min, num);
    }
    return min;
};
console.log(list);
console.log(maximum(list)+" = Maior valor do array");
console.log(minimum(list)+" = Menor valor do array");