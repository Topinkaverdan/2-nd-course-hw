// Задание 1
let a_1 = 10;
a_1 = 20;
alert(a_1);
// Задание 2
const firstIphone = 2007;
alert(firstIphone);
// Задание 3
const creator = 'Брендан Эйх';
alert(creator);
// Задание 4
let x = 10;
let y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);
// Задание 5
let power = 2;
let result = 2 ** 5;
alert(result);
// Задание 6
let a = 9;
let b = 2;
let modulo = 9 % 2;
alert(modulo);
// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);
// Задание 8
let your_age = Number(prompt('Сколько вам лет?'));
alert(your_age);
// Задание 9.0
const user = {
    name: 'Дмитрий',
    age: 32,
    isAdmin: false,
    "city of residence": 'Saint-Petersburg'//Задание 9.1
}
user['age'] = 40; //Задание 9.2
delete user['city of residence']; //Задание 9.3
let info = prompt('Какую информацию хотите узнать о пользователе?');//Задание 9.4
alert(user[info]);
//Задание 10
let hello = prompt('Введите свое имя');
alert(`Привет, ${hello}!`);