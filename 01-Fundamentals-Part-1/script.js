/*
let js = 'amazing';
if (js === 'amazing') alert('hassan is king')

let a = 10 - 9;
console.log(a);

let firstname = "hassan";
console.log(firstname)
console.log(firstname)
let PI = 3.142;


let myFirstJob = 'programmer';

console.log(myFirstJob);

// storing boolean in variable
let hassan = true;
console.log(hassan);

//using typeof operator
console.log(typeof 'js');
console.log(typeof 76);

//dynamic data typing

let dynamicTyping = true;
console.log(typeof dynamicTyping);

dynamicTyping = 'yooo man';
console.log(typeof dynamicTyping);

//const variable
const age = 19;

// use of arithematical operator
let year = 2022;
hassanAge = year - 2004;
sarahAge = year - 2006;
console.log(hassanAge, sarahAge)

//concatenation

const firstName = 'hassan';
const lastName = 'ali';

console.log(firstName + ' ' + lastName);

// assignment operators

let x = 5 * 2;
console.log(x);
x += 10;
console.log(x);
x *= 3;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

//logical

let razaAge = 14;
let farzanAge = 15;

console.log(razaAge >= farzanAge);
console.log(razaAge <= farzanAge);

//average of ages

const averageAge = (razaAge + farzanAge) / 2;
console.log(averageAge);

//coding exercise 1

const markHeight = 1.2;
const johnsHeight = 1.3;
const markWeight = 44;
const johnsWeight = 45;

markBmi = markWeight / (markHeight * markHeight);
johnsBmi = johnsWeight / (johnsHeight * johnsHeight);

markHigherBmi = (markBmi > johnsBmi);
console.log(markHigherBmi);

console.log("mark weights " + markWeight, "kg and is " + markHeight, " m tall \n and john weight is" + johnsWeight, " +kg and johns height is" + johnsHeight, "m tall " + markHigherBmi);


//using template literal
const firstName = 'hassan';
const lastName = 'ali';
const job = 'programmer';
const birthYear = 2004;
const recentYear = 2023;

const hassanNew = `my name is ${firstName} and my last name is ${lastName} and I am a ${job}, my age is ${recentYear - birthYear}`;

console.log(hassanNew);
console.log(`building a habbit of using backticks`);

//using template literal with for multiline strings

console.log(`my name is hassan
and I am not a terrorist
yoomann`);


//implementing if and else
const sarahAge = 13;
const oldEnough = 18;

if (oldEnough <= sarahAge) {
    console.log(`you can make your license🤦`)
} else {
    console.log(`you are not old enough you have tu wait ${oldEnough - sarahAge} atleast to have license`);
}

const birthYear = 2002;
let century;
if (birthYear < 2000) {
    century = 19;
} else {
    century = 20;
}
console.log(`${century}`);

const markHeight = 2.0;
const johnsHeight = 3.0;
const markWeight = 44;
const johnsWeight = 45;

markBmi = markWeight / (markHeight * markHeight);
johnsBmi = johnsWeight / (johnsHeight * johnsHeight);

if (markBmi > johnsBmi) {
    console.log(`mark has higher bmi (${markBmi}) than johns BMI which is ${johnsBmi}`)
} else {
    console.log(`john has higher bmi (${johnBmi}) than mark BMI which is ${markBmi}`)
}


//using converision
const year = 1992;
console.log(Number(year) + 18)

//converting into string
console.log(String(year))

//type coercison
console.log('I am ' + 23 + 'years old');
console.log('23' = '10' - 3);
console.log('23' / '2');


//truthy and falsy values
//5 falsy values:0,'',undefined,null,NaN

console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean('Jonas'));//true
console.log(Boolean({}));//true
//testing with 0
const money = 0;

if (money) {
    console.log(`you can spend money`);
} else {
    console.log(`you need a job`);
}
//undefined testing
let height;

if (height) {
    console.log(`height is defined`);
} else {
    console.log(`height is not defined`);
}
//teesting with 123

const weight = 123;

if (weight) {
    console.log(`your weight is defined`);
} else {
    console.log(`weight is not defined`);
}


//using equality operator
const age = 17;

if (age === 18)//strict
{
    console.log(`vip vip `)
} else if (age > 18) {
    console.log(`you are greater than 18`)
} else {
    console.log(`you are smaller than 18`)
}
//loose =(age==18)

//using prompt

const number = Number(prompt(`whats your fav number`));

if (number === 23)//23==23
{
    console.log(`coool number is 23 with number`);
}
if (number !== 23) {
    console.log(`why not number is 23`);
}

const driverLicense = true; //A
const goodVision = true; //B
const hasTired = true; //C
console.log(driverLicense && goodVision); //AND
console.log(driverLicense || goodVision); //OR
console.log(!driverLicense);

if (driverLicense && goodVision && !hasTired) {
    console.log(`sarah can drive`);
} else {
    console.log(`someone else should drive`);
}


//coding challenge 2

const dolphinsScore1 = 96;
const dolphinsScore2 = 94;
const dolphinsScore3 = 90;

const koalasScore1 = 99;
const koalasScore2 = 94;
const koalasScore3 = 89;

const averageDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3

const averageKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3

console.log(`score of team dolphins${averageDolphins}`);
console.log(`score of team koalas ${averageKoalas}`);

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log(`team dolphine is winner`);
}
else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log(`team koalas is winner`);
}
else if (averageKoalas === averageDolphins && averageDolphins >= 100 && averageKoalas >= 100) {
    console.log(`this is draw.both is a winner`);
}
else {
    console.log(`no one is winner`)
}


//switch statement

const day = 'monday';

switch (day) {
    case 'monday':
        console.log(`today is monday`);
        break;
    case 'tuesday':
        console.log(`today is tuesday`);
        break;
    case `wednesday`:
        console.log(`today is wednesday`);
        break;
    case `thursday`:
        console.log(`today is thursday`);
        break;
    case `friday`:
        console.log(`today is friday`);
        break;
    case `saturday`:
        console.log(`today is saturday`);
    case `sunday`:
        console.log(`today is sunday`);
    default:
        console.log(`today is not the day`);
}


//ternary operator

const age = 17;
age >= 18 ? console.log(`I like to drink water`) : console.log(`you are not allowed to drink water`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

console.log(`i like to drink ${age >= 18 ? `wine` : `water`}`);

*/
//cooding challenge 4
const stevenBill = 430;

let tip = stevenBill >= 50 && stevenBill <= 300 ? (15 / 100) * stevenBill : (20 / 100) * stevenBill;


console.log(`your total bill is ${tip + stevenBill} which includes ${stevenBill} bill and ${tip} tip`);