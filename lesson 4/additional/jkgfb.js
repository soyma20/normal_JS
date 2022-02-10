// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function twoArguments(arr) {
    if (arr.length < 2){
        console.log(arr[0]);
    }else {
        console.log(arr[0]+arr[1]);
    }
}
twoArguments([10, 30])
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function sumOfArr(arr1, arr2) {
    let newArr =[];
    for (let i = 0;  i < arr1.length; i++) {
        newArr[i]= arr1[i]+arr2[i];
    }
    return newArr;
}
sumOfArr([10,20,30], [10,20,30])
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// }
// let newArr = [];
// for (let key in user) {
//     newArr = key;
//     console.log(newArr)
// }
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let secondArr = [];
// for (let key in user) {
//     secondArr = user[key]
//     console.log(secondArr)
// }
// let newArr = []
// for (let i = 0; i < user.length; i++) {
//     newArr[i]=user[key];
// console.log(newArr)
// }

