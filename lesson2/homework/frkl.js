// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
    let time = Math.random() * 60;
    console.log(time);
    if (time >= 0 && time <= 15){
        console.log("first");
    }else if (time > 15 && time <= 30 ){
        console.log('second');
    }else if (time > 30 && time <= 45 ){
        console.log('third');
    }else if (time > 45 && time <= 59 ){
        console.log('fourth');
    }else {
        console.log('NOT correct')
    }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
    let number = Math.random()*31;
    let day = Math.round(number);
    console.log(day);
    if (day <=10){
        console.log('first decade');
    }else if (day <= 20){
        console.log('second decade');
    }else{
        console.log('third decade');
    }

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
    let test = true;
    if (test === true){
        console.log('true');
    }else{
        console.log('false');
    }
//     let test = confirm('You?') ? true:false;
//     console.log(test);

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
    let a = +prompt('Aren`t you zero?');
    if (a !== 0){
        console.log('Вірно');
    }else{
        console.log('Невірно');
    }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
    let days = +prompt('Який день тижня?');
    switch (days){
        case 1:
            console.log("Сніданок Обід Вечеря");
            break;
        case 2:
            console.log("Обід Вечеря");
            break;
        case 3:
            console.log("Вечеря");
            break;
        case 4:
            console.log("Хліб");
            break;
        case 5:
            console.log("Апельсин");
            break;
        case 6:
            console.log("Ноут");
            break;
        case 7:
            console.log("Суп");
            break;
        default:
            console.log('Not correct');
    }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4. Високосні роки не діляться націло на 4
    let year = 365;
    if (year/4 === 91.5){
        console.log('Високосний');
    }else {
        console.log('НЕвисокосний');
    }
//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
    let javaSK = prompt('Яка «офіційна» назва JavaScript?');
    if (javaSK === 'ECMAScript'){
        console.log('Правильно!');
    }else {
        console.log('Не знаєте? ECMAScript!')
    }