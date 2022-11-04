// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops
console.log("I'm ready!");

const hacker1 = ("Pablo");

console.log(`The driver's name is ${hacker1}`);

const hacker2 = ("Jim");

console.log(`The navigator's name is ${hacker2}`);

let charactersPilot = (hacker1.length);

let charactersNavigator = (hacker2.length);

if (hacker1.length > hacker2.length ) {
  console.log(`The driver has the longest name, it has ${charactersPilot} characters.`);
}
if(hacker1.length < hacker2.length) {
  console.log(`The navigator has the longest name, it has ${charactersNavigator}`);
}
if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${charactersPilot} characters each beach!`) //:P
}

for (let kaka of hacker1) {
    console.log(kaka.toUpperCase());
}
let reverse='';

for (let i = hacker2.length - 1; i >= 0; i--) { 
        reverse += hacker2[i]; } 

console.log(reverse);

let lexicOrder1 = ["hacker1","hacker2"];
//No consigo que lexicOrder1 me referencia las variables ya declaradas hacker1 y hacker2.

  if (lexicOrder1[0] > lexicOrder1[1]) {
    console.log(`The driver's name goes first.`)
  }
  if (lexicOrder1[0] < lexicOrder1[1]) {
    console.log(`Yooh!!! The navigator goes first definitely.`)
  }
  if (lexicOrder1[0] === lexicOrder1[1]) {
    console.log(`What the Heck!!!You both have the same name?`)
  }
  
  