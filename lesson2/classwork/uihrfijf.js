// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
    let first = +prompt('First number');
    let second = +prompt('Second number');
    if (first>second){
        console.log(first);
    }else if (second === first){
        console.log('equal numbers');
    }else{
        console.log(second)
    }
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
    let pidizd = +prompt();
    if (pidizd > 0 && pidizd<= 20){
        console.log('Перший під їзд');
    }else if (pidizd >= 21 && pidizd <= 48){
        console.log('Другий під їзд');
    }else if (pidizd >= 49 && pidizd <= 90){
        console.log('Третій під їзд')
    }else {
        console.log('Ти хто такий? Йди звідси')
    }
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
    let numbe = +prompt();
    if (numbe === 10){
        console.log('ВІРНО')
    }else {
        console.log('НЕВІРНО')
    }
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
    let x = true;
    if (typeof x === 'number'){
        document.write(1);
    }else if (typeof x === 'string'){
         document.write(2);
    }else if (typeof x === 'boolean'){
         document.write(3);
    }else if (typeof x === 'object'){
        document.write(4);
    }else {
        console.log("heze");
    }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
     let temp = Math.random()*40;
     if (temp >=10 && temp <= 22){
         console.log('ВЧИТИСЯ');
     }else {
         console.log('ОНЛАЙН');
     }
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
    let chislo = Math.random()*10;
    let victorina = Math.round(chislo);
    switch (victorina){
        case 1:
            console.log('car');
            break;
        case 2:
            console.log('bould head');
            break;
        case 3:
            console.log('1000$');
            break;
        case 4:
            console.log('tea');
            break;
        case 5:
            console.log('phone');
            break;
        default:
            console.log('hahahahahhahah')
    }