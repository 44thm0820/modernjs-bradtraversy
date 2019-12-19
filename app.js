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

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  if (e.target.parentElement.className === 'delete-item secondary-content') {
    console.log('delete item');
  }
}
//now will work, but it is not a great way to do it, because if you want to later add a new class to the element and save, the last one will not work

