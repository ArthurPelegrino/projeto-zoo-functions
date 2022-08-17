// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const todosOsNomes = data.employees.map((elemento) => elemento.firstName);
const todosOsSobreNomes = data.employees.map((elemento) => elemento.lastName);
const todosOsId = data.employees.map((elemento) => elemento.id);
const fullName = [...todosOsNomes, ...todosOsSobreNomes];
console.log(fullName);

const findSpecies = (responsibleFor) => responsibleFor
  .map((elemento) => data.species.find((especie) => especie.id === elemento).name);

const location = (param) => param.map((elemento) => data.species
  .find((especie) => especie.id === elemento).location);

// Função do exc

const firstFunction = () => data.employees.map((empregados) => ({
  id: empregados.id,
  fullName: `${empregados.firstName} ${empregados.lastName}`,
  species: findSpecies(empregados.responsibleFor),
  locations: location(empregados.responsibleFor),
}));

const seccondFunction = (param) => {
  const empregado = data.employees
    .find((elemento) => elemento.firstName === param || elemento.lastName === param);
  return {
    id: empregado.id,
    fullName: `${empregado.firstName} ${empregado.lastName}`,
    species: findSpecies(empregado.responsibleFor),
    locations: location(empregado.responsibleFor),
  };
};

const thirdFunction = (param) => {
  const empregado = data.employees.find((elemento) => elemento.id === param);
  return {
    id: empregado.id,
    fullName: `${empregado.firstName} ${empregado.lastName}`,
    species: findSpecies(empregado.responsibleFor),
    locations: location(empregado.responsibleFor),
  };
};

function getEmployeesCoverage(param) {
  if (param === undefined) {
    return firstFunction();
  }
  //  tentativa de encontrar a pessoa por nome passado para o parametro pra pegar as infos
  if (fullName.includes(param.name)) {
    return seccondFunction(param.name);
  }
  if (todosOsId.includes(param.id)) {
    return thirdFunction(param.id);
  }
  throw new Error('Informações inválidas');
}
// const fullName = data.employees.map((elemento))
// elemento.firstName === param.name);
// return data.employees.filter((elemento) => elemento.firstName === nome.firstName).map((elemento) => elemento.id);
// }

// }
console.log(getEmployeesCoverage({ name: 'Nelson' }));

module.exports = getEmployeesCoverage;
