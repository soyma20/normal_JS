// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let name = document.forms.user.name;
let age = document.forms.user.age;
let button = document.getElementById('button');
let key = 'key';

let saveDatum = (name, age) =>{
    let user = {
        name : name,
        age : age
    };
    localStorage.setItem(key,JSON.stringify(user));
}
button.onclick = ()=>{
    saveDatum(name.value, age.value);
}
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let model = document.forms.car.model;
let type = document.forms.car.type;
let volume = document.forms.car.volume;
let btn = document.getElementById('buttonTwo');

let saveData = (model, type, volume) =>{
    let data = [];
    let car = {
        model: model,
        type: type,
        volume:volume
    }
}