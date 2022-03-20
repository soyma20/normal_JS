// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

let conteiner = document.createElement('div');
conteiner.classList.add('postConteiner')
conteiner.innerHTML = `
    <h3>${post.title}</h3>
    <h6>${post.userId} / ${post.id}</h6>
    <p>${post.body}</p>
`;
wrapper.appendChild(conteiner);

let commentsConteiner = document.createElement('ul');
commentsConteiner.classList.add('commentsConteiner');
document.body.appendChild(commentsConteiner);
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
        for (let comment of value) {
            let commentConteiner = document.createElement('li');
            commentConteiner.classList.add('commentConteiner')
            commentConteiner.innerHTML = `
                <h4>${comment.name}, ${comment.id}, ${comment.postId}</h4>
                <p>${comment.body}</p>
                <h6>${comment.email}</h6>
            `
            commentsConteiner.appendChild(commentConteiner)
        }
})