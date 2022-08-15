const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');


const officeHour = () => {
  const daysOfTheWeek = Object.keys(hours);
  let objeto = {};
  daysOfTheWeek.forEach((elemento) => objeto[elemento] = {officeHour: `Open from ${hours[elemento].open}am until ${hours[elemento].close}pm`, exhibition: `${Object.keys(objeto).forEach}` });
  return objeto;
}
console.log(officeHour())

const exhibition = (parametro) => {
  return data.species.filter((elemento) => elemento.availability.some((dia) => dia === parametro)).map((elemento) => elemento.name)
}

console.log(exhibition('Thursday'))

// function getSchedule(scheduleTarget) {

// }

// console.log(getSchedule('elephants'))

// module.exports = getSchedule;
