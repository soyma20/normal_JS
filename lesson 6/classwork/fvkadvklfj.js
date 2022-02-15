// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let normName = (str)=>{
    let norm = str.replaceAll('---', ' ')
        .replaceAll('..', ' ')
        .replaceAll('__', ' ');
    return norm;
}
console.log(normName(n1))
console.log(normName(n2))
console.log(normName(n3))
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomArr = (leng,limit)=>{
    let arrey = [];
    for (var i = 0; i < leng; i++) {
        arrey.push(Math.round(Math.random()*limit))
    }
    return arrey
};
console.log(randomArr(10,100))
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let someArr = randomArr(10,100);
console.log(someArr.sort((a,b) => a-b));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let secondArr =randomArr(10,50)
console.log(secondArr.filter(i => i%2 ===0));
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let theerd = randomArr(10, 20).map(function (num){
   num = num + "";
   return num;
});
console.log(theerd);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
let sorter = (arr, direction) => {
    if (direction === 'small') return arr.sort((a,b)=>a-b);
    if (direction === 'big') return arr.sort((a,b)=>b-a);
};
console.log(sorter(nums, 'small'));
console.log(sorter(nums, 'big'));
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let longest = coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration);
console.log(longest);
let longer5month =[];
for (let element of longest) {
    if (element.monthDuration>5){
        longer5month.push(element)
    }
}
console.log(longer5month);