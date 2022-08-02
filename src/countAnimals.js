const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => species
  .find((elemento) => elemento.name === animal).residents.length;
// console.log(countAnimals({ specie: 'bears', sex: 'female' }))

console.log(countAnimals('lions'));
module.exports = countAnimals;
