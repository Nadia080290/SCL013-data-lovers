/*import { example, anotherExample } from '../src/data.js';*/
/*import POTTER from './data/potter/potter.js';*/
import {filtroPorCasas, filtroPorGenero,filterEspecie,filtroPorOcupacion,ordenarAscendente /*buscador, */} from '../src/data.js';

describe('filtroPorCasas', () => {
  test('is a function', () => {
    expect(typeof filtroPorCasas).toBe('function');
  });

  test('Deberia devolver output al recibir data', () => {
      const data = [
        {
          name: "Harry Potter",
          house: "Gryffindor"
        },
        {
          name: "Draco Malfoy",
          house: "Slytherin"
        },
        {
          name: "Severus Snape",
          house: "Slytherin"
        },
        {
          name: "Cedric Diggory",
          house: "Hufflepuff"
        }
      ];


      const output = [
        {
          name: "Draco Malfoy",
          house: "Slytherin"
        },
        {
          name: "Severus Snape",
          house: "Slytherin"
        }
      
      ];
      

    expect(filtroPorCasas("Slytherin", data)).toEqual(output);
  });
});

describe('filtroPorGenero', () => {
  test('is a function', () => {
    expect(typeof filtroPorGenero).toBe('function');
  });

  test('Deberqia devolver output al recibir data', () => {
      const data = [
        {
          name: "Harry Potter",
          gender: "Masculino"
        },
        {
          name: "Hermione Granger",
          gender: "Femenino"
        },
        {
          name: "Severus Snape",
          gender: "Masculino"
        },
        {
          name: "Cedric Diggory",
          gender: "Masculino"
        }
      ];


      const output = [
        {
          name: "Hermione Granger",
          gender: "Femenino"
        }
      
      ];
      

    expect(filtroPorGenero("Femenino", data)).toEqual(output);
  });
});

describe('filterEspecie', () => {
  test('is a function', () => {
    expect(typeof filterEspecie).toBe('function');
  });

  test('Deberqia devolver output al recibir data', () => {
      const data = [
        {
          name: "Harry Potter",
          species: "Humano"
        },
        {
          name: "Hermione Granger",
          species: "Humano"
        },
        {
          name: "Severus Snape",
          species: "Humano"
        },
        {
          name: "Cedric Diggory",
          species: "Humano"
        },
        {
          name: "Mrs Norris",
          species: "cat",
        }
      ];

      const output = [
        {
          name: "Mrs Norris",
          species: "cat",
        }
      ];
      
    expect(filterEspecie("cat", data)).toEqual(output);
  });
});

describe('filtroPorOcupacion', () => {
  test('is a function', () => {
    expect(typeof filtroPorOcupacion).toBe('function');
  });
});
  /*test('Deberqia devolver output al recibir data', () => {
      const data = [
        {
          name: "Harry Potter",
          hogwartsStudent: true,
          hogwartsStaff: false,
        },
        {
          name: "Hermione Granger",
          hogwartsStudent: true,
          hogwartsStaff: false,
        },
        {
          name: "Severus Snape",
          hogwartsStudent: false,
          hogwartsStaff: true,
        },
        {
          name: "Cedric Diggory",
          hogwartsStudent: true,
          hogwartsStaff: false,
        },
        {
          name: "Mrs Norris",
          hogwartsStudent: false,
          hogwartsStaff: true,
        }
      ];

      const output = [
        {
          name: "Mrs Norris",
          hogwartsStudent: false,
          hogwartsStaff: true,
        }
      ];
      
    expect(filtroPorOcupacion("true", data)).toEqual(output);
  });
});*/
describe('ordenarAscendente', () => {
  test('is a function', () => {
    expect(typeof ordenarAscendente).toBe('function');
  });

  it ('Deberqia devolver output al recibir data', () => {
      const data = [
        {
          name: "Harry Potter",
        
        },
        {
          name: "Hermione Granger",
   
        },
        {
          name: "Severus Snape",
     
        },
        {
          name: "Cedric Diggory",
        
        },
        {
          name: "Mrs Norris",
        }
      ];

      const outputascendente = [
        {
          name: "Cedric Diggory",
        },
        {
          name: "Harry Potter",
        },
        {
          name: "Hermione Granger",
        },
        {
          name: "Mrs Norris",
        },
        {
          name: "Severus Snape",
        },
      ];
      
    expect(ordenarAscendente(data))===(outputascendente);
  });
});

