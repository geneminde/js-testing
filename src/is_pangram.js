
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split("")

const isPangram = function(text) {
  const letterCount = {}
  ALPHABET.forEach((letter) => {
    letterCount[letter] = 0;
  });
  
  const reg = /[a-zA-z]/
  const input = text.toLowerCase().split("")

  input.forEach((letter) => {
    if(letterCount[letter] === 0) {
      letterCount[letter] += 1;
    }
  });
  
  for(let letter of ALPHABET) {
    if(!letterCount[letter]) {
      return false;
    }
  }
  return true;
};

module.exports = isPangram;
