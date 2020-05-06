function includes(chars, char) {
  for (let i = 0; i < chars.length; i++) {
    if (char === chars[i]) {
      return true;
    }
  }
  return false;
}

function removeChars(string, chars) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!includes(chars, string[i])) {
      result += string[i];
    } 
  }
  return result;
}






console.log(removeChars('Battlei of the Vowels: Hawaii vs. Grozny', 'aeiou'));