//1
const countriesCopy = countries.slice();
const countriesCopy1= [].concat(countries);
const countriesCopy2 = [...countries];
//2
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
    'Kenya']

  const copiedCountries = [...countries];
  
  
  const sortedCountries = copiedCountries.sort();
  
  console.log('Original countries array:', countries);
  console.log('Sorted countries array:', sortedCountries);
  //3
  // webTechs array
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

// mernStack array
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// Sort the arrays
const sortedWebTechs = webTechs.sort();
const sortedMernStack = mernStack.sort();

console.log('Sorted webTechs array:', sortedWebTechs);
console.log('Sorted MERN stack array:', sortedMernStack);
//4
const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));

console.log('Countries containing the word "land":', countriesWithLand);
//5
const countryWithMaxChars = countries.reduce((maxCountry, currentCountry) => {
    return currentCountry.length > maxCountry.length ? currentCountry : maxCountry;
  }, '');
  
  console.log('Country with the highest number of characters:', countryWithMaxChars);
  //6
  const countriesWithLand1 = countries.filter(country => country.toLowerCase().includes('land'));

console.log('Countries containing the word "land":', countriesWithLand);
//8
const countriesWithTwoOrMoreWords = countries.filter(country => country.split(' ').length >= 2);

console.log('Countries containing two or more words:', countriesWithTwoOrMoreWords);
//9

const reversedAndCapitalized = countries.reverse().map(country => country.toUpperCase());

console.log('Reversed and capitalized countries array:', reversedAndCapitalized);