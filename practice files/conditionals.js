const x = 10;

if(x == 10){//using two equals
    console.log(`x is still equal because of the content`);
}
if(x === 10){
    console.log(`x is equal because of the data type`);
}

const y = 5;

if(x > 5 || y > 5){
    console.log(`x is greater than 5 or y is greater than 5`);
}
//ternary operato
const output = x > 5 ? `x is greater than 5` : `x is less than 5`;
console.log(output);

switch(output){
    case `x is greater than 5`:
        console.log(`x is greater than 5`);
        break;
    case `x is less than 5`:
        console.log(`x is less than 5`);
        break;
    default:
        console.log(`x is neither greater than 5 nor less than 5`);
}