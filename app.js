// alert('Hello');
// console.log('Hello World');
// console.log(123);
// console.log(true);
// var greeting = "Hello";
// console.log(greeting);
// console.log([1,2,3,4,]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error('This is some error');
// console.clear();
// console.warn('This is a warning');
// console.time('Hello');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
// console.timeEnd('Hello');

// Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8,2);
// val = Math.min(2,33,4,1,55,6,3,-2);
// val = Math.max(2,33,4,1,55,6,3,-2);
// val = Math.random();
// val = Math.floor(Math.random() * 20 + 1); // get random number betwen 1 and 20
// val = Math.floor(Math.random() * 20 ); // get random number betwen 0 and 19

// //String object
// const firstName = 'George';
// const lastName = 'Washington';
// const age = 36;
// const str = 'Hello there my name is George';
// const tags = 'web design, web development, programming';

// let val;

// val = firstName + lastName;

// //Concatenation
// val = firstName + ' ' + lastName;

// //Append
// val = 'Abraham ';
// val += 'Lincoln';
// val = 'Hello, my name is ' + firstName + ' and I am ' + age;
// //Escaping;
// val = 'That\'s awesome, I can\'t wait';

// //Length
// val = firstName.length;

// //concat()
// val = firstName.concat(' ', lastName);

// //change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// //indexOf()
// val = firstName.indexOf('r');
// val = firstName.lastIndexOf('e');

// //charAt()
// val = firstName.charAt('2');
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(0,4);

// // slice()
// val = firstName.slice(0,4);
// val = firstName.slice(-3);

// // split()
// /*comes in handy when you have a form on your blog post and you had them enter comma separated tags
// */
// val = str.split(' ');
// val = tags.split(',');

// //replace()
// val = str.replace('George', 'Martha');

// //includes()
// val = str.includes('Hello');

// console.log(val);

// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert

// alert ('Hello World');

// Prompt - similar to alert except it takes an input
// const input = prompt();
// alert(input);

// Confirm - used when deleting something - because user may be deleting by accident
// if (confirm('Are you sure')) {
//   console.log('YES'); // if you hit 'OK' button
// } else {
//   console.log('NO'); // if you hit 'Cancel' button
// }

// The above aren't the best looking things
// I would suggest putting alerts if you put error message in form validation, I would suggest using the DOM and then outputting a nice looking bootstrap alert.  the above are the 90s type web applications, but they are there for you to use

let val;

// Outer height and width;
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width;
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;

console.log(val);