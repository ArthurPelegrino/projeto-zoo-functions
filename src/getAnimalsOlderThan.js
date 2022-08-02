const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animaSpecies = species.find((especie) => especie.name === animal);
  return animaSpecies.residents.every((idade) => idade.age >= age);
}

console.log(getAnimalsOlderThan('lions', 11));
module.exports = getAnimalsOlderThan;
