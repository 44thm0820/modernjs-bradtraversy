// document.getElementById()

console.log(document.getElementById('task-title'));

// Get things from the element

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Change styling - normally you would use CSS ... but you can use JavaScript - get away from using jQuery
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';


// Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';