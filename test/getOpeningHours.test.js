const getOpeningHours = require('../src/getOpeningHours');

const fechado = 'The zoo is closed';
const aberto = 'The zoo is open'

describe('Testes da função HandlerElephants', () => {
  it('ao receber parametro "Monday" e "9am" ', () => {
    expect(getOpeningHours('Monday', '9:00-AM')).toMatch(fechado);
  });
  it('ao receber parametro "Tuesday" e "9am" ', () => {
    expect(getOpeningHours('Tuesday', '9:00-AM')).toMatch('The zoo is open');
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
});
