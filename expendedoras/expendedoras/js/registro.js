const singupForm = document.querySelector('#signup-form')
singupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value
    const email = document.querySelector('#correo').value
    const password = document.querySelector('#contrasena').value

    const users = JSON.parse(localStorage.getItem('users')) || []

    const isRegistered = users.find(user => user.email === email)

    if (isRegistered) {
        
        return alert('El correo ya existe')
    }

    users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(users))
    alert('Usuario registrado con éxito')
    window.location.href = 'inicio.html'
})