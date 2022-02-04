// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
    let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
    if (friends.length>=3){
        alert('its large massive');
    }else {
        alert('its small massive');
    }
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
    let first = 8;
    let second = 5;
    let third = 13;
    if (first>second && second>third){
        console.log(second);
    }else if(second>third && third>first){
        console.log(third);
    }else if(third>first && first>second){
        console.log(first);
    }
// - Перепишіть конструкцію if з використанням умовного оператора '?':
    let a = 1;
    let b = 2;
    let result = a + b > 4 ? 'Багато':'Мало';
    console.log(result);

// - Маємо будь яке число від -100, 0, +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
    let number = -5;
    let type = (number ===0) ? 'Нулеве': (number > 0) ? 'Позитивне': 'Негативне';
    console.log(type)