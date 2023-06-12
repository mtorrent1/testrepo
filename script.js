// Obtener una referencia al elemento de botón de cambio de tema
const themeButton = document.getElementById('theme-button');

// Obtener una referencia al elemento de cuerpo (body)
const body = document.body;

// Función para cambiar el tema
function toggleTheme() {
  // Agregar o remover la clase 'dark-theme' al cuerpo según el estado actual
  body.classList.toggle('dark-theme');
}

// Agregar un event listener al botón de cambio de tema
themeButton.addEventListener('click', toggleTheme);