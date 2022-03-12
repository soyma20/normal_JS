// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts =>{
        let conteiner = document.createElement('div');
        conteiner.classList.add('conteiner');
        for (const post of posts) {
            let postDiv = document.createElement('div');
            postDiv.classList.add('postDiv');
            postDiv.innerHTML = `
                <div>${post.id}</div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>`;

            let button = document.createElement('button');
            button.innerText = 'Comments';
            button.onclick = (id)=>{
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        console.log(comments)
                        for (const comment of comments) {
                            if (post.id === comment.postId){
                                let commentWrapp = document.createElement('div');
                                commentWrapp.classList.add('comments')
                                commentWrapp.innerHTML = `
                                    <div>${comment.postId}</div>
                                    <div>${comment.id}</div>
                                    <h2>${comment.name}</h2>
                                    <h3>${comment.email}</h3>
                                    <p>${comment.body}</p>`;

                                postDiv.appendChild(commentWrapp);
                            }
                            button.disabled = true;
                        }
                    })
            }
            postDiv.appendChild(button);
            conteiner.appendChild(postDiv);
            document.body.appendChild(conteiner);
        }
    })