let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes - returns a Nodelist that may contain text nodes - not good result
val = list.childNodes;
// val = list.childNodes[0].nodeName; // console gives us #text
// val = list.childNodes[0].nodeType; // console gives us the number 3 - why?
// val = list.childNodes[1].nodeType; // console gives us the number 1 - why?
val = list.childNodes[3].nodeType; // console gives us the number 8 - why?

//nodeType is a numerical code that refers to the type of node as the legend shows below:
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype



// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild; // gives us the first node of a nodeList
val = list.firstElementChild // gives us the first element of the HTMLCollection, not giving us any text nodes

// Last child
val = list.lastChild; // gives us the last node of a nodeList
val = list.lastElementChild // gives us the last element of the HTMLCollection, not giving us any text nodes

// Count child elements
val = list.childElementCount; // gives us 5, the length of the HTML collection of the children

// Get parent node
val = listItem.parentNode;  //gives ul - which is a member of a nodeList
val = listItem.parentElement; // gives ul - which is a member of HTML collection
// Get parents of parents
val = listItem.parentElement.parentElement // gives div class of card-action


// Get next sibling
val = listItem.nextSibling; // gives us a textNode as this is part of a nodelist
val = listItem.nextElementSibling; // gives us an element as this is part of an HTML Collection - what we want!
val = listItem.nextElementSibling.nextElementSibling; //down 2
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; // down 2 up 1, gives us li element containing the text 'Hello' - this is traversing the DOM!!!

// Get previous sibling
// val = listItem.previousSibling; // gives us a textNode as this is part of a nodelist
// val = listItem.previousElementSibling; // null


console.log(val);
