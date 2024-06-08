function transformString(str) {
      const length = str.length;

      if (length % 15 === 0) {
            // Reverse the entire string
            str = str.split('').reverse().join('');
            // Replacing each character with its ASCII code
            str = str.split('').map(char => char.charCodeAt(0)).join(' ');
      } else if (length % 3 === 0) {
            // Reverse the entire string
            str = str.split('').reverse().join('');
      } else if (length % 5 === 0) {
            // Replace each character with its ASCII code
            str = str.split('').map(char => char.charCodeAt(0)).join(' ');
      }

      return str;
}

// Test cases
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"