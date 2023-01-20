/* ---------------------------------- Week 4 Assignment ---------------------------------- */

//Exercise 4.1 --------------------------------------------------------------------------------

//Create a function which generates a random two digit number.
function getNumber() {
  let x = Math.floor(Math.random() * 100 + 1);
  return x;
}

//create a function which accepts a function as an agrument (callback function)
function checkNumber(callback) {
  let x = callback();
  if (x % 5 === 0) {
    console.log(`x = ${x} Number is Divisible by 5`);
  } else {
    console.log(`x = ${x} Number is Not Divisible by 5`);
  }
}

//Call the function and pass the random number generating number as an argument.
checkNumber(getNumber);

//Exercise 4.2 --------------------------------------------------------------------------------

//Create a function (class) for creating other objects based on it and assign it to variable "Person".
let Person = function (name, age) {
  this.name = name;
  this.age = age;
};

//Create Teacher Object based on "Person" Class.
let Teacher = new Person("Hari", 24);

//Write the "teach" method in the prototype of "Person" Class.
Person.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

//Invoke the "teach" Method on the Teacher Object with the string argument for subject name.
Teacher.teach("Maths");


//Exercise 4.3 --------------------------------------------------------------------------------

//Create a function to implement Fibonacci numbers using iterators
const fibonacciNumbers = (n) => ({
  [Symbol.iterator]: () => {
    let i = 1;
    let old = 0;
    let new1 = 0;
    return {
      next: () => {
        if (i++ <= n) {
          [old, new1] = [new1, old + new1 || 1];
          return { value: old, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
});

console.log([...fibonacciNumbers(9)]);
