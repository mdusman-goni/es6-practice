// function dubbleIt(number) {
//     return number * 2;
// }

const dubbleIt1 = function myFunction(num) {
    return num * 2
}

const dubbleIt2 = num => num * 2;

const dubbleIt3 = (x, y) => x + y;

const dubbleIt4 = () => 5;

const dubbleIt5 = (x, y) => {
    const sum = x + y;
    const minus = x - y;
    const result = sum * minus;
    return result;
}

const result = dubbleIt5(20, 10);
console.log(result)