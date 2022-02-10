// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min =(a,b,c) =>{
    if (a<b&&a<c){
        console.log(a);
    }else if (b<a&&b<c){
        console.log(b);
    }else if (c<a&&c<b){
        console.log(c)
    }else {
        console.log('heze')
    }
}
min(5,30,42)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max =(a,b,c) =>{
    if (a>b&&a>c){
        console.log(a);
    }else if (b>a&&b>c){
        console.log(b);
    }else if (c>a&&c>b){
        console.log(c)
    }else {
        console.log('heze')
    }
}
max(5,30,42)
// - створити функцію яка повертає найбільше число з масиву
let arr = [20,20,51,60,78,62]
let maxArr = (arr) =>{
    let max = arr[0];
    for (let Element of arr) {
        if (Element > max){
            max=Element;
        }
    }
    return max;
}
console.log(maxArr(arr));
// - створити функцію яка повертає найменьше число з масиву
let minArr = (arr) =>{
    let min = arr[0];
    for (let Element of arr) {
        if (Element < min){
            min=Element;
        }
    }
    return min;
}
console.log(minArr(arr));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sum = (arr) => {
    let num =0;
    for (let element of arr) {
        num += element;
    }
    return num;
}
console.log(sum(arr))
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let midNum = (arr) =>{
    let num =0;
    for (let element of arr) {
        num += element;
    }
    return num/arr.length;
}
console.log(midNum(arr));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let minMax = (arr) =>{
    let min =arr[0];
    let max =arr[0];
    for (let arrElement of arr) {
        if (arrElement <min){
            min = arrElement;
        }
        if (arrElement >max){
            max=arrElement;
        }
    }
    console.log(max);
    return min
}
console.log(minMax(arr));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randomARR = (lenght)=>{
    let random = [];
    for (let i = 0; i < lenght; i++) {
        random.push(Math.round(Math.random()*100));
    }
    return random;
}
console.log(randomARR(10))
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomLimit = (lenght, limit)=>{
    let random =[];
    for (let i = 0; i < lenght; i++) {
        random.push(Math.round(Math.random()*limit));
    }
    return random;
}
console.log(randomLimit(13, 50));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let revers = (arr) => {
    let newArr =[]
    for (let i = arr.length-1, j=0; i >= 0 ; i--, j++) {
        newArr[j]= arr[i]
    }
    return newArr;
}
console.log(revers(arr))