let qoute1="The quote 'There is no exercise better for the heart than reaching down andlifting people up.' by John Holmes teaches us to help one another";
console.log(qoute1);
//2
const quote ="Love is not patronizing and charity isn't about pity, it is about love. \
Charity and love are the same -- with charity you give love, so don't just give \
money but reach out hand instead."
console.log(quote);
//3
console.log(typeof('10')==typeof(10));
console.log(typeof(int('10'))==typeof(10));
//4
console.log(typeof(9.8)==typeof(10));
console.log(typeof(round(9.8))==typeof(10));
//5
let py = 'python'
let ja = 'jargon'
console.log(py.includes('on')==ja.includes('on'))
//6
let sent="I hope this course is not full of jargon.";
console.log(sent.include(jargon));
//7
const num = Math.floor(Math.random()*101)
console.log(num);
//8
const num = Math.floor(Math.random()*(100-50+1)+50)
console.log(num);
//9
const num = Math.floor(Math.random()*(255-0+1)+0)
console.log(num);
//10
const string ='JavaScript'
var ranNum = Math.floor(Math.random() * (string.length-1))
console.log(string[ranNum]);
//11
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')
//12
const sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.substr(sentence.indexOf('because'),23));