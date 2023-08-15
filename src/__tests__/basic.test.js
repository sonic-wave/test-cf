import healthStatus from '../healthState';

test('green HP bar test', () => {
  const character = {
    name: 'Маг',
    health: 90,
  };
  const result = healthStatus(character);
  expect(result).toBe('healthy');
});

test('yellow HP bar test', () => {
  const character = {
    name: 'Маг',
    health: 50,
  };
  const result = healthStatus(character);
  expect(result).toBe('wounded');
});

test('red HP bar test', () => {
  const character = {
    name: 'Маг',
    health: 13,
  };
  const result = healthStatus(character);
  expect(result).toBe('critical');
});
