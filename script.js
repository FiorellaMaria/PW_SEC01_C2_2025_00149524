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

function cambiarSubtitulo() {
    const subtitulo = document.querySelector('#descripcion-libro h3');
  const estilos = [
    { fontFamily: 'Verdana, sans-serif', color: 'green' },
    { fontFamily: 'Times New Roman, serif', color: 'blue' }
  ];
  const boton = document.getElementById('cambio-subtitulo');
  if (boton.indice === undefined) boton.indice = 0;
  const estilo = estilos[boton.indice];
  subtitulo.style.fontFamily = estilo.fontFamily;
  subtitulo.style.color = estilo.color;
  boton.indice = (boton.indice + 1) % estilos.length;
}

document.getElementById('cambio-subtitulo').onclick = cambiarSubtitulo;

function ordenarParrafos() {
  const textoLibro = document.getElementById('texto_libro');
  textoLibro.style.display = 'flex';
  textoLibro.style.flexDirection = 'column';
  textoLibro.style.gap = '1em';
}

document.getElementById('cambio-orden-parafos').onclick = ordenarParrafos;