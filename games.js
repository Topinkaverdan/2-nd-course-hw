// first game 

function guessTheSeason() {
    let monthNumber = Number(prompt('Введи номер месяца)'));

    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        alert('Зима');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        alert('Весна');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        alert('Лето');
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        alert('Осень');
    } else {
        alert('Попробуй снова! Такого месяца не существует:(');
    }
}

// second game 

function guessTheWords() {
let wordFruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
wordFruit = wordFruit.sort(() => Math.random() - 0.5);

alert(wordFruit);

let firstUserAnswer = String(prompt('Чему равнялся первый элемент?'));
let secondUserAnswer = String(prompt('Чему равнялся последний элемент?'));

if (firstUserAnswer.toLowerCase() === wordFruit[0].toLowerCase() && secondUserAnswer.toLowerCase() === wordFruit[6].toLowerCase()) {

    alert('Мои поздравления! Вы угадали оба элемент)');

} else if (firstUserAnswer.toLowerCase() === wordFruit[0].toLowerCase() || secondUserAnswer.toLowerCase() === wordFruit[6].toLowerCase()) {
    
    alert('Вы были близки к победе!');

} else {

    alert('К сожалению, вы ответили неверно. Попробуйте снова(');

}

}