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

//String object
const firstName = 'George';
const lastName = 'Washington';
const age = 36;
const str = 'Hello there my name is George';
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Abraham ';
val += 'Lincoln';
val = 'Hello, my name is ' + firstName + ' and I am ' + age;
//Escaping;
val = 'That\'s awesome, I can\'t wait';

//Length
val = firstName.length;

//concat()
val = firstName.concat(' ', lastName);

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

//indexOf()
val = firstName.indexOf('r');
val = firstName.lastIndexOf('e');

//charAt()
val = firstName.charAt('2');
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0,4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
/*comes in handy when you have a form on your blog post and you had them enter comma separated tags
*/
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('George', 'Martha');

//includes()
val = str.includes('Hello');

console.log(val);