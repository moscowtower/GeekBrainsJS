// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  console.log(i);
}

/* 
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

3. Товары в корзине хранятся в массиве. Задачи:

a) Организовать такой массив для хранения товаров в корзине;

b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. 
*/

var basket = [];

// заполнение
basket.push(
    {product:'Ведро', price:500, amount:3}, 
    {product:'Лейка', price:1000, amount:5}, 
    {product:'Телогрейка', price:1500, amount:1},
    );

function countBasketPrice(basket){
    var basketPrice = 0;
    for (var item in basket){
        basketPrice += basket[item].price * basket[item].amount
    }
    return basketPrice
}

console.log(countBasketPrice(basket));

/* 
4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:

for(…){// здесь пусто} 
*/

for(var i = 0; i<10; console.log(i++)){};

/*
5.  * Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
        x
        xx
        xxx
        xxxx
        xxxxx
*/
for(var i = 1; i<21; console.log('*'.repeat(i++))){};