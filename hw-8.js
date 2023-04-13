// Задание 1

function sum(arr) {

    let result = 0;
    
    for (i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    console.log(result);
}

function mult(arr) {

    let result = 1;
    
    for (i = 0; i < arr.length; i++) {
        result *= arr[i];
    }

    console.log(result);
}

const math = (arr, callback) => {

    callback(arr);

}

math([4, 6, 8, 90, 4], mult);
math([6, 10, 14, 15, 87, 34], sum);

//Задание 2

const users = [
    {name : 'Jon', age: 22},
    {name : 'Richard', age: 18},
    {name : 'Anton', age: 32},
    {name : 'Lida', age: 23},
    {name : 'Bob', age: 44}
];

function userAgeSorting(a, b) {
    
    return a.age - b.age;

}

const getSortedArrayObj = (arr) => {

    arr.sort(userAgeSorting);

    console.log(arr);

}

getSortedArrayObj(users);

//Задание 3

const arr = [1, '4', 9, 'two'];

const arrNaN = [1, '4', false, 9, 'two'];

function reversArr(arr) {

    arr.reverse();

    return arr;

}

function toNumberArr(arr) {

    let newArr = [];

    for (i = 0; i < arr.length; i++) {

        let number = +arr[i]

        if(!isNaN(number)) {

            newArr.push(number);

        }

    }

    return newArr;

}

const each = (arr, callback) => {

    console.log(callback(arr));

}

each(arr, reversArr);
each(arrNaN, toNumberArr);

//Задание 4

const getDate = () => {

    let timerId = setInterval(() => {

        let currentDate = new Date();
        console.log(currentDate);

    }, 3000);

    setTimeout(() => {

        clearInterval(timerId);

        console.log('30 секунд прошло.');

    }, 30000);

}

getDate();

//Задание 5



function calling() {

    console.log('Звоню!');

}

function beeps(callback) {

    setTimeout(() => {

        console.log('Идут гудки...');

        callback();

    }, 1000);
}

function talk() {

    console.log('Разговор');

}

calling();
beeps(talk);