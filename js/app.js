// Variables
const carrito = document.querySelector('#carrito');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCArrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEveventListeners();

function cargarEveventListeners() {
//   Cuando agregas un curso presionando "Agregar al carrito"
listaCursos.addEventListener('click', agregarCurso);
}

// Funciones
function agregarCurso(e) {
  e.preventDefault();

  if(e.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso.

function leerDatosCurso(curso){
console.log(curso);

// Crea un objeto con el contenido del curso actual.
const infoCurso = {
  imagen: curso.querySelector('img').src,
  titulo: curso.querySelector('h4').texContent,
  precio: curso.querySelector('.precio span').texContent,
  id: curso.querySelector('a').getAttribute('data-id'),
  cantidad: 1
}
console.log(infoCurso);
}


