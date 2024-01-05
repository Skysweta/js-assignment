//2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ');
console.log(words);
console.log(words.length);
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}


if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

const allergicToHoney = true; 
if (allergicToHoney) {
    const honeyIndex = shoppingCart.indexOf('Honey');
    if (honeyIndex !== -1) {
        shoppingCart.splice(honeyIndex, 1);
    }
}


const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);

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
const ethiopiaIndex = countries.indexOf('Ethiopia');

if (ethiopiaIndex !== -1) {
    
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
    console.log(countries); 
}

//5
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ];

    const sassIndex = countries.indexOf('Ethiopia');

if (sassIndex !== -1) {
    
    console.log('sass is a css processor');
} else {
    countries.push('Ethiopia');
    console.log(countries); 
}

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack=frontEnd.concat(backEnd);
console.log(fullStack);

    
    