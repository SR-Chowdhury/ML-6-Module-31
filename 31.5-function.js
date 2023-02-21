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
 * Syntax [simplicity return in arrow function but explicity return in regular function]
 * Argument binding
 * this [Regular function has own this, but arrow has no this]
 * No duplicate named parameters [allowed in regular function but not allowed in arrow function though it is not good practice]
 * function hoisting [Hositing allow in regular function but not allow in arrow function]
 * methods
 * Read more: https://medium.com/geekculture/regular-vs-arrow-function-1f8140fbcece
 */