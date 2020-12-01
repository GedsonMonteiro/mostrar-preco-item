var num1;
var num2;
var soma;

num1 = Number(prompt('Digite o preço do produto'));
    console.log('Preço do produto (R$)');
    console.log(num1)

num2 = Number(prompt('Digite a quantidade que deseja comprar'));
    console.log('Quantidade');
    console.log(num2);

/* Adicionando o "Number" você está informando ao computador que os elementos do prompt são números :) */

    soma = num1 * num2;
    alert('O preço final é (R$): '+soma);

    console.log('O preço final é (R$):',soma);
    

/* soma = prompt('O resultado é:') */

/* Adicionando >>> Alert(O resultado é); <<< o resultado aparecerá em uma barra. A mesma no qual digitou os números. */