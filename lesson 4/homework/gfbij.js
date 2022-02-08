// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function TheArea (a,b){
    return  a*b;
}
TheArea(10, 10);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function area (r){
    return r*r*3.14;
}
area (7);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cilinder (h,r){
    return (2*3.14*r*r)+(2*3.14*r*h);
}
cilinder(4, 5);
// - створити функцію яка приймає масив та виводить кожен його елемент
function array (arr){
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
array ([10, 451, 620, 851, 4852, 78]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text){
    document.write(`<p>${text}</p>`)
}
paragraph("fidvajio;fbsnjlcv mkbdfpmfdb fmgcfndfjn");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function lishka (arg){
    document.write(`<ul>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`</ul>`);
}
lishka('ofooettytthrf')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function someLishka (text, numder){
    document.write(`<ul>`);
    for (let i = 0; i < numder; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
someLishka('gf mopdfbopo', 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrList(arr){
    document.write(`<ol>`);
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ol>`)
}
let someArr = [66, 556, 'dnioi', true, false];
arrList(someArr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arrUsers(arr) {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`);
    }
}
let users =[{id: 1, name: 'Olichka', age: 21}, {id: 2, name: 'kate', age: 63},{id: 3, name: 'ivan', age: 12}];
arrUsers(users);
