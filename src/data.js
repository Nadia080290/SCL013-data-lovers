const reestablecerCajitaImagenes = () => {
  const cajaImagenes = document.querySelector('#arrPotter');
  const cajavaritas = document.querySelector('#insertWands');
  cajavaritas.classList.add('hide');
  cajaImagenes.classList.remove('hide');
}
const filtroPorOcupacion = (rol, POTTER) => {
  reestablecerCajitaImagenes();
  return POTTER.filter((e) => e[rol]);
};
// FILTRO PARA ROLES

const filtroPorCasas = (casa, POTTER) => {
  reestablecerCajitaImagenes();
  const filtraCasa = POTTER.filter((e) => e.house === casa);
  return filtraCasa;
};

const filtroPorGenero = (genero, POTTER) => {
  reestablecerCajitaImagenes();
  const filtraGenero = POTTER.filter((e) => e.gender === genero);
  return filtraGenero;
};


//Filtrar por Especies.
export const filterEspecie = (especie, POTTER) => {
  const especieFiltrada = POTTER.filter((e) => e.species === especie);
  console.log(especieFiltrada);
  
  return especieFiltrada;
};


const ordenarAscendente = (POTTER) => POTTER.sort((a, b) => {
  reestablecerCajitaImagenes();
  if (a.name > b.name) {
    return 1;
  }
  return -1;
});

//BUSCADOR
const buscador = (data, buscame) => {
  reestablecerCajitaImagenes();
  console.log(buscame);
  return data.filter((obj) => obj.name.toLowerCase().startsWith(buscame));
};

//Filtrar por Especies.
export const filterEspecie = (especie, POTTER) => {
  reestablecerCajitaImagenes();
  const especieFiltrada = POTTER.filter((e) => e.species === especie);
  console.log(especieFiltrada);
  return especieFiltrada;
};

export {filtroPorOcupacion,filtroPorCasas, filtroPorGenero, ordenarAscendente, buscador
};

export const filterWands = (array) => {
  const arrayWands = [...array]; 
  console.log(array);
  const filtered = array.map((obj) => { // Data filtrada
    return { name: obj.name, wand: obj.wand, image: obj.image}
  });
  console.log(filtered);
  return filtered;
  // obj.wand.wood !== '' || obj.wand.core !== '' || obj.wand.length !== '');
};




