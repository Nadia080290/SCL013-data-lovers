
// Función filtrar por Ocupacion
const filtroPorOcupacion = (rol, POTTER) => { // Se crea una funcion donde establecemos dos parametros (1. La seleccion del Usuario, 2. La data).
  return POTTER.filter((e) => e[rol]); // Se le aplica el metodo Filter y se retorna el filtro establecido.

};

// Función filtrar por Casa
const filtroPorCasas = (casa, POTTER) => { // Se crea una funcion donde establecemos dos parametros (1. La seleccion del Usuario, 2. La data).
  const filtraCasa = POTTER.filter((e) => e.house === casa); // Se crea una variable donde se guarda la aplicacion del metodo filter para crear un nuevo a
  return filtraCasa; // Se retorna los datos de los personajes filtrados por casa en un nuevo array.
};

// Función filtrar por Genero
const filtroPorGenero = (genero, POTTER) => { // Se crea una funcion donde establecemos dos parametros (1. La seleccion del Usuario, 2. La data).
  const filtraGenero = POTTER.filter((e) => e.gender === genero); // Se crea una variable donde se guarda la aplicacion del metodo filter, el atributo debe ser igual a la seleccion del usuario.
  return filtraGenero; // Se retorna los datos de los personajes filtrados por genero que cumplan con la condición requerida.
};

// Función filtrar por orden alfabetico
const ordenarAscendente = (POTTER) => POTTER.sort((a, b) => { // Se crea un a función donde se aplica el metodo sort en el que establecemos 2 parametros
  if (a.name > b.name) { // se indica si a>b la función ordena el array de modo ascendente.

    return 1;
  }
  return -1; 
});

//BUSCADOR

const buscador = (data, buscame) => { //Se crea función con dos parametros (data y la busqueda del usuario)
  return data.filter((obj) => obj.name.toLowerCase().startsWith(buscame)); // Se aplica el metodo de filter, tolowerCase (toma en cuenta las busquedas en minusculas), startsWith (para ir comparando un string inicia con los caracteres de otro string,)
};

//Filtrar por Especies.
export const filterEspecie = (especie, POTTER) => { // Se crea y exporta una funcion donde establecemos dos parametros (1. La seleccion del Usuario, 2. La data).
  const especieFiltrada = POTTER.filter((e) => e.species === especie); // Se crea una variable donde se guarda la aplicacion del metodo filter, el atributo debe ser igual a la seleccion del usuario.
  return especieFiltrada; // Se retorna los datos de los personajes filtrados por Especie.

};

export {buscador, ordenarAscendente, filtroPorGenero, filtroPorCasas, filtroPorOcupacion}




