let sent ="'Love is the best thing in this world. Some found their love and some are stilllooking for their love.'";
console.log(sent.count(love));
//2
const string = 'You cannot end a sentence with because because because is a conjunction'
var ptrn = /because/g
console.log(string.match(ptrn).length);
//3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[%$@&#;!,]/g,''));
//4
var baseSalary = 5000;
var annualBonus = 10000;
var onlineCourses = 15000;

var totalSalary = (baseSalary*12) + annualBonus + (onlineCourses * 12);
console.log(totalSalary);