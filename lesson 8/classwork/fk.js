//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let main = document.getElementById('main_header');
main.classList.add('javaComplex');
// b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul');
console.log(ul);
ul[0].style.width = '400px';
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linklist = document.getElementsByClassName('linkList');
console.log(linklist);
for (let element of linklist) {
    element.style.width = '50%'
}
// d) отримує текст який зберігається в елементі з класом listElement2
let element2 = document.getElementsByClassName('listElement2');
console.log(element2[0].innerHTML);
// e) отримує всі елементи li та змінює ім колір фону на сірий
let lish = document.getElementsByTagName('li');
for (let element of lish) {
    element.style.background = 'grey';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let aaa = document.getElementsByTagName('a');
console.log(aaa);
for (const element of aaa) {
    element.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const aaaElement of aaa) {
    if(aaaElement.innerText === 'link3'){
        aaaElement.style.fontSize = '40px'
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const element of aaa) {
    console.log(element);
    let XXX = element.innerText
    element.classList.add(`element_${XXX}`)
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let sub = document.getElementsByClassName('sub-header');
console.log(sub);
for (const subElement of sub) {
    subElement.style.background = prompt('Background of header')
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (const subElement of sub) {
    if (subElement.innerText === 'content 2 segment'){
        subElement.style.color = prompt('Text color')
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let firstCont = document.getElementsByClassName('content_1');
console.log(firstCont);
firstCont[0].innerText = prompt('Some text');
// l) отримати елементи p та змінити їм padding на 20px
let ppp = document.getElementsByTagName('p');
for (const pppElement of ppp) {
    pppElement.style.padding  = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
text2[0].innerText = 'dec-2021';