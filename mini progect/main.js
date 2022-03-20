let usersDiv = document.createElement('div');
usersDiv.classList.add('users')
document.body.appendChild(usersDiv)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users =>{
        for (let user of users) {
            let userConteiner = document.createElement('div');
            userConteiner.classList.add('user');
            userConteiner.innerHTML = `
                <h3>${user.username}</h3>
                <h4>${user.name}</h4>`
            let button = document.createElement('button');
            let link = document.createElement('a');
            link.innerText = 'User details';
            link.href = `./user-details.html?data=${JSON.stringify(user)}`;
            button.appendChild(link);
            userConteiner.appendChild(button);
            usersDiv.appendChild(userConteiner);
        }
    })