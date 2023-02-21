/**
 * 31-8 (advanced) Object and Array Destructuring
 */

 
// Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

// Object Destructuring
const obj = {
    name: 'Shihan',
    age: 30,
    phone: 07453,
    address: 'UK'
}

const {name, age} = obj;
console.log(name, age); // Shihan 30

// N>B> object property name and destructruing value name should be same



// Array desctructuring
const arr1 = [2, 6, 4, 10, 5];
const arr2 = ['shakib', 'tamim', 'mash'];

const [firstNumber, secondNumber] = arr1;
console.log(secondNumber, firstNumber); // 6 2

const [allrounder, batter] = arr2;
console.log(batter, allrounder); // tamim shakib

const x = (a, b) => ['Alim', 'Halim'];
const [chacha, baba] = x();
console.log(baba, chacha); // Halim Alim