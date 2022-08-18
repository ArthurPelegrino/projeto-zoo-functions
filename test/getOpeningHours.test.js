const getOpeningHours = require('../src/getOpeningHours');

const fechado = 'The zoo is closed';
const aberto = 'The zoo is open';

describe('Testes da função HandlerElephants', () => {
  it('ao receber parametro "Monday" e "9am" ', () => {
    expect(getOpeningHours('Monday', '9:00-AM')).toMatch(fechado);
  });
  it('ao receber parametro "Tuesday" e "9am" ', () => {
    expect(getOpeningHours('Tuesday', '9:00-AM')).toMatch(aberto);
  });
  it('ao receber parametro "Wednesday" e "9pm" ', () => {
    expect(getOpeningHours('Wednesday', '9:00-PM')).toMatch(fechado);
  });
  it('ao receber parametro "Thu" e "9pm" ', () => {
    expect(getOpeningHours('Thu', '9:00-PM')).toMatch(/^The day must be valid. Example: Monday$/);
  });
  it('ao receber parametro "Friday" e "9pm" ', () => {
    expect(getOpeningHours('Friday', '9:00-ZM')).toMatch(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  it('ao receber parametro "Saturday" e "9pm" ', () => {
    expect(getOpeningHours('Saturday', 'C9:00-AM')).toMatch('The hour should represent a number');
  });
  it('ao receber parametro "Sunday" e "9pm" ', () => {
    expect(getOpeningHours('Sunday', '9:00-PM')).toMatch('TThe minutes should represent a number');
  });
  it('ao receber parametro "Wednesday" e "00:100PM" ', () => {
    expect(getOpeningHours('Wednesday', '100:00-PM')).toMatch('The hour must be between 0 and 12');
  });
  it('ao receber parametro "Wednesday" e "00:100PM" ', () => {
    expect(getOpeningHours('Wednesday', '00:100-PM')).toMatch('The hour must be between 0 and 12');
  });
  it('retorna todos se não receber argumento', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
});
