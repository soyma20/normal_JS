// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content');
console.log(content)
// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules)
// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerHTML = 'Some new text';
// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerHTML = 'another text'
// -- змініть кожному елементу колір фону на червоний
let back = document.body.children;
for (let elment of back) {
    elment.style.background = 'red';
}
// -- змініть кожному елементу колір тексту на синій
let color = document.body.children;
for (let elment of color) {
    elment.style.color = 'blue';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let list = document.getElementById('rules');
console.log(list.classList)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fc_rules = document.getElementsByClassName('fc_rules');
for (const fcRule of fc_rules) {
    fcRule.style.color = 'red';
}
