// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

let conteiner = document.createElement('div');
conteiner.classList.add('user-details');

conteiner.innerHTML = `
    <h2>${user.username}</h2>
    <h3>${user.name}</h3>
    <h6>${user.id}</h6>
    <h4>${user.email}, ${user.phone}, ${user.website}</h4>
    <p>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}, ${user.address.geo.lat}, ${user.address.geo.lng}</p>
    <p>${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
`

wrapper.appendChild(conteiner);

let button = document.createElement('button');
button.classList.add('buttonPost');
button.innerText = 'Post of current user';
wrapper.appendChild(button);

button.onclick = function () {
    this.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            let posts = document.createElement('div');
            posts.classList.add('posts');
            wrapper.appendChild(posts)
            for (let post of value) {
                let postConteiner = document.createElement('div');
                postConteiner.classList.add('post');
                postConteiner.innerHTML = `<h4>${post.title}</h4>`;
                let postButton = document.createElement('button');
                postButton.innerText = 'Post details';
                postButton.onclick = function () {
                    location.href = `./post-details.html?data=${JSON.stringify(post)}`;
                };
                postConteiner.appendChild(postButton);
                posts.appendChild(postConteiner);



            }
    })


}





