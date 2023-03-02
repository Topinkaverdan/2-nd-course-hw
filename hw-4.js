//Задание 1
let i = 1;
do {
    console.log('Привет!');
    i++;
} while (i <= 2);
// Задание 2
let a = 1
while (a <= 5) {
    console.log(a);
    a++;
}
// Задание 3
let b = 7;
do {
    console.log(b);
    b++;
} while (b >=7 && b <=22);
// Задание 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
}
for (const key in obj) {
    alert(`${key} - зарплата ${obj[key]} долларов.`);
}
// Задание 5
let n = 1000;
let num = 0;
while (n > 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num);
// Задание 6
let friday = 4;
do {
    alert(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
    friday += 7;
} while (friday <= 31);