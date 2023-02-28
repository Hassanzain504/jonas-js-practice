'use strict';
/*
//working with functions

function Callingname() {
    console.log(`hassan ali zain`);
}
Callingname();
Callingname();
Callingname();
//fruit example
function fruitProcessor(apple, oranges) {
    const juice = `your juice contains ${apple} apples and ${oranges}oranges`;
    return juice;
}

const freshJuice = fruitProcessor(6, 7);
console.log(freshJuice);
//running with without variable
console.log(fruitProcessor(7, 2));
const appleOrangeJuice = fruitProcessor(10, 3);
console.log(appleOrangeJuice);

//some other functions
console.log //builtin function
const num = Number('23'); //builtin function


function calcAge(birthYear, recentYear) {
    const age = recentYear - birthYear;//we can do this also return recentyear-birthyear;
    return age;
}
const age = calcAge(2004, 2023);
console.log(`your age is ${age}`);

//function declaration:
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1991);
//calling both
console.log(age1, age2);


//arrow function

const calcage3 = birthyear => 2022 - birthyear;
const age = calcage3(1991);
console.log(age);

//arrow function for 1 paramater and more than one line of code

const yearsUntilRetirement = birthyear => {
    const age = 2022 - birthyear;
    const retirement = 65 - age;
    return retirement;
}
const calcRetirement = yearsUntilRetirement(1991);
console.log(calcRetirement);


//arrow function for 2 parameter 
const yearsUntilRetirement = (firstName, birthYear) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName}, you have ${retirement} years left until the retirement `
}

console.log(yearsUntilRetirement('hassan', 1992));
console.log(yearsUntilRetirement('ali', 2000));


const cutPieces = function (fruit) {
    return fruit * 4;
}

function fruitProcessor(apple, oranges) {
    const applePieces = cutPieces(apple);
    const orangePieces = cutPieces(oranges);

    const juice = `your juice contains ${applePieces} apples and ${orangePieces}oranges`;
    return juice;
}
console.log(fruitProcessor(3, 4));



const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthyear, firstName) {
    const age = calcAge(birthyear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return retirement;
    }
    else {
        return `dear ${firstName}, you are already retired`;
    }



console.log(yearsUntilRetirement(1991, 'jonas'));
console.log(yearsUntilRetirement(1970, 'mike'));

//cooding challenge
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `dolphins has the score ${avgDolphins} and koalas has the score ${avgKoalas}.so dolphin is the winner`;
    }
    else if (avgKoalas >= avgDolphins * 2) {
        return `koalas has the score of ${avgKoalas} and dolphins has the score of ${avgDolphins}.so koalas is the winner`;
    }
    else {
        return `no one is winner`;
    }

}
const result = checkWinner(scoreDolphins, scoreKoalas);
console.log(result);
console.log(checkWinner(551, 71));


//array
const friends = ['hassan', 'ali', 'zain'];
console.log(friends.length);
console.log(friends[1]);//at position 2 = ali
// to find the value in 2nd position
console.log(friends[friends.length - 1]);

const firstname = 'hassan'
const birthYear = 2004
const hassanBio = [firstname, 'student', 2022 - birthYear, friends];
console.log(hassanBio);


// exercise array
//passing array elements to a function
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3, age4, age5);
//result in array

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


//push element
const friends = [`Michael`, `Steven`, `Peter`];
const newlength = friends.push(`jay`);
console.log(friends);
console.log(newlength);

//unshift
friends.unshift('john');
console.log(friends);

//remove elements 
friends.pop();
console.log(friends)
const popped = friends.pop();
console.log(popped);

//printing the array
console.log(friends);
//removing first elememt
const firstShift = friends.shift();
console.log(firstShift);
console.log(friends);

//to know theposition of certain element
console.log(friends.indexOf(`Steven`));

//es6 includes
console.log(friends.includes(`Steven`));

//checking with if and else
friends.push('Peter');
if (friends.includes(`Peter`)) {
    console.log(`your friend is present`);
}
else {
    console.log(`your friend is not present`)
}

function calcTip(value) {
    if (value >= 50 && value <= 300) {
        const tip = value * 0.15;
        return tip;
    }
    else {
        const tip = value * 0.2;
        return tip;
    }
}
console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + bills[0], bills[1] + bills[1], bills[2] + bills[2]];

console.log(bills, tips, total)


const hassan = {
    firstName: 'hassan',
    lastName: 'zain',
    age: 2022 - 2004,
    friends: ['farhan', 'ali', 'furqan']
}
// . notation
console.log(hassan.age);
// bracket notation
console.log(hassan[`lastName`]);
const nameKey = 'Name';
console.log(hassan['first' + nameKey]);
console.log(hassan['last' + nameKey]);

//using prompt

const interestedIn = prompt(`what do you want to know?`);
if (hassan[interestedIn]) {
    console.log(hassan[interestedIn]);
} else {
    console.log(`wrong request`);
}
//adding in objet using dot and bracket

hassan.location = 'karachi';
hassan['facebook'] = 'hassan';
console.log(hassan)

// small challenge
//write jassam has 3 friends and his bestfriend his farhan
console.log(`${hassan.firstName}has ${hassan.friends.length} friends, and his bestfriend is ${hassan.friends[0]}`);


//object ke andar function(method)
const jonas = {
    firstName: 'jonas',
    lastName: 'schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //using this to create property of object
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName}is a ${this.age}years old ${this.job}and he has ${this.hasDriversLicense ? 'a' : 'no'}driverlicense`
    }
    // calcAge: function () {
    //jonas.birthYear;
    //     const age = 2037 - this.birthYear;
    //     return age
    // }
};
//dot
//console.log(jonas.calcAge(jonas.birthYear));
//bracket
//console.log(jonas['calcAge'](jonas[`birthYear`]));

//one time calculation rest will be retrived as property
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//challenge
//jonas is a 46 year old teacher and he has a/no driver licesne"
console.log(jonas.getSummary());


//coding challenge 3

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }

}
const john = {
    firstName: 'john',
    lastName: 'smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName} ${mark.lastName} has a higher bmi ${mark.bmi} than ${john.firstName} ${john.lastName} bmi which is ${john.bmi}`)
}
else {
    console.log(`${john.firstName} ${john.lastName} has a higher bmi ${john.bmi} than ${mark.firstName} ${mark.lastName} bmi which is ${mark.bmi}`)
};


//forloop


for (let rep = 1; rep <= 10; rep++) {
    console.log(`you are lifting ${rep}`);
}

//printing array using for-loop
const jonasArray = [
    'jonas',
    'schmedtmann',
    2037 - 1991,
    'teacher',
    ['michael', 'Peter', 'Steven'],
    true

];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);

    //filling types of array
    //types[i]=typeof of jonas[i]
    types.push(typeof jonasArray[i]);

};

const years = [1991, 2007, 1969, 2020];
const newYears = [];

for (let i = 0; i < years.length; i++) {
    //without push
    newYears[i] = years[i];
    //with push
    newYears.push(years[i]);
}
console.log(newYears)

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {    //without push
    // ages[i] = 2037 - years[i];
    //with push
    ages.push(2037 - years[i]);
}
console.log(years);
console.log(ages);


//continue and break
console.log(`---only strings---`)
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
}



const jones = [
    'jones',
    'schmedtmann',
    2037 - 1991,
    'teacher',
    ['micahel', 'peter', 'steven']
];

let hassan = [];

for (let i = jones.length - 1; i >= 0; i--) {
    hassan[jones.length - i - 1] = jones[i];
}
console.log(jones, hassan);


for (let exercise = 1; exercise < 4; exercise++) {
    //console.log(`we are working on${exercise} exercise`)

    for (let chapter = 1; chapter < 6; chapter++) {
        //console.log(`we are working on ${chapter} chapter)
        console.log(`we are working on ${exercise} exercise and ${chapter} chapter`)
    }
}

let rep = 1;
while (rep <= 10) {
    console.log(`you are seskui and in ${rep}`)
    rep++;
}
//rolling dice problem for while loop

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);
while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6) {
        console.log(`loop is about to end`);
    }
}
*/
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        const tip = bill * 0.15;
        return tip;
    }
    else {
        const tip = bill * 0.2;
        return tip;
    }
}
for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i])
    tips.push(tip);
    total.push(tip + bills[i]);
}
console.log(tips, total, bills);

const calcAverage = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}

console.log(calcAverage(total));
console.log(calcAverage(tips));