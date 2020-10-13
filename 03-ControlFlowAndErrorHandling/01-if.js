let isOn = true;
//* if( <some exresson) { <do something}



//*if (isOn) {
 //*   console.log ("the light is on");


if (isOn == false){
    console.log("the light is off");
};

weather = 65

//*if (weather <70){
    //*console.log("wear")


if ( weather < 70){
    console.log("wear a jacket");
} else {
    console.log("No jaket needed");
};
//* DOT NOTATION

let student =  {
    name : "derek",
    grade :  12
};

console.log(student.name);


let names = [
    "derek",
    "jake",

]

//* Ways to acess an object

console.log


let name = "zAchARy"

if (name[0] == name[0].toUpperCase()){
    console.log(name[])
}
/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/
// let name = "Austin";
// if (name == "Justin"){
//     console.log("Hello, my name is", name + "!");
// } else {
//     // "Hello, is your name", name + "?"
//     console.log(`Hello, is your name ${name}?`);
// }
/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/
// Dot notation
let student = {
    name : "Justin",
    grade : 12
};
let names = [
    "Justin",
    "Adam",
    "Amy"
]
// Ways to access an object
// console.log(student.name);
// console.log(student["name"]);
// Ways of accessing an array
// console.log(names[2])
let fruit = ['apple', 'orange']
let apple = fruit[0]
// console.log(apple);
// console.log(names.slice(1,3))
// // Bronze
// let name = 'zAchARy';
// if (name[0] == name[0].toUpperCase()) {
//     console.log(name);
// } else {
//     console.log("hey, this isn't written correctly");
// };
// silver
// let name = 'zAchARy';
// if (name[0] == name[0].toUpperCase()) {
//     console.log(name[0])
// } else {
//     console.log(name.slice(1).toLowerCase());
// }
let name = 'zAchARy';
if (name[0] == name[0].toUpperCase()) {
    let isUppercase = name[0] + name.slice(1).toLowerCase();
    console.log('console log #1:', isUppercase)
} else {
    let notUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('console log #2:', notUppercase);
}let isOn = false;
// if (<some expresson>) {<do something>}
// if (isOn == true) {
//     console.log('The light is on!');
// };
// if (isOn) {
//     console.log("The light is on!");
// };
// if (isOn == false){
//     console.log("The light is off");
// };
let weather = 75;
// if (weather < 70) {
//     console.log('Wear a jacket');
// };
// if (weather < 70) {
//     console.log("Wear a jacket");
// } else { // else can follow and if statement and will fire
//          // if the above statments didn't
//     console.log("No jacket necessary!");
// };
// switch
let officeCharacter = "Pam";
// switch (officeCharacter) {
//     // kinda like if officeCharacter == "Michael"
//     case "Michael":
//         console.log("My mind is going a mile an hour");
//         break; // break will leave the switch after the block runs
//     case "Dwight":
//         console.log("Perfectenschlag");
//         break;
//     case "Jim":
//         console.log("Bears. Beets. Battlestar Galactica");
//         break;
//     default:
//         console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
// }
let dessert = 'cake';
// switch (dessert) {
//     case 'pie':
//         console.log('Pie, pie, me oh my!');
//         break;
//     case 'cake':
//         console.log('Cake is great!');
//         break;
//     case 'ice cream':
//         console.log('I scream for ice cream!');
//         break;
//     default:
//         console.log('Not on the menu.');
// }
// else if tangent
// if (dessert == "cake") {
//     console.log('Cake is great!');
// } else if (dessert == "ice cream") {
//     console.log('I scream for ice cream!');
// } else {
//     console.log('Not on the menu.');
// }
// Ternary
let num = 6;
// () ? true : false
(num > 0) ? console.log('yes') : console.log('no');