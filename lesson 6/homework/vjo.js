// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';
console.log(a.length);
console.log(b.length);
console.log(c.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(c.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let A = 'HELLO WORLD';
let C = 'LOREM IPSUM';
let B = 'JAVASCRIPT IS COOL';
console.log(A.toLowerCase());
console.log(B.toLowerCase());
console.log(C.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';

// console.log(str.replaceAll(' ', ''))

let ew = str.split(' ')
let dirty = ew[1];
let strin = ew[2];
console.log(dirty.concat(' ', strin))


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let st = 'Каждый охотник желает знать';
let stringArr = (string) => string.split(' ');
let newArr= stringArr(st);
document.writeln(newArr)
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let strLenght = (str, length) => str.slice(0,length);
document.writeln(strLenght(st, 7))
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let stri = "HTML JavaScript PHP";
let UPslash = (string) => string.replaceAll(' ', '-').toUpperCase();
document.writeln(UPslash(stri))
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let text = 'some text with words'
let FirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
console.log(FirstLetter(text))
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let wordUp = (string) =>{
    let word = string.split(' ');
    for (let i = 0; i < word.length; i++) {
        word[i]= word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
    return  word.join(' ');
}
console.log(wordUp(text));