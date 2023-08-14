function getUserData(user) {
  const $userList = document.querySelector('#user-list');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (let i = 0; i < xhr.response.length; i++) {
      const userObject = xhr.response[i];
      const $liCreate = document.createElement('li');
      $liCreate.textContent = userObject.name;
      $userList.append($liCreate);
    }
  });
  xhr.send();
}

getUserData();
