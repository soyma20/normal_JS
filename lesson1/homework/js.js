    // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    let a = 'hello';
    let b = 'owu';
    let c = 'com';
    let d = 'ua';
    let e = 1;
    let f = 10;
    let g = -999;
    let h = 123;
    let i = 3.14;
    let j = 2.7;
    let k = 16;
    let l = true;
    let m = false;
    // Вивести кожну змінну за допомогою: console.log , alert, document.write
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
    console.log(h);
    console.log(i);
    console.log(j);
    console.log(k);
    console.log(l);
    console.log(m);
    alert(a);
    alert(b);
    alert(c);
    alert(d);
    alert(e);
    alert(f);
    alert(g);
    alert(h);
    alert(i);
    alert(j);
    alert(k);
    alert(l);
    alert(m);
    document.write(a);
    document.write(b);
    document.write(c);
    document.write(d);
    document.write(e);
    document.write(f);
    document.write(g);
    document.write(h);
    document.write(i);
    document.write(j);
    document.write(k);
    document.write(l);
    document.write(m);
    // - Переприсвоїти кожній змінній з завдання значення на довільне.
    a = 'buy';
    b = 'uwo';
    c = 'moc';
    d = 'uk';
    e = 2;
    f = 9;
    g = 999;
    h = 321;
    i = 4.13;
    j = 7.2;
    k = 61;
    l = false;
    m = true;
    // Вивести кожну змінну за допомогою: console.log , alert, document.write
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
    console.log(h);
    console.log(i);
    console.log(j);
    console.log(k);
    console.log(l);
    console.log(m);
    alert(a);
    alert(b);
    alert(c);
    alert(d);
    alert(e);
    alert(f);
    alert(g);
    alert(h);
    alert(i);
    alert(j);
    alert(k);
    alert(l);
    alert(m);
    document.write(a);
    document.write(b);
    document.write(c);
    document.write(d);
    document.write(e);
    document.write(f);
    document.write(g);
    document.write(h);
    document.write(i);
    document.write(j);
    document.write(k);
    document.write(l);
    document.write(m);
    // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
    let firstName = 'Yaroslav';
    let middleName ='Soyma';
    let lastName = 'Dmitrovich';
    let person=(middleName+""+firstName+''+lastName)
    console.log(person)
    // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
    let age = 20;
    prompt(firstName)
    prompt(lastName)
    prompt(age)
    // Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
    prompt(' Вітаю Ярослав Дмитрович. Тобі 20 років');
    // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    // let a = 100; let b = '100'; let c = true; ПЕРЕЙМЕНУВАВ ЗМІННІ БО ЦІ ВЖЕ БУЛИ ВИКОРИСТАНІ ВИЩЕ
    let aa = 100;
    let bb = '100';
    let cc = true;
    console.log(typeof aa);
    console.log(typeof bb);
    console.log(typeof cc);
    // - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
    // В однакових виразах не використовувати однакові оператори!!!
    console.log(5 < 6);
    console.log(5 > 6);
    console.log(5 == 6);
    console.log(5 >= 6);
    console.log(10 == 10);
    console.log(10 <= 10);
    console.log(10 != 10);
    console.log(10 > 10);
    console.log(10 < 10);
    console.log(123 === '123')
    console.log(123 == '123')


    // - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    //     let str = "20";
    // let a = 5;
    // document.write(str + a + "<br/>"); Виведеться 205 відбулась контикуляція стрінги і число 5 теж перетворилось на стрінгу
    // document.write(str - a + "<br/>"); Виведеться 15 відбулась дія множення
    // document.write(str * "2" + "<br/>"); Виведеться 40 відбулось множення
    // document.write(str / 2 + "<br/>"); Виведеться 10 відбулось ділення

    // Коли ми використовуємо знаки - * /  стрінги автоматично перетворюються на числа