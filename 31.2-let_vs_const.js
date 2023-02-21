/**
 * Let Vs Const
 */

// Let is reassignable and is only available for use within that block {}.

let fName = "Shihan";
fName = 'Tanjima Chowdhury';
console.log(fName); // It works fine

// Const is not re assignable and is only available for use within that block {}.

const lName = 'chowdhury';
lName = 'Chy'; 
console.log(lName) // TypeError: Assignment to constant variable.

const arr = [2, 4, 6, 8];
arr.push(10);
console.log(arr); //[ 2, 4, 6, 8, 10 ]; it means we modified the array not assigned a new value instead of previous value

for(let i = 0; i< 5; i++) {
    const num = i;
    console.log(num); //its work fine; here we modified the value not re assigned
}
