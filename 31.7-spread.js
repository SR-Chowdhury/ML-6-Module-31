/**
 * 31-7 Spread operator, array max, copy arrays
 */
/**
 * Spread Operator: Allow us to quickly copy all or part of an existing array or object into another array or object
 */

// Find Maximum value
const num = Math.max(10, 7, 50, 42, 23);
console.log('Maximum value: ' + num);


const arr1 = [2, 4, 6, 8, 2, 3, 5];
const maxArr1 = Math.max(arr1);
console.log('Max array value: ' + maxArr1);
// Output: NaN; cause arr1 = [2, 4, 6, 8, 2, 3, 5]

// If you spread the arr1 it will return values not an array
const maxArr2 = Math.max(...arr1);
console.log(arr1); //2, 4, 6, 8, 2, 3, 5
console.log('Max array value: ' + maxArr2);

const num1 = [10, 20, 30, 40];
const num2 = num1;
num1.push(50);

console.log(num1); // Output: [ 10, 20, 30, 40, 50 ]
console.log(num2); // Output: [ 10, 20, 30, 40, 50 ]

// but this is not accepted cause we updated num1 value not num2;
// Cause non primitive value always took reference thats why make change everywhere
// Solve this problem we use ...spread operator

const num3 = [10, 20, 30, 40];
const num4 = [...num3];
num4.push(50);

console.log(num3); //[ 10, 20, 30, 40 ]
console.log(num4); //[ 10, 20, 30, 40, 50 ]

// Even we can decleare value before or after along with spread operator
const num5 = [10, 20, 30, 40];
const num6 = [0, ...num5, 60];
num4.push(50);

console.log(num5); //[ 10, 20, 30, 40 ]
console.log(num6); //[ 0, 10, 20, 30, 40, 60 ]