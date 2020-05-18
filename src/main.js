import POTTER from './data/potter/potter.js';
import {filtroPorOcupacion,filtroPorCasas, filtroPorGenero, ordenarAscendente, buscador, filterEspecie} from './data.js'; // Se importa las funciones desde main.js.
// Se crean variables llamando a los id.
const cajaImagenes = document.querySelector('#arrPotter');
const cajaOcupacion = document.querySelector('#ocupacion');
const cajaCasas = document.querySelector('#casas');
const cajaGenero = document.querySelector('#genero');
const btnBienvenida = document.querySelector('#btn-bienvenida');
const portada = document.querySelector('#vista-uno');
const headerView = document.querySelector('#nav');
const ordenando = document.querySelector('#ordenar');
const menuHamburguesa = document.querySelector("#hab");
const cajaEspecies = document.querySelector('#ordenarEspecie');
const cajavaritas = document.querySelector('#insertWands');
const opcionVarita = document.querySelector('#varitas');
const porNombre = document.getElementById('buscarData'); 
const alternLogoMenu = document.querySelector('.alternLogoMenu');

// Función para volver al inicio haciendo click en logo alterno del Menú
alternLogoMenu.addEventListener('click', () => {
  window.location.reload();
});


//tarjetas personajes info completa.
const generarTemplateString = (data) => {
  let templateString = ''; // Se crea variable vacia para sacar valor del forEach
  data.forEach((obj) => { // Se realiza for que recorra la data.
    templateString += ` 
    <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img class="mi-imagen" src="${obj.image}"/>
        <h2 class="fontNameCharacter">${obj.name}</h2>
      </div>
      <div class="flip-card-back">
        <div class="box">
        <h1>${obj.name}</h1>
          <p><strong>Especie:</strong> ${obj.species}</p>
          <p><strong>Género:</strong> ${obj.gender}</p>
          <p><strong>Casa:</strong> ${obj.house}</p>
          <p><strong>Ansestro:</strong> ${obj.ancestry}</p>
          <p><strong>Varita:</strong> <img src="../src/image/wand.png" alt=""><br>
          <strong>Madera:</strong> ${obj.wand.wood}<br>
          <strong>Núcleo:</strong> ${obj.wand.core}<br>
          <strong>Longitud:</strong>${obj.wand.length}</p>
          <p><strong>Patronus:</strong> ${obj.patronus}</p>
          <p><strong>Actor:</strong> ${obj.actor}</p>
          <p><strong>Vivo</strong>: ${obj.alive}</p>
        </div>
      </div>
    </div>
  </div>`;
  });
  return templateString;
};
// Se imprime en enconsola las tarjetas de los personajes.
cajaImagenes.innerHTML = generarTemplateString(POTTER);

cajaOcupacion.addEventListener('click', (event) => { // Se realiza evento que se ejecute con click, cuando el usuario seleccione una de las opciones de Ocupacion
  const ocupacionCapturada = event.target.id; //Se guarda la seleccion del usuario.
  cajaImagenes.innerHTML = generarTemplateString(filtroPorOcupacion(ocupacionCapturada, POTTER)); //Se imprime en pagina las nuevas cartas filtrada por Ocupacion. 
  reestablecerCajitaImagenes(); // se llama a la funcion de esconder cartas de varitas.
});

cajaCasas.addEventListener('click', (event) => { //Se realiza evento para activar el filtro por Casas.
  const casaCapturada = event.target.id; //Se guarda la seleccion del usuario.
  cajaImagenes.innerHTML = generarTemplateString(filtroPorCasas(casaCapturada, POTTER)); //Se imprime en la pagina las nuevas cartas filtrada por Casas.
  reestablecerCajitaImagenes(); // se llama a la funcion de esconder cartas de varitas.
});

cajaGenero.addEventListener('click', (event) => { //Se realiza evento que activa el filtro por Genero
  const generoCapturada = event.target.id; //Se guarda la seleccion del usuario.
  cajaImagenes.innerHTML = generarTemplateString(filtroPorGenero(generoCapturada, POTTER)); //Se imprime en la pagina las nuevas cartas filtrada por Genero.
  reestablecerCajitaImagenes(); // se llama a la funcion de esconder cartas de varitas.
});

//Ordenar por especies
cajaEspecies.addEventListener('click', (event) => { //Se realiza evento que activa el filtro por Especie
  const especieCapturada = event.target.id; //Se guarda en una variable la seleccion del usuario.
  cajaImagenes.innerHTML = generarTemplateString(filterEspecie(especieCapturada, POTTER)); // Se imprime en la pagina las nuevas cartas filtrada por Especie.
  reestablecerCajitaImagenes(); // se llama a la funcion de esconder cartas de varitas.
});


//Se realiza evento que con un click se esconda la primera pagina y muestre los personajes.
btnBienvenida.addEventListener('click', () => {
  portada.classList.add('hide');
  headerView.classList.remove('hide');
  cajaImagenes.classList.remove('hide');
  menuHamburguesa.classList.remove('hide');
  
});

ordenando.addEventListener('click', (event) => { //Se realiza evento para ordenar
  if (event.target.id === 'a') { //Se indica que si la seleccion del usuario es igual a ordenar de A-Z
    cajaImagenes.innerHTML = generarTemplateString(ordenarAscendente(POTTER)); // se imprimen las cartas ordenadas por nombre de A-Z
  } else {
    cajaImagenes.innerHTML = generarTemplateString(ordenarAscendente(POTTER).reverse()); // De lo contrario se imprime las cartas ordenadas por nombre de Z-A
  }
  reestablecerCajitaImagenes(); // se llama a la funcion de esconder cartas de varitas.
});

// BUSCADOR

porNombre.addEventListener('input', (event) => { //Se realiza evento para el buscador
  cajaImagenes.innerHTML = generarTemplateString(buscador(POTTER, event.target.value)); //se imprimen cartas que el usuario busca en tiempo real.
  reestablecerCajitaImagenes(); // se llama a la funcion de esconder cartas de varitas.
});



// Función que crea cards mostrando descripción de varitas
const cajaVaritasHarry = (data) => {
  // console.log(data);
  let templatePotter = ''; // Se crea variable vacia para sacar valor del forEach
  data.forEach((obj) => { // Se realiza for que recorra la data.
    templatePotter += `
    <div class="wand-card">
      <img src="${obj.image}" alt="Image" class="wand-card-photo"/>
      <div class="wand-description">
        <h1>${obj.name}</h1>
        <li>Madera: ${obj.wand.wood}</li>
        <li>Núcleo: ${obj.wand.core}</li>
        <li>Largo: ${obj.wand.length}</li>
        <br>
        <li>Patronus: ${obj.patronus}</li>
      </div>
    </div> `;
  });
 return templatePotter;
};

opcionVarita.addEventListener('click',() => { // Se crea evento para mostrar tarjetas de varita y esconder las tarjetas de personajes.
  cajaImagenes.classList.add('hide');
  cajavaritas.classList.remove('hide');
  cajavaritas.innerHTML = cajaVaritasHarry(POTTER);
});

const reestablecerCajitaImagenes = () => { // se crea Evento para que se escondan las cartas de varita.
  cajavaritas.classList.add('hide');
  cajaImagenes.classList.remove('hide');
}
