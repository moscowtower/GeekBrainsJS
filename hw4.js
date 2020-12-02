/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function numToObject(num){
    if (num > 999 || num < 0){
        console.log('Введенное число превышает лимит 0...999.')
        return null;
    }
    var ones = parseInt(num%10);
    var tens = parseInt((num%100 - ones)/10);
    var hundreds = parseInt(num/100);
    return {'единицы': ones, 'десятки': tens, 'сотни': hundreds};
}
console.log(numToObject(526))
console.log(numToObject(111111))


/*
2.Продолжить работу с интернет-магазином:
- В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
- Реализуйте такие объекты.
- Перенести функционал подсчета корзины на объектно-ориентированную базу.

*/

var basket = {
    size: function(){
        return this.products.length
    },
    products: [],
    add: function(product){
        this.products.push(product)
    },
    countTotal: function(){
        var total = 0
        for (var i = 0; i < this.products.length; i++){
    			total += this.products[i].price * this.products[i].amount
        }
        return total
    },
    info: function(){
        var result = 'В корзине ' + this.size() + ' предметов: \n'
        for (var i in this.products){
            result += this.products[i].product + ', ' +
            this.products[i].amount + ' штук, по ' + this.products[i].price + ' за штуку. \n'
        }
        alert(result)
    }
    
}
basket.add({product:'Ведро', price:500, amount: 3});
basket.add({product:'Лейка', price:1000, amount: 5});
basket.add({product:'Телогрейка', price:1500, amount: 1});


basket.countTotal()
basket.info()



/*
3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только 
для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру 
для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.
*/

// Очень сильно глубоко долго усердно подумал!!!
