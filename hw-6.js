// Задание 1 

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] === 10) break;

    console.log(numbers[i]);

}

// Задание 2

const num = [1, 5, 4, 10, 0, 3];

console.log(num.indexOf(4));

// Задание 3

let group = [1, 3, 5, 10, 20];

group = group.join(' ');

console.log(group);

// Задание 4

let arr = [];

for (let i = 0; i < 3; i++) {

    arr[i]=[];

    for (let j = 0; j < 3; j++) {

        arr[i][j] = 1;

    }

}

console.log(arr);

// Задание 5

const array = [1, 1, 1];

for (let i = 0; i < 3; i++) {

    array.push(2);

}

console.log(array);

// Задание 6

let sorting = [9, 8, 7, 'a', 6, 5];

sorting = sorting.sort();

const result = sorting.filter(item => typeof item === 'number' );

console.log(result);

// Задание 7 

const number = [9, 8, 7, 6, 5];
let userNumber = Number(prompt('Введите число от 1 до 10'));
const resultNum = number.filter(item => item === userNumber)

if (resultNum[0] === userNumber) {

    console.log('Ваше число содержится в массиве.');

} else {

    console.log('Такого числа нет.');

}

// Задание 8

let letters = 'abcdef';

let lettersReverse = letters.split('').sort().reverse().join('');

console.log(lettersReverse);

// Задание 9

const arrays = [
    [1, 2, 3],
    [4, 5, 6],
];

const arraysResult = (a,b) => {
    let result = a.concat(b);
    return result;
}

console.log(arraysResult(...arrays));

// Задание 10

const sum = [1, 3, 10, 8, 7, 9, 6];
let sumResult = 0;

for (let i = 0; i < sum.length; i++) {

    sumResult += sum[i];

    console.log(sumResult);
    
}
