document.getElementById('submitButton').addEventListener('click', function() {
    let name = document.getElementById('name').value.trim();
    let password = document.getElementById('password').value.trim();

    if (name === '' || password === '') {
        alert('Заполни поля!');
        return;
    }

    let form = new XMLHttpRequest();
    form.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    form.setRequestHeader('Content-Type', 'application/json');
    form.onload = function() {
        if (form.status === 201) {
            alert('Отправлено');
        } else {
            alert('ОШИБКА!!!!');
        }
    };
  
    form.send(JSON.stringify({ name: name, password: password }));
});



