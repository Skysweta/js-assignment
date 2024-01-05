let age=prompt('enter your age');
if(age>18)
{
    console.log("You are old enough to drive");
}
else{
    console.log(` you are left with ${18-age} years `);
}
//2
let myAge=20;
let yourAge=prompt('enter your age');
if(myAge>yourAge)
{
    console.log(` you are ${myAge-yourAge}years younger `);
}
else
{
    console.log(` you are left with ${yourAge-myAge} years older `);
}

//3
let a=10;
let b=5;
if(a>b)
{
    console.log("a is greater than b");

}
else
{
    console.log("b is greater than a");
}

a>b
?console.log("a is greater than b"): console.log("b is greater than a");
//4
let num =prompt('enter the number');
if(num%2==0)
{
    console.log(`${num} is even number`);
}
else{
    console.log(`${num} is odd number`);
}