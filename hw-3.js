// Задание 1 
let password = '085689ghet';
let confirmation = prompt('Введите пароль');
if (password === confirmation) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неверно');
}
// Задание 2
let c = 2;
(c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');
let p = 0;
(p > 0 && p < 10) ? console.log('Верно') : console.log('Неверно');
let l = 10;
(l > 0 && l < 10) ? console.log('Верно') : console.log('Неверно');
let k = -3;
(k > 0 && k < 10) ? console.log('Верно') : console.log('Неверно');
// Задание 3
let d = 56;
let e = 115;
(d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');
// Задание 4 
let a = Number('2');
let b = Number('3');
alert(a + b);
// Задание 5
let monthNumber = Number(prompt('Укажите месяц'));
switch (monthNumber) {
    case 1 :
        console.log('Зима');
        break;
    case 2 :
        console.log('Зима');
        break;
    case 3 :
        console.log('Зима');
    case 4 :
        console.log('Весна');
        break;
    case 5 :
        console.log('Весна');
        break;
    case 6 :
        console.log('Весна');
        break;
    case 7 :
        console.log('Лето');
        break;
    case 8 :
        console.log('Лето');
        break;
    case 9 : 
        console.log('Лето');
        break;
    case 10 :
        console.log('Осень');
        break;
    case 11 :
        console.log('Осень');
        break;
    case 12 :
        console.log('Осень');
        break;
    default: 
        console.log('Такого месяца не существует');
        break;
}
// Задание 7
let number = Number(prompt('Пожалуйста, введите любое число'));
(number % 2 === 0) ? console.log('Число четное') : console.log('Число нечетное');
// Задание 8