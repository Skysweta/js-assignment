let base=c
let height=prompt('enter the height');
let area = 1/2*base*height;
console.log("The area of the triangle is: " + area);

//2
let a=prompt('enter the side');
let b=prompt('enter the side');
let c=prompt('enter the side');
let perimeter=a+b+c;
console.log("perimeter of the triangle is :"+perimeter);
//3
let length=prompt('enter the side length');
let width=prompt('enter the width');
let areaRectangle=length*width;
let perimeterRectangle=1/2*(length+width);
console.log("perimeter of the rectangle is :"+perimeterRectangle);
console.log("area of the rectangle is :"+areaRectangle);
//4
let r=prompt('enter the radius ');
const pi=3.14;
let areaCircle=pi*r*r;
let circumferenceCircle=2*pi*r;
console.log("circumference of the circle"+circumferenceCircle);
console.log("area of circle"+areaCircle);

//5
// Equation: y = 2x - 2
const slope = 2;
const xIntercept = 1; 
const yIntercept = -2; 

console.log("Slope (m): " + slope);
console.log("x-intercept: (" + xIntercept + ", 0)");
console.log("y-intercept: (0, " + yIntercept + ")");

//6
let x1=2;
let x2=6;
let y1=2;
let y2=10;
let m= (y2-y1)/(x2-x1);
console.log("slope"+m);
//7
slope>m?console.log(slope is greater):console.log(m is larger );
//8

//9

let hoursWorked = prompt("Enter hours:");
let ratePerHour = prompt("Enter rate per hour:");
let weeklyEarning = hoursWorked * ratePerHour;
 alert("Your weekly earning is " + weeklyEarning);
//10
let myName=sweta;
myName.length>7?
console.log("is long")
:console.log("is short");
//11
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';

if (firstName.length > lastName.length) {
  console.log(`Your first name, ${firstName}, is longer than your family name, ${lastName}`);
} else if (firstName.length < lastName.length) {
  console.log(`Your family name, ${lastName}, is longer than your first name, ${firstName}`);
} else {
  console.log(`Your first name, ${firstName}, and your family name, ${lastName}, have the same length.`);
}
//12
let myAge = 250;
let yourAge = 25;
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
  } else if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
  } else {
    console.log("We are the same age.");
  }
  //13
  let age=prompt("enter your age");
  if(age>18)
  {
    console.log("your r enough to drive");
  }
  else{
    console.log("you r not allowed to drive");
  }

  //14
 
let yearsLived = prompt('Enter the number of years you live:');
let secondsLived = yearsLived * 31536000;
console.log(`You lived ${secondsLived} seconds.`);
//15
const now = new Date();
const year = now.getFullYear(); // return year
 const month = now.getMonth(); + 1 // return month(0 - 11)
 const date = now.getDate(); // return date (1 - 31)
 const hours = now.getHours(); // return number (0 - 23)
 const minutes = now.getMinutes(); // return number (0 -59) 
console.log(`${date}-${month}-${year} ${hours}:${minutes}`) ;
console.log(`${year}/${month}/${date} ${hours}:${minutes}`) ;
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) ;
  