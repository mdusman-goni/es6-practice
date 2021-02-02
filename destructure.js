const person = { name: 'Md Usman Goni', age: 18, job: 'facebooker', friends: ['rafi', 'ruman', 'rohim', 'mahdi', 'nadim'] };
const { name, job, age } = person;



const complexObject = {
    name: 'abcd',
    info: {
        address: 'Dhaka',
        leader: 'Tiger'
    }
}

const { leader } = complexObject.info
// console.log(name, job, age);
// console.log(name, job, age, address);

const friends = ['sakib khan', 'arman khan', 'amir khan', 'sharukh khan'];
const [first, second, ...third] = friends;
console.log(third)