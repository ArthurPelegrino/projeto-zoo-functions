const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

//  function getSchedule(scheduleTarget) {
// }

//  Dias da semana e animais guardados em const;

const closed = 'The zoo will be closed!';
const days = Object.keys(hours);
const zooAnimals = data.species.map((elemento) => elemento.name);
//  Função para trazer dia de cada animal

const exhibition = (parametro) => {
  const animalsOfTheDay = data.species.filter((elemento) => elemento
    .availability.some((elemento1) => elemento1 === parametro)).map((elemento2) => elemento2.name);

  if (parametro === 'Monday') {
    return closed;
  }
  return animalsOfTheDay;
};

// Função primeiro if
const primeiroIf = () => {
  const daysOfTheWeek = Object.keys(hours);
  const objeto = {};
  daysOfTheWeek.forEach((e) => {
    if (e === 'Monday') {
      objeto[e] = { officeHour: 'CLOSED', exhibition: closed };
    } else {
      objeto[e] = {
        officeHour: `Open from ${hours[e].open}am until ${hours[e].close}pm`,
        exhibition: exhibition(e),
      };
    }
  });
  return objeto;
};

// Função else
const lastFunction = (param) => {
  const daysOfTheWeek = Object.keys(hours);
  const objeto = {};
  const myDay = daysOfTheWeek.find((elemento) => elemento === param);
  objeto[myDay] = {
    officeHour: `Open from ${hours[myDay].open}am until ${hours[myDay].close}pm`,
    exhibition: exhibition(myDay),
  };
  return objeto;
};
// Resolução 2

function getSchedule(param) {
  if (param === 'Monday') {
    const obj = {};
    obj[param] = { officeHour: 'CLOSED', exhibition: closed };
    return obj;
  }
  const animalNames = data.species.map((elemento) => elemento.name);
  if (animalNames.some((elemento) => elemento === param)) {
    return data.species.find((elemento) => elemento.name === param).availability;
  }
  if (days.every((elemento) => elemento !== param)
    && zooAnimals.every((elemento) => elemento !== param)) {
    return primeiroIf();
  }
  return lastFunction(param);
}

console.log(getSchedule('Wednesday'));
module.exports = getSchedule;
