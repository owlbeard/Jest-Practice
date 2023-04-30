export function capitalize(str) {
  const newStr = str.toLowerCase();
  const string = newStr.split('');
  let nonFirstLetter = '';
  for (let i = 1; i < string.length; i++) {
    nonFirstLetter += string[i];
  }
  return string[0].toUpperCase() + nonFirstLetter;
}

export function reverseString(str) {
  const string = str.split('');
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

export const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

export const alphabet = [...Array(26)].map((_, i) =>
  String.fromCharCode(65 + i)
);
export const lowerAlphabet = [...Array(26)].map((_, i) =>
  String.fromCharCode(65 + i).toLowerCase()
);

export function mod(n, p) {
  if (n < 0) n = p - (Math.abs(n) % p);

  return n % p;
}

export function caesarCipher(str, shift) {
  const string = str.split('');
  let cipheredString = '';
  for (let i = 0; i < string.length; i++) {
    if (lowerAlphabet.includes(string[i])) {
      let index = lowerAlphabet.indexOf(string[i]);
      let newIndex = mod(index + shift, 26);
      cipheredString += lowerAlphabet[newIndex];
    } else if (alphabet.includes(string[i])) {
      let index = alphabet.indexOf(string[i]);
      let newIndex = mod(index + shift, 26);
      cipheredString += alphabet[newIndex];
    } else cipheredString += string[i];
  }
  return cipheredString;
}

export function analyzeArray(array) {
  const sortedArray = array.sort();
  const results = {
    average: array[Math.floor(array.length / 2)],
    min: sortedArray[0],
    max: sortedArray[sortedArray.length - 1],
    length: array.length,
  };
  return results;
}
