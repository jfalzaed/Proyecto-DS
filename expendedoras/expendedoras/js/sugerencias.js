const sugerenciasForm = document.querySelector('#sugerenciasForm');
const downloadLink = document.querySelector('#download-link');

const sugerencias = JSON.parse(localStorage.getItem('sugerencias')) || []

let txtContent = '';

sugerencias.forEach((sugerencia, index) => {
    txtContent += `Sugerencia ${index + 1}:\n`;
    txtContent += `Nombre: ${sugerencia.nombre}\n`;
    txtContent += `Correo: ${sugerencia.correo}\n`;
    txtContent += `Comentario: ${sugerencia.comentario}\n\n`;
  });


const blob = new Blob([txtContent], { type: 'text/plain' });

downloadLink.href = window.URL.createObjectURL(blob);



sugerenciasForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value
    const correo = document.querySelector('#correo').value
    const comentario = document.querySelector('#comentario').value

    const sugerencias = JSON.parse(localStorage.getItem('sugerencias')) || []



    sugerencias.push({nombre: nombre, correo: correo, comentario: comentario})
    localStorage.setItem('sugerencias', JSON.stringify(sugerencias))
    alert('Sugerencia enviada con éxito')

})
