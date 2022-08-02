const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => data.employees
  .some((employee) => employee
    .managers.some((elemento) => elemento === id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === true) {
    const gerenciadosPor = employees.filter((employee) => employee.managers
      .find((elemento) => elemento === managerId));
    return gerenciadosPor.map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
