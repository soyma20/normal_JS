// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
    let info = [465, 54, 78, 65, 'jfvjv', 'kod', 'rtbojp', 'snjl', 'dvabjk', false, true, 3, 'jdfv0', 'lifdv'];
    console.log(info);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
    let arr = [];
    arr[0]=-612;
    arr[1]=8;
    arr[2]=463;
    arr[3]=284;
    console.log(arr)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
    let text = 'fdiodfv;mdmaldfvjalfvaoivmkafv;afvfnavjknfv';
    for (let i = 0; i < 10; i++){
        document.write(`<div>${text}</div>`);
    }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
    for (let u = 0; u < 10; u++){
        document.write(`<div>${text} ${u}</div>`);
    }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
    let H1 = 0;
    while (H1<20) {
        document.write(`<h1>${text}</h1>`);
        H1++;
    }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
    let h = 0;
    while (h<20) {
        document.write(`<h1>${text} ${h}</h1>`);
        h++;
    }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
    let Arr = [56, 6565, -8546, 2320, -7897, 8, -7, 64, 5, -6];
    for (let temp of Arr) {
        console.log(temp);
    }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
    let aRr = ['dvk;sj', 'adv;ij', 'dvbilh', 'dschgj', 'vsdyg', 'sgc', 'bxmv', 'bdfakhj', 'dsnbm', 'c,'];
    for (let temp of aRr) {
        console.log(temp);
    }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
    let arR = [-8546, 2320, 64, 5, -6, 'dvk;sj', 'adv;ij', 'dvbilh', 'dschgj', 'vsdyg'];
    for (let temp of arR) {
        console.log(temp);
    }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
    let ARr = [1, 2, 3, false, true, "", ' ', 'kjf', 'jvf', 'hjd'];
    for (let temp of ARr) {
        if (typeof temp === 'boolean'){
            console.log(temp);
        }
    }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
    let ARR = [1, 2, 3, false, true, "", ' ', 'kjf', 'jvf', 'hjd'];
    for (let temp of ARR) {
    if (typeof temp === 'number'){
        console.log(temp);
    }
    }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
    let ArR = [1, 2, 3, false, true, "", ' ', 'kjf', 'jvf', 'hjd'];
    for (let temp of ArR) {
    if (typeof temp === 'string'){
        console.log(temp);
    }
    }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
    let arre = [];
    arre[0]=-612;
    arre[1]=8;
    arre[2]=463;
    arre[3]=284;
    arre[4]=false;
    arre[5]=true;
    arre[6]='bjfvd';
    arre[7]='fv,kj';
    arre[8]='vgjxhm';
    arre[9]={};
    for (let temp of arre){
        console.log(temp)
    }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
    for (let i = 0; i<10; i++){
        console.log(i);
        document.write(i);
    }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
    for (let i = 0; i<100; i++){
        console.log(i);
        document.write(i);
    }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
    for (let i = 0; i<100; i = i +2){
        console.log(i);
        document.write(i);
    }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
    for (let i = 0; i<100; i++){
        if (i % 2 === 0) {
            console.log(i);
            document.write(i);
        }
    }