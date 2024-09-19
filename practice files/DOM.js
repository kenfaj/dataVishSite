//many ways to manipulate the DOM
//document object model
//DOM methods

/* single element */
console.log(document.getElementById('table'));
console.log(document.querySelector('table'));

/* multiple elements */
console.log(document.getElementsByTagName('li'));//returns an html collection
console.log(document.getElementsByClassName('.list'));//returns an html collection
console.log(document.querySelectorAll('.list'));//returns a nodelist

//html collection vs nodelist
/* html collection cannot use array methods, you need to manually convert it to an array to use methods
nodelist can */

//testing different DOM manipulation
const ul = document.querySelector('ul');
console.log();
/* ul.remove(); */
/* ul.lastElementChild.remove(); */
ul.firstElementChild.textContent = 'damn';
ul.children[1].innerHTML = '<h1>hello<h1>';
ul.lastElementChild.innerHTML = '<h1>hello<h1>';

//styling/changing css in js
ul.style.background = 'lightblue';

//adding event listener(also recommended to read about inputlisteners)
//example event listener for a form and manipulating li elements in the DOM
const submit = document.getElementById('submit');
const names = document.getElementById('name');
const msg = document.getElementById('msg');

let levent = e => {
    e.preventDefault();
    
    if(names.value !== ''){
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(names.value));
        ul.appendChild(li);
        names.value = '';
    }else{//error
        msg.textContent = 'Be sure to enter the name dumbass';

        setTimeout(() => {
            msg.textContent = '';
        },3000);
    }
}
submit.addEventListener('click', levent);

//note: the DOM is just a representation of the html
//it doesnt save manipulated data to the html
//if refreshed, it will be lost

//to save data, we can use backend to interact with some database
//nodejs, php, python
//to send request from the front end, we can use some thing like
//fetchAPI, AJAX

