function getSchedule(param) {
    // teste 4, informar que está fechado quando o parametro for 'monday'
    if (param === 'Monday') {
      const obj = {};
      obj[param] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }
      return obj;
    }  if (days.find((elemento) => elemento === param)) {
      return days.find((elemento) => elemento === param).open
    }
    const animalNames = data.species.map((elemento) => elemento.name);
    if (animalNames.some((elemento) => elemento === param)) {
      return data.species.find((elemento) => elemento.name === param).availability;
    }
    if (days.every((elemento) => elemento !== param) && zooAnimals.every((elemento) => elemento !== param)) {
      const daysOfTheWeek = Object.keys(hours);
      const objeto = {};
      daysOfTheWeek.forEach((e) => { e === 'Monday' ? objeto[e] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } :
        objeto[e] = { officeHour:`Open from ${hours[e].open}am until ${hours[e].close}pm`,
          exhibition: exhibition(e) };
      });
      return objeto;
      }
      const daysOfTheWeek = Object.keys(hours);
      const objeto = {}
      myDay = daysOfTheWeek.find((elemento) => elemento === param);
      objeto[myDay] = {
        officeHour: `Open from ${hours[myDay].open}am until ${hours[myDay].close}pm`,
        exhibition: exhibition(myDay)
      }
      return objeto
    }

function refatorando(param) {
    const objeto = {};
    param === 'Monday' ? objeto[param] = { officeHour: 'CLOSED', exhibition: 'Te zoo will be closed!'} :
    days.find((elemento) => elemento === param) ? days.find((elemento1) => elemento1 === param).open :
     'error'
}

console.log(refatorando('monday'))