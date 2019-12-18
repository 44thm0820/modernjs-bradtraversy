// document.querySelector('.clear-tasks')
//   .addEventListener('click', function(e){
//     console.log('Hello World');
//     // e.preventDefault();
//   });

//Having a named function is much neater, as shown below
document.querySelector('.clear-tasks')
  .addEventListener('click', onClick);
function onClick(e) {
  let val;
  val = e;
  console.log(val);
}
//Now you can see the MouseEvent object in the console, with all its properties
//most important property the target property.
//target represents the element that the event actually happened on, in this case the a tag.