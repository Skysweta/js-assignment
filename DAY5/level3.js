const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
const middleIndex = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 === 0
    ? (ages[middleIndex - 1] + ages[middleIndex]) / 2
    : ages[middleIndex];

// Find the average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

// Find the range of ages
const ageRange = maxAge - minAge;

// Compare (min - average) and (max - average) using abs()
const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);

// Output the results
console.log('Sorted Ages:', ages);
console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Age Range:', ageRange);
console.log('Absolute Difference (min - average):', minAverageDiff);
console.log('Absolute Difference (max - average):', maxAverageDiff);
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
    'Kenya'
];
//3
// Slice the first ten countries
const firstTenCountries = countries.slice(0, 10);
//4
// Find the middle country(ies)
const middleIndex1 = Math.floor(countries.length / 2);
const middleCountries = countries.length % 2 === 0
    ? countries.slice(middleIndex - 1, middleIndex + 1)
    : [countries[middleIndex]];

// Divide the countries array into two equal arrays
const firstHalfCountries = countries.slice(0, middleIndex + 1);
const secondHalfCountries = countries.slice(middleIndex + 1);

// Output the results
console.log('First Ten Countries:', firstTenCountries);
console.log('Middle Country(ies):', middleCountries);
console.log('First Half Countries:', firstHalfCountries);
console.log('Second Half Countries:', secondHalfCountries);
