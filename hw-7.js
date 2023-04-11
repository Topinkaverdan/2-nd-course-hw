// Задание 1
 
const small = 'js';

console.log(small.toUpperCase());

// Задание 2

function searchStart(arr, str) {

    const word = arr.filter(el => el.toLowerCase().startsWith(str.toLowerCase()));

    console.log(word);

}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

// Задание 3

const number = 32.58884;

console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

// Задание 4

const arr = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...arr));
console.log(Math.max(...arr));

// Задание 5

function random(min, max) {

    return Math.round(Math.random() * (max - min)) + min;

}

console.log(random(1, 10));

// Задание 6

function getRandomArrNumbers(maxValue) {

    let arr = []

    while (arr.length < Math.floor(maxValue / 2)) {

        arr.push(Math.round(Math.random() * maxValue));

    }

    console.log(arr);

}

getRandomArrNumbers(7);
getRandomArrNumbers(12);

// Задание 7
const minValue = Number(prompt('Введите первую границу числового промежутка'));
const maxValue = Number(prompt('Введите вторую границу числового промежутка'));

function randomNumbers(a, b) {
    
    return Math.round(Math.random() * (b - a)) + a;

}

console.log(randomNumbers(minValue, maxValue));

// Задание 8

let today = new Date();

console.log(today);

// Задание 9

let currentDay = new Date();


currentDay.setDate(currentDay.getDate() + 73);

console.log(currentDay);

// Задание 10

let date = new Date();
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

function newDate (myDate) {
    let minute = myDate.getMinutes();
    let seconds = myDate.getSeconds();

    if (minute < 10) {

        minute = '0' + minute;

    }

    if (seconds < 10) {

        seconds = '0' + seconds;

    }

    let fullDate = 'Дата: ' + myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' - это ' + days[myDate.getDay()] + '.';
    let fullTime = 'Время: ' + myDate.getHours() + ':' + minute + ':' + seconds;

    console.log(`${fullDate}\n${fullTime}`);

}

newDate(date);