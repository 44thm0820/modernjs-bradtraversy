// // EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// })

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// })

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// })

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// })

//EVENT DELEGATION

const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

function deleteItem() {
  console.log('delete item');
}
//right now only the first list item console.logs delete item when you click it
//event delegation needs to happen in order to allow each of the rest of the list items to console log delete item
//if you dynamically insert a list item using javascript, you also need to use event delegation.