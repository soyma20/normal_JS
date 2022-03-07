// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let btn = document.getElementsByClassName('btn');
let tex = document.getElementById('text');
btn.onclick = function () {
    tex.style.display = 'none';
};
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let butt = document.getElementById('butt');
butt.onclick = function () {
    butt.style.display = 'none';
}
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let confirm = document.getElementById('button');
confirm.onclick = function () {
    let age = document.getElementById('age').value;
    if (!age){
        alert('confirm your age!!!');
    }else if (age < 18){
        alert('you are to young')
    }else{
        alert('greetings stranger')
    }
}
// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.querySelector('.menu');
let title = menu.querySelector('.title');

title.onclick = function () {
    menu.classList.toggle('hidden');
};
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
let comments = [
    {title : 'lorem', text : 'lorem ipsum.'},
    {title : 'lorem', text : 'lorem ipsum.'},
    {title : 'lorem', text : 'lorem ipsum.'},
    {title : 'lorem', text : 'lorem ipsum.'},
    {title : 'lorem', text : 'lorem ipsum.'}
]
let conteiner = document.createElement('div');
for (let comment of comments) {
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let button = document.createElement('button');
    let hr = document.createElement('hr');

    h4.innerText = comment.title;
    p.innerText = comment.text;
    button.innerText = 'close';

    button.onclick = function () {
        p.classList.add('commenthide');
    }

    div.append(h4, p, button);
    conteiner.append(div, hr);
}
document.body.appendChild(conteiner);