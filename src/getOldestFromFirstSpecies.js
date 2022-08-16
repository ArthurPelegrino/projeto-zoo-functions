const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalId = data.employees.find((elemento) => elemento.id === id).responsibleFor[0];
  const especie = species.find((elemento) => elemento.id === animalId);
  const final = especie.residents.reduce((atual, testando) => (atual
    .age > testando.age ? atual : testando));
  const resultado = Object.values(final);
  return resultado;
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
