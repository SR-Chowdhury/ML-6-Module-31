const func = (arr) => {
    const newArr = [];
    for (const element of arr) {
        if (element.length %2 == 0) {
            newArr.push(element);
        }
    }
    return newArr;
}

const arr = ['shakib', 'mash', 'tamim', 'mahmudullah', 'mushfiq'];
console.log(func(arr));