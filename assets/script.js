// Fichier pour le code JavaScript frontend

document.addEventListener('DOMContentLoaded', () => {
    fetch('index.php')
    .then(response => response.json())
    .then(data => {
      displayData(data.products);
      setupFilter();
    })
});
