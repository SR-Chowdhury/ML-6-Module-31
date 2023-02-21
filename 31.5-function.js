/**
 * 31-5 Arrow function, multiple parameter, function body
 */

// Function decleration: defines a function with the specified parameters.
function add1 (a, b) {
    return a + b;
}

// Function expression: used to define a function inside an expression
// N>B You can't use function expressions before you create them: like  console.log(x)
const x = function add2(a, b) {
    return a + b;
}

// arrow function
const y = (a, b) => a + b;

console.log(y(5, 2));

/**
 * Interview Quesiton: Difference between regular / decleartion funciton , expression and arrow function
 */

/**
 * Answer: The differecne are as follows:
 * Syntax
 * Argument binding
 * this
 * No duplicate named parameters
 * function hoisting
 * methods
 * Read more: https://medium.com/geekculture/regular-vs-arrow-function-1f8140fbcece
 */