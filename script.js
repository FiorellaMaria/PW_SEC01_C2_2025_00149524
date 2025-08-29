function cambiarTitulo() {
  const titulos = [
    "HTML & CSS: Curso practico avanzado",
    "Autor del libro: Sergio Luján Mora",
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

document.getElementById('cambio-orden-parrafos').onclick = ordenarParrafos;

function agregarImagen() {
  const aside = document.querySelector('aside');
  // Evita agregar la imagen más de una vez
  if (document.getElementById('portada-libro')) return;

  const img = document.createElement('img');
  img.id = 'portada-libro';
  img.src = './imagen/portada.jpg';
  img.style.display = 'block';
  img.style.margin = '20px auto';
  img.style.width = '180px';
  img.style.height = 'auto';
  img.style.borderRadius = '8px';

  aside.appendChild(img);
}

document.getElementById('agregar-imagen').onclick = agregarImagen;