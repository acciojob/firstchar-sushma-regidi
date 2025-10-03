function firstChar(str) {
  // Iterate through each character of the string
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      return str[i]; // Return the first non-space character
    }
  }
  return ''; // Return empty string if no non-space char found
}

// Test cases
console.log(firstChar(' Rosa Parks ')); // 'R'
console.log(firstChar(' Hello World ')); // 'H'
console.log(firstChar(' ')); // ''
console.log(firstChar('')); // ''

