const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

taskInput.addEventListener('keydown', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE:${e.type}`);

  console.log(e.target.value); //to capture each key as it is typed

  heading.innerText = e.target.value; //now the heading will include whatever i type.

  //Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}