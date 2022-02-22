// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.background = 'silver';
block.style.color = 'red';
block.style.fontSize = '50px';
document.body.appendChild(block);
let blockClone = block.cloneNode(true);
document.body.appendChild(blockClone);
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let array1 = ['Main','Products','About us','Contacts'];
let menus = document.getElementsByClassName('menu');
let menu = menus[0];
for (let string of array1) {
    let lis = document.createElement('li');
    menu.appendChild(lis);
    lis.innerText = `${string}`;
}
//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const element of coursesAndDurationArray) {
    let block = document.createElement('div');
    block.innerText = `${element.title} ${element.monthDuration}`;
    document.body.appendChild(block);
}
// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const element of coursesAndDurationArray2) {
    let block = document.createElement('div');
    let h1 = document.createElement('h1');
    let ppp = document.createElement('p');
    block.classList.add('item');
    h1.classList.add('heading');
    ppp.classList.add('description');
    h1.innerText = `${element.title}`;
    ppp.innerText = `${element.monthDuration}`;
    block.appendChild(h1);
    block.appendChild(ppp);
    document.body.appendChild(block);
}
