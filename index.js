const generateBtn = document.querySelector('.generate-btn');
const passLenght = document.querySelector('#passLenght');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
const domPasswordElement = document.querySelector('.generatedPassword');

const allCharacters = {
  letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z'],
  simbols: ['!', '@', '#', '%', , '&', '*'],
  numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
};

let passwordLenght = '12';

passLenght.addEventListener('change', () => {
  passwordLenght = passLenght.value;
});

generateBtn.addEventListener('click', startGenerator);

// Main Function, receives all the data, and generates the password

function startGenerator() {
  // Reset the password from the screen

  let generatedPassword = '';

  let usableCharacters = [];

  // Scoped Function that Actualy Makes the Password;
  function generatePassword(usableCharacters) {
    let randomLetter = Math.floor(Math.random() * usableCharacters.length);
    generatedPassword = generatedPassword + usableCharacters[randomLetter];
  }

  // Logic Operators to know what characters to use
  for (let i = 0; i < passwordLenght; i++) {
    // SYMBOLS ❌  AND NUMBERS ❌
    if (symbols.checked == false && numbers.checked == false) {
      usableCharacters = allCharacters.letters;
      generatePassword(usableCharacters);

      // SYMBOLS ✔️ AND NUMBERS ✔️
    } else if (numbers.checked == true && symbols.checked == true) {
      usableCharacters = allCharacters.letters.concat(allCharacters.numbers, allCharacters.simbols);
      generatePassword(usableCharacters);

      // SYMBOLS ✔️
    } else if (symbols.checked == true) {
      usableCharacters = allCharacters.letters.concat(allCharacters.simbols);
      generatePassword(usableCharacters);

      // NUMBERS ✔️
    } else if (numbers.checked == true) {
      usableCharacters = allCharacters.letters.concat(allCharacters.numbers);
      generatePassword(usableCharacters);
    }
  }
  domPasswordElement.innerText = generatedPassword;
}
