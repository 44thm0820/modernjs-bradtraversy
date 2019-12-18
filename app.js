const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// //Click
// clearBtn.addEventListener('click', runEvent);

// //Doublelick
// clearBtn.addEventListener('dblclick', runEvent);

// //Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// //Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// //Mouseenter
card.addEventListener('mouseenter', runEvent);
// //Mouseleave
card.addEventListener('mouseleave', runEvent);
// //Mouseover
card.addEventListener('mouseover', runEvent);
// //Mouseout
card.addEventListener('mouseout', runEvent);

//subtle difference with mouseover and mouseout... mouseenter and mouseleave only fire on the intitial parent element



// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
}