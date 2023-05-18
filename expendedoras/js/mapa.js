const busquedaForm = document.querySelector('#busquedaForm');
const circleImage = document.querySelector('#circle-image');

busquedaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const bloque = document.querySelector('#bloque').value

    const blockLocations = {
        "29":[1040,610], 
        "Biblioteca": [1229, 530],
        "34": [1130, 485],
        "33": [1089, 510],
        "26":[866,605],
        "27":[965,555],
        "38":[1304,464],
        "30":[1030,530],
        "35": [1171, 464],
        "14":[658,812],
        "18":[823,677],
        "19":[473,777],
        "ping pong":[990,760],
    }

    const coordinates = blockLocations[bloque];

    if (coordinates) {
        // Establecer la posición absoluta del círculo
        circleImage.style.position = 'absolute';
        circleImage.style.left = coordinates[0] + 'px';
        circleImage.style.top = coordinates[1] + 'px';
      
        // Agregar el círculo al contenedor del mapa
        const mapContainer = document.querySelector('#map-container');
        mapContainer.appendChild(circleImage);
      } else {
        console.log('No se encontraron coordenadas para el bloque especificado');
      }
});