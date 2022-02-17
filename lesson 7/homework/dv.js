// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(100, 'olia', 'and', 'njvkdn@mail.com', 38065153153),
    new User(2, 'slavik', 'man', 'njvdjvnkfsdn@mail.com', 380653453153),
    new User(66, 'petia', 'bla', 'njvkdnkfmvld@mail.com', 380651598753),
    new User(50, 'kolia', 'heze', 'njsvdlai0n@mail.com', 380651531325),
    new User(7, 'bogdan', 'livin', 'njvdkjfn@mail.com', 380651538446),
    new User(18, 'maks', 'num', 'dsvun@mail.com', 38065984633),
    new User(30, 'vasia', 'nam', 'zvnkdn@mail.com', 38065163353),
    new User(8, 'ivan', 'rad', 'qywqdn@mail.com', 38065159846313),
    new User(9, 'ignat', 'minkliyk', 'qiuwdn@mail.com', 38048633153),
    new User(10, 'mark', 'pupkin', 'adjkn@mail.com', 383435543)
];


console.log(users)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = users.filter((item) => {
        if (item.id % 2 === 0){
        return item
        }});
console.log(filter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users.sort((a, b) => a.id - b.id);
console.log(users)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let customers = [
    new Client(20, 'olia', 'andr', 'vjdkjnl@GMAIL.com', 380982671706, ['milk', 'tomato', 'bread', 'eggs', 'oranges', 'cucumbers']),
    new Client(2, 'valia', 'andjlr', 'vjdkjvd.nl@GMAIL.com', 380982671706, ['milk', 'tomato', 'bread', 'eggs']),
    new Client(12, 'kolia', 'andnjck', 'vjdkvfdvjnl@GMAIL.com', 380982671706, ['milk', 'oranges', 'cucumbers']),
    new Client(200, 'anatolio', 'bhjmndr', 'vjdkdvsjnl@GMAIL.com', 380982671706, ['bread', 'eggs', 'oranges', 'cucumbers']),
    new Client(30, 'andreo', 'bzbr', 'ajdkjnl@GMAIL.com', 380982671706, ['tomato', 'bread', 'eggs', 'oranges', 'cucumbers']),
    new Client(4, 'vita', 'axcvr', 'bjdkjnl@GMAIL.com', 380982671706, ['milk', 'tomato', 'cucumbers']),
    new Client(7, 'lanis', 'qtrsr', 'qjdkjnl@GMAIL.com', 380982671706, ['oranges', 'cucumbers']),
    new Client(34, 'lanos', 'svcnr', 'cbjdkjnl@GMAIL.com', 380982671706, ['milk']),
    new Client(46, 'yaguar', 'asbc,nsr', 'cljdkjnl@GMAIL.com', 380982671706, ['milk', 'tomato']),
    new Client(10, 'yarik', 'bmr', 'vjdkjncd aschmb d@GMAIL.com', 380982671706, ['cucumbers'])
];

console.log(customers)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
customers.sort((a, b) => a.order.length - b.order.length);
console.log(customers)


