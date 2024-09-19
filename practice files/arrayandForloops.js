const todos =[
    {
        id: 1,
        text: 'Throwing Trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Boss meeting',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Appointement',
        isCompleted: false
    },
];
//making this array with object literals(key value pairs) into JSON
const todoJSONversion = JSON.stringify(todos);
console.log(todoJSONversion);

//for loops, you can also using while loop similar to java
for (let index = 0; index < todos.length; index++) {
    const element = todos[index];
}
//advanced for loop
for (let todo of todos) {
    console.log(`todotextforloop: ${todo.text}`);
}

//foreach, filter, map, reduce, find, findIndex, some, every, sort
todos.forEach(function(todo){//foreach returns undefined
    console.log(`todotextforeach: ${todo.text}`);
});

//map
const todoText = todos.map(function(todo){//map returns a new array
    return todo.text;//you can also copy a new array
});
console.log(`todoTextmap: ${todoText}`);

//filter
const todoFiltered = todos.filter(function(todo){
    return todo.isCompleted === true;//returns only the objects that have isCompleted as true
});
console.log(`todoFiltered: ${todoFiltered}`);

//reduce
const todoReduced = todos.reduce(function(total, todo){
    return total + todo.text.length;//returns the total length of the text
}, 0);// 0 is the initial value of todoReduced
console.log(`todoReduced: ${todoReduced}`);

//find
const todoFind = todos.find(function(todo){
    return todo.id === 3;//returns the object with id 3
});
console.log(`todoFind: ${todoFind}`);

//findIndex
const todoFindIndex = todos.findIndex(function(todo){
    return todo.id === 3;//returns the index of the object with id 3
});
console.log(`todoFindIndex: ${todoFindIndex}`);

//some
const todoSome = todos.some(function(todo){
    return todo.isCompleted === true;//returns true if any of the objects have isCompleted as true
});
console.log(`todoSome: ${todoSome}`);

//every
const todoEvery = todos.every(function(todo){
    return todo.isCompleted === true;//returns true if all the objects have isCompleted as true
});
console.log(`todoEvery: ${todoEvery}`);

/* YOU CAN CONNECT THESE HIGH ORDER FUNCTIONS TO DO MORE THINGS */
//Example: you can filter out the todos that are not completed and get their text only
const todoExample = todos.filter(function(todo){
    return todo.isCompleted === false;
}).map(function(todo){
    return todo.text;
});
console.log(`todoExample: ${todoExample}`);