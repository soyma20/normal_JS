// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNum(number1, number2, number3) {
    if (number1 <number2 && number1<number3){
        console.log(number1);
    }else if(number2<number1 && number2<number3){
        console.log(number2);
    }else if(number3<number1 && number3<number2){
        console.log(number3);
    }else{
        console.log('0.o');
    }
}
minNum(7,18,21);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNum(number1, number2, number3) {
    if (number1>number2 && number1>number3){
        console.log(number1);
    }else if(number2>number1 && number2>number3){
        console.log(number2);
    }else if(number3>number1 && number3>number2){
        console.log(number3);
    }else{
        console.log('0.o');
    }
}
maxNum(26,32,1);
// - створити функцію яка повертає найбільше число з масиву
function arrNumMax(arr) {
    let Max = 0;
    for (const arrElement of arr) {
        if(arrElement>Max){
            Max = arrElement;
        }
    }
    return Max;
}
let ARR =[20,223,15,152,132,48,654];
console.log(arrNumMax(ARR));
// - створити функцію яка повертає найменьше число з масиву
function arrNumMin(arr){
    let Min = arr[0];
    for (const arrElement of arr) {
        if (arrElement < Min){
            Min = arrElement;
        }
    }
    return Min;
}
console.log(arrNumMin(ARR));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function summ (someArr){
    let num =0;
    for (const someArrElement of someArr) {
        num = someArrElement + num;
    }
    return num;
}
let exemple = [10,60,10,10];
console.log(summ(exemple));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function mid(arr) {
    let value = 0;
    for (const arrElement of arr) {
        value = arrElement +value;
    }
    return value / arr.length;
}
console.log(mid(exemple));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function MinLogMax(arg){
    let min = arguments[0]
    let max = arguments[0]
    for (const element of arguments) {
        if (element>max){
            max=element;
        }
        if (element<min){
            min=element;
        }
    }

    console.log('max ', max);
    return min;
}
console.log('The smallest number',MinLogMax(10, 5, 2, 6, 879, 66, 78, 3));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function ramdom (lenght){
    let finalArr = [];
    for (let i = 0; i < lenght; i++) {
        finalArr.push(Math.round(Math.random()*100));
    }
    return finalArr;
}
console.log(ramdom(10));
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomArr(lenghtOfArr, limitOfNumber){
    let arr = [];
    for (let i = 0; i < lenghtOfArr; i++) {
        arr.push(Math.round(Math.random()*limitOfNumber))
    }
    return arr;
}

console.log(randomArr(10,60))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverse (x){
    let a = [];
    for (let i = 0; i < x.length; i++) {
        a[i] = x[(x.length - 1) - i]
    }
    return a
}
let arrey = [10,20,20,51,585,58];
console.log(reverse(arrey));