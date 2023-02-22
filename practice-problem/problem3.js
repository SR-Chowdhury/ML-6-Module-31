const func = arr => {
    let sum = 0;
    for (const element of arr) {
        const sqr = Math.pow(element, 2);
        sum += sqr;
    }
    const average = sum / arr.length;
    return average;
}

const arr = [2, 4, 6, 8, 10];

console.log(func(arr));
