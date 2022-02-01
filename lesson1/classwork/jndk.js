// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let arr = [13, 161, 456, 7798, 4651, 64, 322, 65, 11, 56];
console.log(arr)
let sum = 0;
function count(arr) {
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let result = (count(arr));
console.log(result)
// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    name: 'Матіас Шандор',
    pages: '374',
    genre: 'horror'
}
console.log(book)
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
book = {
    name: 'Матіас Шандор',
    pages: '374',
    genre: 'horror',
    author: 'Жюль Верн'
}
console.log(book)
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
book = [{
    name: 'Матіас Шандор',
    pages: '374',
    genre: 'horror',
    author: 'Жюль Верн'},
    {
     name: 'Матіас Шандор',
     pages: '374',
     genre: 'horror',
     author: 'Жюль Верн'},
    {
     name: 'Матіас Шандор',
     pages: '374',
     genre: 'horror',
     author: 'Жюль Верн'}]
console.log(book)
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23
let width = 10
let s = height * width;
console.log(s)
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10
let dC = 4
let radius = dC/2
let v = 3.14*(radius*radius)*heightC
console.log(v)
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3 ** 2
// let n = Math.pow(3,2)
let k = Math.sqrt(n+n)
console.log(k)

