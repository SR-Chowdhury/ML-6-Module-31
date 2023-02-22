const func = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2];
    const maxNumber = Math.max(...newArr);
    return maxNumber;
}

const arr1 = [1, 30, 50, 7, 9];
const arr2 = [2, 40, 6, 8, 10];

console.log(func(arr1, arr2));


