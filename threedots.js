const firstNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondNumber = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const thirdNumber = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// const allNumber = firstNumber.concat(secondNumber).concat(thirdNumber).concat([100]);

const allNumber = [...firstNumber, ...secondNumber, ...thirdNumber, 100]

console.log(allNumber);

const business = 650;
const minister = 450;
const sochib = 250;
// const maximum = Math.max(business, minister, sochib);
const all = [650, 750, 850, 950];
const maximum = Math.max(...all)
console.log(maximum)

