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
  //Event target element
  val = e.target; //<a href="#" class="clear-tasks btn black">Clear Tasks</a>
  val = e.target.id;//blank as it does not have an id
  val = e.target.className; //clear-tasks btn black
  val = e.target.classList;
    /* DOMTokenList(3) ["clear-tasks", "btn", "black", value: "clear-tasks btn black"]
    0: "clear-tasks"
    1: "btn"
    2: "black"
    length: 3
    value: "clear-tasks btn black"
    __proto__: DOMTokenList */
  // e.target.innerText = 'Hello'; // changes button text to Hello

  //Event type
  val = e.type; //click
  console.log(val);
}
//Now you can see the MouseEvent object in the console, with all its properties
//most important property the target property.
//target represents the element that the event actually happened on, in this case the a tag.