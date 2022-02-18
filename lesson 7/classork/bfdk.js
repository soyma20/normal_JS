
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Carconstuctor (model, manufacturer, year, maxspeed, capacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.capacity = capacity;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxspeed} km на годину`)
    };
    this.info = function () {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxspeed}, обєм двигуна - ${this.capacity}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver= driver;
    }
}
let japanese = new Carconstuctor('r500', 'honda', 2007, 200, 2000 );
console.log(japanese);
japanese.drive();
japanese.info();
japanese.increaseMaxSpeed(10);
japanese.info();
japanese.changeYear(2013);
japanese.info();
japanese.addDriver('Ярослав');
console.log(japanese);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, manufacturer, year, maxspeed, capacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.capacity = capacity;
    };
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxspeed} km на годину`)
    };
    info (){
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxspeed}, обєм двигуна - ${this.capacity}`)
    };
    increaseMaxSpeed (newSpeed){
        this.maxspeed = this.maxspeed + newSpeed;
    };
    changeYear (newValue){
        this.year = newValue;
    };
    addDriver (driver){
        this.driver = driver;
    }
}
let carClass = new Car('crm', 'toyota', 1999, 190, 3000);
console.log(carClass);
carClass.drive();
carClass.info();
carClass.increaseMaxSpeed(10);
carClass.info();
carClass.changeYear(2013);
carClass.info();
carClass.addDriver('Ярослав');
console.log(carClass);
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class popelushcaCon {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let tenPop = [
    new popelushcaCon('luda', 20, 40),
    new popelushcaCon('andriana', 31, 36),
    new popelushcaCon('olena', 51, 42),
    new popelushcaCon('evdokia', 61, 45),
    new popelushcaCon('krictina', 18, 35),
    new popelushcaCon('oliachka', 21, 38),
    new popelushcaCon('ramina', 28, 39),
    new popelushcaCon('maria', 2052, 34),
    new popelushcaCon('alona', 19, 36),
    new popelushcaCon('gafia', 56, 37),
]
console.log(tenPop)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let slav = new prince('yaroslav', 20, 38);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let para = (popelushka, prince)=>{
    for (let element of popelushka) {
        if (element.footSize === prince.shoe){
            return `твоя попелюшка ${element.name}`
        }
    }

}
console.log(para(tenPop, slav))
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let princes = tenPop.find((item) => item.footSize === slav.shoe);
console.log(princes);
