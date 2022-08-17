const handlerElephants = require('../src/handlerElephants');

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
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('ao receber o argumento "availability" retorna a disponibilidade', () => {
    expect(handlerElephants('availability')).toContain('Friday', 'Saturday', 'Sunday', 'Tuesday');
  });
  it('caso a função não receba parametro deve retornar "undefined"', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('para o argumento avarageAge deve retornar "10.5"', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('para o argumento diferente de string deve retornar "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(!String)).toMatch('Parâmetro inválido, é necessário uma string');
  });
});
