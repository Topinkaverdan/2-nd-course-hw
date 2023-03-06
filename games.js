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