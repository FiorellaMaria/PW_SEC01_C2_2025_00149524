function cambiarTitulo() {
  const titulos = [
    "HTML & CSS: Curso practico avanzado",
    "Examen Práctico 1 - Programación Web",
    "Bienvenido a la página del libro"
  ];
  const boton = document.getElementById('cambio-titulo');
  if (boton.indice === undefined) boton.indice = 0;
  boton.indice = (boton.indice + 1) % titulos.length;
  document.querySelector('h1').textContent = titulos[boton.indice];
}

document.getElementById('cambio-titulo').onclick = cambiarTitulo;