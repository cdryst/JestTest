const { add, mul, sub, div } = require('./arith')

// Given
const values = [1, 1, 2];
const values2 = [-1, 2, 1];
const results = [2, 1, 3];

// When
test.each([values, values2, results])(
  '%i + %i equals %i', (a, b, expected) => {
    expect(add(a, b)).
// Then
toBe(expected);
  },
);

// Given
test.each([[1, 1, 0], [-1, 2, -3], [2, 2, 0]])(
  '%i - %i equals %i', (a, b, expected) => {
// When
    expect(sub(a, b)).
// Then
toBe(expected);
  },
);

// Given
test.each([[1, 1, 1], [-1, 2, -2], [2, 2, 4]])(
  '%i * %i equals %i', (a, b, expected) => {
// When
    expect(mul(a, b)).
// Then
toBe(expected);
  },
);

// Given
test.each([[1, 1, 1], [-1, 2, -0.5], [2, 2, 1]])(
  '%i / %i equals %i', (a, b, expected) => {
// When
    expect(div(a, b)).
// Then
toBe(expected);
  },
);
