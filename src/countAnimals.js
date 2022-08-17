const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const countAnimals = (animal) => species.find((especie) => especie.name === animal.specie).residents.filter((sexo) => sexo.sex === animal.sex).length;

const countAnimals = (animal) => {
  // const totalNumber = species.find((especie) => especie.name === animal.specie).residents.length;
  // const sexNumber = species.find((especie) => especie.name === animal.specie).residents.filter((sexo) => sexo.sex === animal.sex).length;
  // const allAnimals = species.map((elemento) => `${elemento.name} ${elemento.residents.length}`);
  if (animal === undefined) {
    // const nome = species.reduce((elemento) => ({ [elemento.name]: elemento.residents.length }));
    const nome = species.map((elemento) => ({ [elemento.name]: elemento.residents.length }));
    return Object.assign({}, ...nome);
    // reduce
  } if (Object.keys(animal).length === 1) {
    return species.find((especie) => especie.name === animal.specie).residents.length;
  } if (Object.keys(animal).length === 2) {
    return species.find((especie) => especie.name === animal.specie)
      .residents.filter((sexo) => sexo.sex === animal.sex).length;
  }
};

console.log(countAnimals());
module.exports = countAnimals;

// console.log(countAnimals({ specie: 'bears', sex: 'female' }))
