// Задание 1 

const numbers = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(numbers(7, 3));
console.log(numbers(0, 10));
console.log(numbers(6, 6));

// Задание 2

function parity() {
    let userNumber = Number(prompt('Введите число.'));

    if (userNumber % 2 === 0) {
        alert('Число четное.')
    } else {
        alert('Число нечетное.')
    }
}

parity();

// Задание 3.1

function square() {
    let number = Number(prompt('Введите число.'));
    let result = number ** 2;

    console.log(result);
}

square();

// Задание 3.2

function squareReturn() {
    let number = Number(prompt('Введите число.'));

    return number ** 2;
}

let result = squareReturn();

console.log(result);

// Задание 4

const sayHello = () => {
    let age = Number(prompt('Сколько вам лет?'))

    if (age < 0) {
        alert('Вы ввели неправильное значение.');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!')
    } else {
        alert('Добро пожаловать!')
    }
}

sayHello();

// Задание 5

function check(numberOne, numberTwo) {
    if(!isNaN(numberOne) && !isNaN(numberTwo)) {
        return alert(numberOne * numberTwo);
    } else {
        alert('Одно или оба значения не являются числом.');
    }
}

check(-8, 10);
check('hi', 90);

// Задание 6

function cub() {
    let n = prompt('Введите число.');
    if (!isNaN(n)) {
        let k = n ** 3;
        console.log(`${n} в кубе равняется ${k}`);
    } else {
        console.log('Переданный параметр не является числом');
    }
}

cub();
