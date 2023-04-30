import {
  analyzeArray,
  caesarCipher,
  capitalize,
  reverseString,
  calculator,
  alphabet,
  mod,
  lowerAlphabet,
} from './jest-examples';

test('Capitalizes the string', () => {
  expect(capitalize('zÜleYha')).toBe('Züleyha');
  expect(capitalize('öMeR')).toBe('Ömer');
});

test('Reverses the string', () => {
  expect(reverseString('öMeR')).toBe('ReMö');
  expect(reverseString('ZüLeYhA')).toBe('AhYeLüZ');
});

test('Calculates properly', () => {
  expect(calculator.add(3, 5)).toBe(8);
  expect(calculator.subtract(3, 5)).toBe(-2);
  expect(calculator.divide(10, 5)).toBe(2);
  expect(calculator.multiply(3, 5)).toBe(15);
});

test('Shifts letters correctly', () => {
  for (let i = 0; i < alphabet.length; i++) {
    expect(caesarCipher(alphabet[i], 3)).toBe(alphabet[mod(i + 3, 26)]);
  }
  for (let i = 0; i < alphabet.length; i++) {
    expect(caesarCipher(alphabet[i], 5)).toBe(alphabet[mod(i + 5, 26)]);
  }
  for (let i = 0; i < lowerAlphabet.length; i++) {
    expect(caesarCipher(lowerAlphabet[i], 3)).toBe(
      lowerAlphabet[mod(i + 3, 26)]
    );
  }
  for (let i = 0; i < lowerAlphabet.length; i++) {
    expect(caesarCipher(lowerAlphabet[i], 5)).toBe(
      lowerAlphabet[mod(i + 5, 26)]
    );
  }
});

test('Ciphers the string', () => {
  expect(caesarCipher('JAVASCRIPT', 3)).toBe('MDYDVFULSW');
});

test('Ciphers the string case sensitively', () => {
  expect(caesarCipher('JAVAScript', 3)).toBe('MDYDVfulsw');
});

test('Ciphers the string returning the same word if shift is 26 or 0', () => {
  expect(caesarCipher('JAVAScript', 26)).toBe('JAVAScript');
  expect(caesarCipher('JAVAScript', 0)).toBe('JAVAScript');
});

test('Ciphers the string, ignoring symbols', () => {
  expect(caesarCipher('JA/VAS?C*RiPT.', 3)).toBe('MD/YDV?F*UlSW.');
});

test('Analyzes the array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
