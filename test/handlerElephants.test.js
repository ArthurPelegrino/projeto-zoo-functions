const handlerElephants = require('../src/handlerElephants');
//  teste

describe('Testes da função HandlerElephants', () => {
  it('ao receber o argumento "count" retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('ao receber o argumento "names" ', () => {
    expect(handlerElephants('names')).toContain('Ilana', 'Orval', 'Bea', 'Jefferson');
  });
  it('ao receber o argumento "location retorna a localização', () => {
    expect(handlerElephants('location')).toMatch('NW');
  });
  it('ao receber o argumento "popularity" retorna a população', () => {
    expect(handlerElephants('popularity')).toBeClosedTo(5);
  });
  it('ao receber o argumento "avaialability" retorna a disponibilidade', () => {
    expect(handlerElephants('avaiability')).toContain('Friday', 'Saturday', 'Sunday', 'Tuesday');
  });
  it('caso a função não receba parametro deve retornar "undefined"', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('para o argumento avarageAge deve retornar "10.5"', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('para o argumento diferente de string deve retornar "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(!String)).toMatch('Parâmetro inválido, é necessário uma string');
  });
  it('teste', () => {
    expect(handlerElephants()).toEqual({
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
