const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species.filter((especie) => ids
  .find((myIds) => myIds === especie.id));
console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
