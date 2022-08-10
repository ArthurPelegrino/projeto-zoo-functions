const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(param) {
  const finalNumbers = { child: 0, adult: 0, senior: 0 };
  finalNumbers.child = param.filter((elemento) => elemento.age < 18).length;
  finalNumbers.adult = param.filter((elemento) => elemento.age >= 17 && elemento.age < 50).length;
  finalNumbers.senior = param.filter((elemento) => elemento.age >= 50).length;
  return finalNumbers;
}

function calculateEntry(param) {
  if (param === undefined || param.length === undefined) {
    return 0;
  }
  let total = 0;
  const pagantes = countEntrants(param);
  total += (pagantes.child * data.prices.child)
  + (pagantes.adult * data.prices.adult) + (pagantes.senior * data.prices.senior);
  return total;
}

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
