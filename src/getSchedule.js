const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

//  function getSchedule(scheduleTarget) {
// }

//  início de resolução um

const exhibition = (parametro) => {
  const animalsOfTheDay = data.species.filter((elemento) => elemento
    .availability.some((elemento1) => elemento1 === parametro)).map((elemento2) => elemento2.name);

  if (parametro === 'Monday') {
    return 'The zoo will be closed!';
  }
  return animalsOfTheDay;
};

// const officeHour = (param) => {
//   if (param === undefined) {
//   const daysOfTheWeek = Object.keys(hours);
//   let objeto = {};
//   daysOfTheWeek.forEach((elemento) => objeto[elemento] = { officeHour: `Open from ${hours[elemento].open}am until ${hours[elemento].close}pm`, exhibition: `${exhibition(elemento)}`});
//   objeto.map((elemento) => elemento.officeHour === 'Open from 0am untill 0am' ? objeto.officeHour = 'CLOSED' : elemento.officeHour)
//   return objeto
//   }
//   }

// Resolução 2

function getSchedule(param) {
  // teste 1 se for passado um animal, deverá retornar um array com os dias em que ele está em exibição'
  const animalNames = data.species.map((elemento) => elemento.name);
  if (animalNames.some((elemento) => elemento === param)) {
    return data.species.find((elemento) => elemento.name === param).availability;
  }
  // teste 2 'sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis'
  if (param === undefined) {
    const daysOfTheWeek = Object.keys(hours);
    const objeto = {};
    daysOfTheWeek.forEach((e) => {
      objeto[e] = { officeHour: `Open from ${hours[e].open}am until ${hours[e].close}pm`,
        exhibition: exhibition(e) };
    });
    return objeto
  }
}

console.log(getSchedule());
module.exports = getSchedule;
