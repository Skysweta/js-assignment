//1
//loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// do-while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);

//2
//for loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

//while loop
let k = 10;
while (i >= 0) {
  console.log(i);
  i--;
}
// do-while loop
let l = 10;
do {
  console.log(j);
  j--;
} while (j >= 0);

//3
console.log("Enter the value of n:");
let n = prompt("Please enter a value for n:"); 

console.log("Using for loop:");
for (let i = 0; i <= n; i++) {
  console.log(i);
}

//4
console.log("Pattern 1:");

for (let i = 1; i <= 6; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "#";
  }
  console.log(row);
}
//5
console.log("Multiplication Table:");

for (let i = 0; i <= 10; i++) {
  let result = i * i;
  console.log(`${i} x ${i} = ${result}`);
}
//6
console.log("Pattern:");

for (let i = 0; i <= 10; i++) {
  let square = Math.pow(i, 2);
  let cube = Math.pow(i, 3);
  console.log(`${i} ${square} ${cube}`);
}
//7
console.log("Even Numbers:");

for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}
//9
console.log("Prime Numbers:");

for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
//10
console.log("Sum of Numbers:");

let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log("The sum of all numbers from 0 to 100 is:", sum);
//11
console.log("Sum of Evens and Odds:");

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    // Even numbers
    sumEven += i;
  } else {
    // Odd numbers
    sumOdd += i;
  }
}

console.log("The sum of all even numbers from 0 to 100 is:", sumEven);
console.log("The sum of all odd numbers from 0 to 100 is:", sumOdd);
//12
console.log("Sum of Evens and Odds as Array:");

let sumEven2 = 0;
let sumOdd2 = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    // Even numbers
    sumEven += i;
  } else {
    // Odd numbers
    sumOdd += i;
  }
}

let sumsArray = [sumEven, sumOdd];
console.log("Sums Array:", sumsArray);
//13
console.log("Generating an array of 5 random numbers:");

let randomNumbers = [];

for (let i = 0; i < 5; i++) {
  let randomNumber = Math.floor(Math.random() * 100); // Generates random numbers between 0 and 99
  randomNumbers.push(randomNumber);
}

console.log("Array of random numbers:", randomNumbers);
//14
console.log("Generating an array of 5 unique random numbers:");

let uniqueRandomNumbers = [];

while (uniqueRandomNumbers.length < 5) {
  let randomNumber = Math.floor(Math.random() * 100); // Generates random numbers between 0 and 99

  // Check if the number is not already in the array
  if (!uniqueRandomNumbers.includes(randomNumber)) {
    uniqueRandomNumbers.push(randomNumber);
  }
}

console.log("Array of unique random numbers:", uniqueRandomNumbers);
//15
console.log("Generating a six-character random ID:");

function generateRandomID() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomID = '';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomID += characters.charAt(randomIndex);
  }

  return randomID;
}

const randomID = generateRandomID();
console.log("Random ID:", randomID);
