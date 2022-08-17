const data = require('../data/zoo_data');

const findSpecies = (responsibleFor) => responsibleFor
  .map((elemento) => data.species.find((especie) => especie.id === elemento).name);

function getEmployeesCoverage(param) {
  if (param === undefined) {
    return data.employees.map((elemento) => ({
      id: elemento.id,
      fullName: `${elemento.firstName}, ${elemento.lastName}`,
      species: findSpecies(elemento.responsibleFor),
    }));
  }

  //  retornando undefined, tentativa de encontrar a pessoa por nome passado para o parametro pra pegar as infos
  if (Object.keys(param).includes('name')) {
    // const parametro = Object.values(param).toString();
    // console.log('parametro', parametro)
    const nome = data.employees.find((elemento) => elemento.firstName === param.name);
    return nome;
  }
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
