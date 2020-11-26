/*
1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3

Дан ответ:
++a = прединкремент, он увеличивает значение переменной, а потом возвращает результат
таким образом 'c' оказалась двойкой, а b++ = постинкремент, который сначала возвращает результат,
а лишь потом увеличивает значение.

по той же логике происходит и сложение в действиях #4 и #5
алерт "а" и "б" дает тройку, потому что их все время инкрементили на протяжении прошлых арифметических действий
*/

/*
2. Чему будет равен x? 

var a = 2;
var x = 1 + (a *= 2);

x = 5
*/

/* 
3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность;
- если а и b отрицательные, вывести их произведение;
- если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.
*/

var a = +prompt('Введите значение a: ')
var b = +prompt('Введите значение b: ')

if (a >= 0 && b >= 0) {
    console.log(a - b)
}
else if (a < 0 && b < 0) {
    console.log(a * b)
}
else {
    console.log(a + b)
}

/*
4. Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.
*/

var _a = +prompt('Введите значение в промежутке [0..15]')
while (a < 0 || a > 15) {
    console.log('Значение не в требуемом промежутке')
    var _a = +prompt('Введите значение в промежутке [0..15]')
}
switch (_a) {
    case (0):
        console.log(0);
    case (1):
        console.log(1);
    case (2):
        console.log(2);
    case (3):
        console.log(3);
    case (4):
        console.log(4);
    case (5):
        console.log(5);
    case (6):
        console.log(6);
    case (7):
        console.log(7);
    case (8):
        console.log(8);
    case (9):
        console.log(9);
    case (10):
        console.log(10);
    case (11):
        console.log(11);
    case (12):
        console.log(12);
    case (13):
        console.log(13);
    case (14):
        console.log(14);
    case (15):
        console.log(15);
}

/*
5.Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
*/

function addition(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function divide(x, y) {
    return x / y
}

function multiply(x, y) {
    return x * y
}

/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
В зависимости от переданного значения выполнить одну из арифметических операций 
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case ("Сложение"):
            hw2.addition(arg1, arg2);
        case ("Вычитание"):
            hw2.subtract(arg1, arg2);
        case ('Умножение'):
            hw2.multiply(arg1, arg2);
        case ('Деление'):
            hw2.divide(arg1, arg2)
    }
}


// 7.* Сравнить null и 0. Объяснить результат.
console.log(0 == null)
// False, потому что 0 - это значение, а null - отсутствие какого либо значения.

/* 
8.* С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val — заданное число, pow –— степень.
*/

function power(val, pow) {
    if (pow == 0) return 1;
    else if (pow == 1) return val;
    else {
        pow -= 1;
        res = val * power(val, pow);
        return res;
    }
}