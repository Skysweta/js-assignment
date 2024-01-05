console.log("Generating a random ID with any number of characters:");

function generateRandomID(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomID = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomID += characters.charAt(randomIndex);
  }

  return randomID;
}

const randomID1 = generateRandomID(12); // Change 12 to any desired length
const randomID2 = generateRandomID(25); // Change 25 to any desired length

console.log("Random ID 1:", randomID1);
console.log("Random ID 2:", randomID2);
//2
console.log("Generating a random hexadecimal number:");

function generateRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    color += letters.charAt(randomIndex);
  }

  return color;
}

const randomHexColor = generateRandomHexColor();
console.log("Random Hex Color:", randomHexColor);
//3
console.log("Generating a random RGB color:");

function generateRandomRGBColor() {
  const randomComponent = () => Math.floor(Math.random() * 256);
  const red = randomComponent();
  const green = randomComponent();
  const blue = randomComponent();

  return `rgb(${red},${green},${blue})`;
}

const randomRGBColor = generateRandomRGBColor();
console.log("Random RGB Color:", randomRGBColor);
//4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  
  const uppercaseCountries = countries.map(country => country.toUpperCase());
  
  console.log(uppercaseCountries);
//5
const countriesLengths = countries.map(country => country.length);

console.log(countriesLengths);
//6
const modifiedCountries = countries.map(country => [
    country,
    country.slice(0, 3).toUpperCase(),
    country.length
  ]);
  
  console.log(modifiedCountries);
  //7
  const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log('All these countries are without land');
}

//8
const countriesEndWithIA = countries.filter(country => country.toLowerCase().endsWith('ia'));

if (countriesEndWithIA.length > 0) {
  console.log(countriesEndWithIA);
} else {
  console.log('These are countries without "ia"');
}
//9
const countryWithMaxChars = countries.reduce((maxCountry, currentCountry) => {
    return currentCountry.length > maxCountry.length ? currentCountry : maxCountry;
  }, '');
  
  console.log('Country with the maximum number of characters:', countryWithMaxChars);
  //10
  const countriesWithFiveChars = countries.filter(country => country.length === 5);

console.log('Countries with exactly 5 characters:', countriesWithFiveChars);
//11
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

const longestWord = webTechs.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, '');

console.log('Longest word in webTechs array:', longestWord);
//12
const techsWithLengths = webTechs.map(tech => [tech, tech.length]);

console.log(techsWithLengths);
//13
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

const mernAcronym = mernStack.reduce((acronym, tech) => acronym + tech[0], '');

console.log('MERN Acronym:', mernAcronym);
//14
console.log("Iterating through the array using a for...of loop:");

for (const tech of techStack) {
  console.log(tech);
}
//16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
  
  console.log("Printing all elements of the array:");
  
  for (const stack of fullStack) {
    for (const tech of stack) {
      console.log(tech);
    }
  }
  
