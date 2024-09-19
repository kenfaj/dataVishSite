

function sum(num1=1,num2){//added 1 as a default value for num1
    console.log(num1+num2);
}
sum(3);//returns Nan(not a number)
sum(undefined,3);//returns 4

//arrow function
const sumv2 = (num1 = 1, num2) => num1 + num2;

console.log(sumv2(undefined, 3));

//trick to use
todos.forEach((todo) => console.log(todo.text));
