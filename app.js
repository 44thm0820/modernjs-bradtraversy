// document.getElementById()

console.log(document.getElementById('task-title'));

// Get things from the element

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling - normally you would use CSS ... but you can use JavaScript - get away from using jQuery
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';


// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';