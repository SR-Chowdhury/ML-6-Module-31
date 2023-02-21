/**
 * 31-6 More Arrow functions and big arrow function
 */

// Single arrow function with no paramenter; It will return implicity
const x1 = () => console.log('No parameter');

// Multiple arrow function
const x2 = (a, b, c) => {
    const x = a + b + c;
    const xx = x - c;
    return xx;
}

console.log(x2(2, 4, 6));

// When you will use {} in arrow funciton than you must have use return statement

