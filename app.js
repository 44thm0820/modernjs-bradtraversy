// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item
lis[0].remove();

//Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
// console.log(firstLi.children[0]);
const link = firstLi.children[0]; //getting the a tag

let val;

val = link.className; //this gives you a string of all the classes, each separated by a single space
val = link.classList; //this gives you an arrayLike domTokenList where you can access each element like an array
val = link.classList[0];
link.classList.add('test');
val = link;
console.log(val);

