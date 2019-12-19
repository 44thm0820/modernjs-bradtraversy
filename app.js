const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select')

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);

// Keyup
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// task.addEventListener('keypress', runEvent);

// focus - when you click inside of an input and you set it to the focus mode
// task.addEventListener('focus', runEvent);

//blur - opposite of focus
// task.addEventListener('blur', runEvent);

//cut - fires event when user cuts text or command-x
// task.addEventListener('cut', runEvent);

//paste - fires event when user pastes text or command-v
// task.addEventListener('paste', runEvent);

//input - fires event when any edit happens, ie cut or paste,
// task.addEventListener('input', runEvent);

//demonstrating the select list
//Change
select.addEventListener('change', runEvent);


function runEvent(e) {
  console.log(`EVENT TYPE:${e.type}`);

  console.log(e.target.value);

  // heading.innerText = e.target.value; //now the heading will include whatever i type.

  //Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}