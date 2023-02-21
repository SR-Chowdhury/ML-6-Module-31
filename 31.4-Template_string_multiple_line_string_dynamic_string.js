/**
 * 31-4 Template string, multiple line string, dynamic string
 * `` is called backtick and used for mulitple line string
 * ${} is called template string
 */

// Before ES6 Multiline string

const a = 10;
const b = 20;

const sum = 'Sum of ' + a + ' + ' + b + ' = ' + (a+b);
console.log(sum);  

// After ES6 came

const x = 100;
const y = 200;
const arr = [5, 2, 9, 4];

const result = `Sum of ${x} + ${y} = ${x + y + arr.length}`;
console.log(result);