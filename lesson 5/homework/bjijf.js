// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let area = (a,b) => a*b;
console.log(area(10, 10))
// - створити функцію яка обчислює та повертає площу кола
let areaOfcircle = (a) => 3.14*(a*a)
console.log(areaOfcircle(20))
// - створити функцію яка обчислює та повертає площу циліндру
let cilinderArea = (h,r) => (2*3.14*r*r)+(2*3.14*r*h);
console.log(cilinderArea(10,5))
// - створити функцію яка приймає масив та виводить кожен його елемент
let someArrey = [10,60,65, true,false]
let elementOfArr = (ARR) =>{
    for (const arrElement of ARR) {
        console.log(arrElement);
    }
}
elementOfArr(someArrey);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragraph = (text) =>document.write(`<p>${text}</p>`);
paragraph('fnvmldasvdvl nfvnalk   canjkjkan');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list = (text) =>{
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
list('dfdbufvdnjeowvlnjavulnavsvaik djnvuoai');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listNum = (text,num) =>{
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
listNum('adfbuipadfjijaavopk', 20);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listArr = (arr) =>{
    document.write(`<ol>`);
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ol>`);
}
listArr(someArrey);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let user = (arr) => {
    for (const element of arr) {
        document.write(`<div>${element.id} ${element.name} ${element.age}</div>`)
    }
}
let users =[{id: 1, name: 'Olichka', age: 21}, {id: 2, name: 'kate', age: 63},{id: 3, name: 'ivan', age: 12}];
user(users);
