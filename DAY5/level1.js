//1
const arr=[];
//2
const arr1=[1,2,3,4,5];
//3
console.log(arr1.lenght);
//4
console.log(arr1[0],arr1[2],arr1[4]);
//5
let mixedDataType=["sweta",1,"apple",3,4,5];
console.log(mixedDataType.lenght);
//6
let compines=["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"];
//7
console.log(compines);
//8
console.log(compines.lenght);
//9
console.log(compines[0],compines[4],compines[6]);
//10
console.log(compines[0]);
console.log(compines[1]);
console.log(compines[2]);
console.log(compines[3]);
console.log(compines[4]);
console.log(compines[5]);
console.log(compines[6]);
//11
console.log(compines.toUppercase);
//12
let sentence = companies.join(', ') + ' are big IT companies.';

console.log(sentence);
//13
let companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let Company = "Microsoft"; 

if (companies.includes(Company)) {
    console.log(searchCompany + " exists in the array.");
} else {
    console.log(Company + " is not found in the array.");
}
//14


// Function to check if a company has more than one 'o'
function hasMoreThanOneO(company) {
    let count = 0;
    for (let i = 0; i < company.length; i++) {
        if (company[i].toLowerCase() === 'o') {
            count++;
            if (count > 1) {
                return true;
            }
        }
    }
    return false;
}

// Filtering companies
let filteredCompanies = [];

for (let i = 0; i < companies.length; i++) {
    if (!hasMoreThanOneO(companies[i])) {
        filteredCompanies.push(companies[i]);
    }
}

console.log(filteredCompanies);
//16
let arrReverse = companies.reverse();
//17
companies.slice(0,3);
console.log(companies);
//18

let lastThreeCompanies = companies.slice(-3);

console.log(lastThreeCompanies);
//19
let middleIndex = Math.floor(companies.length / 2);
let middleITCompanies = companies.slice(middleIndex, middleIndex + 2);
console.log(middleITCompanies);

//20
console.log(companies.shift());
//21
let middleIndex1 = Math.floor(companies.length / 2);
companies.splice(middleIndex, middleIndex % 2 === 0 ? 2 : 1);
console.log(companies);
//22
console.log(companies.pop());
//23
companies = [];

console.log(companies);