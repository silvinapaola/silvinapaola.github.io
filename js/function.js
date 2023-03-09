const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", function() {
  // Si el body tiene la clase "dark-theme", cambia a tema claro, y viceversa
  body.classList.toggle("dark-theme");
});



var titulo = document.getElementById("titulo");
var opacidad = 0;
var intervalo = setInterval(function() {
  if (opacidad < 1) {
    opacidad += 0.1;
    titulo.style.opacity = opacidad;
  } else {
    clearInterval(intervalo);
  }
}, 100);