/** 
* 31.3 Default parament  
*/

function add(a, b) {
    const total = a + b;
    return total;
}

console.log(add(10, 5));

// Before ES6(2015) we validate NaN / the empty arguemnt: Method 1

function add1(a, b) {
    if (a == undefined) {
        a = 0;
    } else if (b == undefined) {
        b = 0;
    }
    const total = a + b;
    return total;
}

console.log(add1(30));

// Before ES6(2015) we validate NaN / the empty arguemnt: Method 2

function add2(a, b) {
    a = a || 0;
    b = b || 0;
    
    const total = a + b;
    return total;
}

console.log(add2(40));


// After ES6 came, Mehtod 1
function add3 (a = 0, b = 0) { // this is call default parament
    return a + b;
}

console.log(add3(8));
