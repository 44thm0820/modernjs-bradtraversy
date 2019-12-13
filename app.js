// // document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red'; // get element by class
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// //get element by tag then class
// console.log(listItems);

// // document.getElementsByTagName - notice identical to results above but by using getElementsbyTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';
// //get element only by tag

// // Convert HTML collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

//document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');
items.forEach(function(item, index){
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc'; //set odd rows to dark grey background
});


console.log(items);