const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.querySelector('#correo').value
    const password = document.querySelector('#contrasena').value

    const users = JSON.parse(localStorage.getItem('users')) || []

    const isValid = users.find(user => user.email === email && user.password === password)

    if (!isValid) {
        return alert('Usuario o contraseña incorrectos')
    }

    alert('Bienvenido '+ isValid.name)
    window.location.href = 'busqueda.html'

})

    