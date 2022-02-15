// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let empty = [];
for (let i = 0; i < 50; i++) {
    empty[i]=2;
}
console.log(empty);
//     b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; i < 50; i++) {
    empty[i]=1;
}
console.log(empty)
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let emptY = [];
for (let i = 0; i < 20; i++) {
    emptY[i]=Math.round(Math.random()*100)
}
console.log(emptY)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let Em = [];
for (let i = 0; i < 20; i++) {
    Em.push(Math.floor(Math.random() * (732 - 8) + 8));
}
console.log(Em)
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < emptY.length; i+=3) {
    console.log(emptY[i]);
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < emptY.length; i+=3) {
    if (emptY[i]%2===0) {
        console.log(emptY[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arr = [];
for (let i = 0; i < emptY.length; i+=3) {
    if (emptY[i]%2===0) {
        arr.push(emptY[i]);
        console.log(emptY[i]);
    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let EXAMPLE = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let i = 0; i < EXAMPLE.length; i++) {
    if (EXAMPLE[i]%2===0){
        console.log(EXAMPLE[i - 1]);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let fiscal =[100,250,50,168,120,345,188];
let sum = 0;
for (let number of fiscal) {
    sum = number+sum;
}
let result = Math.round(sum /fiscal.length);
console.log(result)
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let fkm = [];
for (let i = 0; i < 20; i++) {
    fkm[i]=Math.round(Math.random()*20);
}
let mkf =[];
for (let i = 0; i < fkm.length; i++) {
   mkf[i]=fkm[i]*5;
}
console.log(mkf)
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let lg = [12, false, true, 'fvk', 'kdlc', 23, 21]
let gl =[];
for (let element of lg) {
    if (typeof element === 'number'){
        gl.push(element)
    }
}
console.log(gl)
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
//
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
let asd = [];
for (let i = 0, j = usersWithId.length-1; i < usersWithId.length; i++, j--) {
    if (usersWithId[i].id === citiesWithId[i].user_id){
        usersWithId[i].address = citiesWithId[i];
        asd[i]=usersWithId[i];
    }else if (usersWithId[j].id === citiesWithId[i].user_id){
        usersWithId[j].address = citiesWithId[i];
        asd[i]=usersWithId[j];
    }else if (usersWithId[i].id === citiesWithId[j].user_id){
        usersWithId[i].address = citiesWithId[j];
        asd[i]=usersWithId[j].address =citiesWithId[j];
        asd[i]=usersWithId[j];
    }else{
        usersWithId[i].address = citiesWithId[i];
        asd[i]=usersWithId[i];
    }
}
console.log(asd)
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let bc= [10,20,30,2,4,6,8,7,9,42];
for (let number of bc) {
    if (number%2 ===0){
        console.log(number)
    }
}

//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let rp = [];
for (let i = 0; i < bc.length; i++) {
    const Element = bc[i];
    rp[i]=Element;
}
console.log(rp)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let str =[ 'a', 'b', 'c']
let fj = ''
for (let i = 0; i < str.length; i++) {
    const Element = str[i];
    fj = fj+Element;
}
console.log(fj)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let i = 0;
let res = '';
while (i < str.length) {
    res = `${res}${str[i]}`;
    i = i + 1;
}
console.log(res)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let hd = '';
for (let re of str) {
    hd = hd + re;
}
console.log(hd);