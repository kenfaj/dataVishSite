/*
console.log('aaa');
console.error('asdasd');
console.warn('warningggg');
*/
/*use: let, const/ var is not recommended because it is a global variable*/
/*dataytpes: String, Numbers, Boolean, null, undefined, Symbol*/

const name = 'lyndon';
const age = 99;
const iq = 0.01;
const isTrue= true;
const x = null;
const  y = undefined;
let z;//also undefined

console.log(typeof name);
console.log(typeof age);
console.log(typeof iq);
console.log(typeof isTrue);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
//concatenation, old fashion
console.log("bobo si "+name);
console.log('bobo si ${bobo}');
console.log(`bobo si ${name}`);

//string manipulation
//same java function names
//split function is cool, makes an array when split string
const s = `tech, comp, it`;

console.log(s.split(`, `));

//arrays
const numbers = new Array(1,2,3,3,4,5);
const fruits = ['apples', 'oranges', 'pears'];
console.log(numbers);
console.log(fruits);

//arrays can also hold multiple values
const array = ['apples','oranges','pears', 1,true];
fruits[3] = 'grapes';//overwrite
fruits.push('mangoes');//puts at the end
fruits.unshift('berries');//puts at the beginning
fruits.pop();//removes last element, and returns it
console.log(Array.isArray('apples'));//checks if its an array
console.log(array.indexOf('oranges'));//finds index
console.log(array);

//object literals - like a key value pair, but with multiple datatypes?
const person = {
        firstname: 'John',
        lastname: 'Doe',
        age: 50,
        eyecolor: 'blue',
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY'
        }
}
console.log(person);
console.log(person.firstname);
console.log(person.firstname, person.lastname);
console.log(person.address.city);

//destructuring - making variables inside the object into local variables
const {firstname, lastname, address: {city, state}} = person;
console.log(firstname, lastname, city, state);
person.email = 'jdoe@me.com';
console.log(person);//now, it has an email

