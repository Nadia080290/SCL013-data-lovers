
const filtroPorOcupacion = (rol, POTTER) => POTTER.filter((e) => e[rol]);
// FILTRO PARA ROLES

const filtroPorCasas = (casa, POTTER) => {
  const filtraCasa = POTTER.filter((e) => e.house === casa);
  return filtraCasa;
};

const filtroPorGenero = (genero, POTTER) => {
  const filtraGenero = POTTER.filter((e) => e.gender === genero);
  return filtraGenero;
};

const ordenarAscendente = (POTTER) => POTTER.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
});

const buscador = (data, buscame) => {
  console.log(buscame);
  return data.filter((obj) => obj.name.toLowerCase().startsWith(buscame));
};

export {filtroPorOcupacion,filtroPorCasas, filtroPorGenero, ordenarAscendente, buscador, filtroPorEspecie
};


const filtroPorEspecie= (especie, POTTER) => {
  const filtraEspecie = POTTER.filter((e) => e.species === especie);
  return filtraEspecie;
};