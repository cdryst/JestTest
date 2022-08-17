const { add, mul, sub, div } = require('./arith');

// Given
test('2 + 3 = 5', () => {
// When
  expect(add(2, 3)).
// Then
toBe(5);
});

// Given
test('3 * 4 = 12', () => {
// When
  expect(mul(3, 4)).
// Then
toBe(12);
});

// Given
test('5 - 6 = -1', () => {
// When
  expect(sub(5, 6)).
// Then
toBe(-1);
});

// Given
test('8 / 4 = 2', () => {
// When
  expect(div(8, 4)).
// Then
toBe(2);
});
