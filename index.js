const generateBtn = document.querySelector('.generate-btn');
const passLenght = document.querySelector('#passLenght');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
const domPasswordElement = document.querySelector('.generatedPassword');

const allCharacters = {
  letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z'],
  simbols: ['!', '@', '#', '%', '&', '*'],
  numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
};

let passwordLenght = '12';

let generatedPassword = '';

passLenght.addEventListener('change', () => {
  passwordLenght = passLenght.value;
});

generateBtn.addEventListener('click', startGenerator);

// Main Function, receives all the data, and generates the password

function startGenerator() {
  // Reset the password from the screen

  let generatedPassword = '';

  let usableCharacters = [];

  function generatePassword(usableCharacters) {
    let randomPosition = Math.floor(Math.random() * usableCharacters.length);

    generatedPassword = generatedPassword + usableCharacters[randomPosition];
  }

  // Only Letters Password

  for (let i = 0; i < passwordLenght; i++) {
    if (symbols.checked == false && numbers.checked == false) {
      usableCharacters = allCharacters.letters;

      generatePassword(usableCharacters);
    } else if (numbers.checked == true && symbols.checked == true) {
      usableCharacters = allCharacters.letters.concat(allCharacters.numbers, allCharacters.simbols);

      generatedPassword = generatedPassword + usableCharacters[Math.floor(Math.random() * usableCharacters.length)];
    } else if (symbols.checked == true) {
      usableCharacters = allCharacters.letters.concat(allCharacters.simbols);

      generatedPassword = generatedPassword + usableCharacters[Math.floor(Math.random() * usableCharacters.length)];
    } else if (numbers.checked == true) {
      usableCharacters = allCharacters.letters.concat(allCharacters.numbers);

      generatedPassword = generatedPassword + usableCharacters[Math.floor(Math.random() * usableCharacters.length)];
    }
  }

  domPasswordElement.innerText = generatedPassword;
}
