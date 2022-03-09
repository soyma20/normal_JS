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