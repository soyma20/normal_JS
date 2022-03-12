// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
let conteiner = document.getElementsByClassName('conteiner')[0];
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(datac =>{
        console.log(datac);
        for (const element of datac) {
            let postDiv = document.createElement('div');
            postDiv.classList.add('postDiv')
            let userid = document.createElement('div');
            userid.innerText = element.userId;
            let id = document.createElement('div');
            id.innerText = element.id;
            let title = document.createElement('h3');
            title.innerText = element.title;
            let body = document.createElement('p');
            body.innerText = element.body;

            postDiv.append(userid,id,title,body);
            conteiner.appendChild(postDiv);
        }
    })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let conteiner = document.createElement('div');
        conteiner.classList.add('conteiner');
        for (const comment of comments) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('commentDiv');
            commentDiv.innerHTML = `
                        <h3>ID: ${comment.id}</h3>
                        <h4>Name: ${comment.name}</h4>
                        <h5>Email: ${comment.email}</h5>
                        <h6>Body: ${comment.body}</h6>
                        `;
            conteiner.appendChild(commentDiv);
            document.body.appendChild(conteiner);
        }
    })