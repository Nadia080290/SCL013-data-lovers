
import data from './../data/potter/potter.js';
import POTTER from './data/potter/potter.js';
import {filtroPorOcupacion,filtroPorCasas, filtroPorGenero, ordenarAscendente, buscador,filterEspecie, filterWands} from './data.js';

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

const alternLogoMenu = document.querySelector('.alternLogoMenu');

// Función para volver al inicio haciendo click en logo alterno del Menú
alternLogoMenu.addEventListener('click', () => {
  window.location.reload();
});


//tarjetas personajes info completa.
const generarTemplateString = (data) => {
  let templateString = '';
  data.forEach((obj) => {
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

cajaImagenes.innerHTML = generarTemplateString(POTTER);

cajaOcupacion.addEventListener('click', (event) => {
  const ocupacionCapturada = event.target.id;
  cajaImagenes.innerHTML = generarTemplateString(filtroPorOcupacion(ocupacionCapturada, POTTER));
});

cajaCasas.addEventListener('click', (event) => {
  const casaCapturada = event.target.id;
  cajaImagenes.innerHTML = generarTemplateString(filtroPorCasas(casaCapturada, POTTER));
});

cajaGenero.addEventListener('click', (event) => {
  const generoCapturada = event.target.id;
  cajaImagenes.innerHTML = generarTemplateString(filtroPorGenero(generoCapturada, POTTER));
});

btnBienvenida.addEventListener('click', () => {
  portada.classList.add('hide');
  headerView.classList.remove('hide');
  cajaImagenes.classList.remove('hide');
  menuHamburguesa.classList.remove('hide');
  
});

ordenando.addEventListener('click', (event) => {
  if (event.target.id === 'a') {
    cajaImagenes.innerHTML = generarTemplateString(ordenarAscendente(POTTER));
  } else {
    cajaImagenes.innerHTML = generarTemplateString(ordenarAscendente(POTTER).reverse());
  }
});

// BUSCADOR
const porNombre = document.getElementById('buscarData');
porNombre.addEventListener('input', (event) => {
  cajaImagenes.innerHTML = generarTemplateString(buscador(POTTER, event.target.value));
});

//Ordenar por especies
cajaEspecies.addEventListener('click', (event) => {
  const especieCapturada = event.target.id;
  cajaImagenes.innerHTML = generarTemplateString(filterEspecie(especieCapturada, POTTER));
});


// Función que crea cards mostrando descripción de varitas
const cajaVaritasHarry = (data) => {
  // console.log(data);
  let templatePotter = '';
  data.forEach((obj) => {
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

opcionVarita.addEventListener('click', (event) => {
  cajaImagenes.classList.add('hide');
  cajavaritas.classList.remove('hide');
  cajavaritas.innerHTML = cajaVaritasHarry(POTTER);
});


  
  
