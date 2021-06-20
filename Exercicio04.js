// Programador: Victor Hugo | Manipulações de String | data: 19/06/2021
//1 - Mostra os alimentos e calcula quantos caracteres cada um possui através do comando .length()
alimento = ['arroz','feijao','batata'];
for (var i = 0; i < alimento.length; i++){
    console.log ("Alimento "+i+"°: "+alimento[i]+" Possui "+alimento[i].length+"° quantidade de string");
}
//2 - Faz uma consulta e verifica se o parâmetro se encontra na variavél através do comando .includes()
nome = 'Asdrubal';
if (nome.includes('x')){
    console.log('Verdadeiro');
}else{
    console.log('Falso');
}