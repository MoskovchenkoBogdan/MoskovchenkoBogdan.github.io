const workProfile = document.getElementById('information');
const list = workProfile.querySelector('ul');
workProfile.classList.add('img');


fetch('https://api.github.com/users/MoskovchenkoBogdan')
    .then(response => response.json())
    .then(data => {
        workProfile.classList.remove('img');
        let li = document.createElement('li');
        li.textContent = 'Hello!! I am ' + data.login;
        list.appendChild(li);

        let li2 = document.createElement('li');
        let str = data.created_at.substr(0, 10) + ' at ' + data.created_at.substr(11, 8);
        li2.textContent = 'I was registered ' + str;
        list.appendChild(li2);

        let li3 = document.createElement('li');
        let item = document.createElement('span');
        item.innerText = "My Repositories";
        li3.appendChild(item);
        let btnRepository = document.createElement('button');
        btnRepository.innerText = 'HomeworksGeekHub';
        btnRepository.addEventListener('click', () => {
            let myDiv = document.getElementById('loader');
            myDiv.style.display = "block";
            myDiv.classList.add('img');
            fetch('https://api.github.com/users/MoskovchenkoBogdan/repos')
                .then(response => response.json())
                .then(data => {
                    myDiv.classList.remove('img');
                    myDiv.textContent = data[0].updated_at.substr(0, 10) + ' at ' + data[0].updated_at.substr(11, 8);
                })
                .catch(error => console.error(error))
        });
        li3.appendChild(btnRepository);
        list.appendChild(li3);

        console.log(data)
    })
    .catch(error => console.error(error));

