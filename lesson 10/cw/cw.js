// -
// створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let fdiv = document.createElement('div');
fdiv.innerText = 'first div';
document.body.appendChild(fdiv);
let sdiv = document.createElement('div');
sdiv.innerText = 'second div';
document.body.appendChild(sdiv);

let firstForm = document.createElement('form');
firstForm.setAttribute('name','firstForm');
fdiv.appendChild(firstForm);

let secondForm = document.createElement('form');
secondForm.setAttribute('name','secondForm');
sdiv.appendChild(secondForm);

let finput = document.createElement('input');
finput.setAttribute('name', 'finput');

let sinput = document.createElement('input');
sinput.setAttribute('name', 'sinput');

let tinput = document.createElement('input');
tinput.setAttribute('name', 'tinput');

let foinput = document.createElement('input');
foinput.setAttribute('name', 'foinput');

let button = document.createElement('button');
button.setAttribute('name','button');
button.innerText = 'send';

document.body.appendChild(button);

firstForm.append(finput,sinput);
secondForm.append(tinput,foinput);

button.addEventListener('click', function () {
    console.log(document.forms.firstform.finput.value);
    console.log(document.forms.firstform.sinput.value);
    console.log(document.forms.secondform.tinput.value);
    console.log(document.forms.secondform.foinput.value);
})
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let inputOne = document.createElement('input');
let inputTwo = document.createElement('input');
let inputThree = document.createElement('input');
let buttonTwo = document.createElement('button');

buttonTwo.innerText = 'Create sheet';

document.body.append(inputOne,inputTwo,inputThree,buttonTwo);

button.addEventListener('click', function () {
    let valueOne = inputOne.value;
    let valueTwo = inputTwo.value;
    let text = inputThree.value;

    function sheetGenerator(valueOne, valueTwo, text) {
        let table = document.createElement('table');
        let conteiner = document.createElement('div');

        table.style.border = '2px solid black';
        conteiner.appendChild(table);
        document.body.appendChild(conteiner);

        for (let i = 0; i < valueOne.length; i++) {
             let tr = document.createElement('tr');
             tr.style.border = '2px solid black';
            for (let j = 0; j < valueTwo.length; j++) {
                let td = document.createElement('td');
                td.style.border = '2px solid black';
                td.innerText = `${text}`;
                

            }

        }
    }

})
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
