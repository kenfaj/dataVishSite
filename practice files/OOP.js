//constructive function - creating an object
function Person(firstname, lastname, age, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.dob = new Date(dob);
    this.getBirthYear = function(){//add methods to the object
        return this.dob.getFullYear();
    }
}

//instantiate
const person1 = new Person('John', 'Doe', 50, '4-3-1980');
const person2 = new Person('Mary', 'Doe', 50, '4-3-1980');
console.log(person1.getBirthYear());

console.log(person1);
console.log(person2);//you can see the functions for the object also
//to avoid including the function when logging the object
//we can add the function to the prototype of the object
/*Prototype is a hidden object in the User made object, we can instead put the function for you user made objects in the prototype object*/
Person.prototype.getFullName = function(){
    return `${this.firstname} ${this.lastname}`;
}
console.log(person2);//you can see that the getFullName function is not visible in the object Person
console.log(person2.getFullName());

//es classes
//classes are just syntactic sugar(make things easier to read)
//all the same as the object on top
//note: but the functions made in the class are not visible in the object, but automatically placed in the prototype object
class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
Car.getBirthYear = function(){
    let date = new Date();
    return date.getFullYear();
}

const myCar = new Car('Ford', 2010);
console.log(myCar);