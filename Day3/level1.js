let firstName="sweta";
let lastName="yadav";
let country="india";
let age=20;
let isMarried="false";
let year=2023;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

//2
console.log('10'===10);
//3
console.log(parseInt('9.8')==10);
//4
//truthy value

let num=10;
let name="sweta";
let isMarried="true";

//falsy value
let empty= null;
let middleName="";
let marks=0;

//5

console.log( 4 > 3);
console.log( 4 >=3);
console.log(  4 < 3 );
console.log( 4 <= 3);
console.log(  4 == 4);
console.log(  4 ===4);
console.log(  4 !== 4);
console.log( 4 != 4);
console.log( 4 != "4");
console.log( 4 == '4');
console.log( 4 === '4');
console.log(python.length==jargon.length);

//6
console.log( 4 > 3 && 10 < 12);
console.log( 4 > 3 && 10 > 12);
console.log(  4 > 3 || 10 < 12);
console.log( 4 > 3 || 10 >12);
console.log(!(4 > 3));
console.log( !(4 < 3));
console.log(  !(false));
console.log( !(4 > 3 && 10 < 12));
console.log( !(4 > 3 && 10 > 12) );
let word1 = "dragon";
let word2 = "python";

if (word1.indexOf("on") === -1 && word2.indexOf("on") === -1) {
  console.log("There is no 'on' in both dragon and python.");
} else {
  console.log("There is 'on' in either dragon or python.");
}

//7


const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
const timestamp = now.getTime() / 1000; 

console.log(" Year today:", year);
console.log(" Month today:", month + 1); 
console.log(" Date today:", date);
console.log(" Day today (0=Sunday, 1=Monday, etc.):", day);
console.log(" Hours now:", hours);
console.log(" Minutes now:", minutes);
console.log(" Seconds elapsed from January 1, 1970, to now:", timestamp);








