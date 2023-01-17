//----------------Assignment # 1 - Create a Memoized Function. --------------------------------

let memoAdd = () => {
  let cache = [];
  return (a, b) => {
    if (cache.length !== 0) {
      for (let i = 0; i < cache.length; i++) {
        if ((cache[i][0] === a && cache[i][1] === b) || (cache[i][0] === b && cache[i][1] === a)) {
          console.log("Returning result from cache...");
          return cache[i][2];
        } else {
          let result = a + b;
          cache.push([a, b, result]);
          return result;
        }
      }
    } else {
      let result = a + b;
      console.log("Calculating Result...");
      cache.push([a, b, result]);
      return result;
    }
  };
};

let addme = memoAdd();
// console.log(addme(12, 13));
// console.log(addme(5, 6));
// console.log(addme(12, 13));
// console.log(addme(13, 12));

//----------------Assignment # 2 - Use .call(), .apply() and .bind() -----------------

//Create Object with function:
let lion = {
  name: "lion",
  hunt: function () {
    console.log(`${this.name} hunts wild animals`);
  },
  eat: function (...args) {
    console.log(`${this.name} eats ${args[0]} and ${args[1]}`);
  },
};

//Create a new Object tiger
let tiger = function () {
  fname = "Wagh";
};

//Usage of .call() Method
lion.hunt.call(tiger.fname); //Wagh hunts wild animals

//Usage of .bind() Method
let tigerhunts = lion.eat.bind(tiger.fname);
tigerhunts("hare", "buffalo");

//Usage of .apply() Method
lion.eat.apply(tiger.fname, ["deer", "rabbit"]);

//----------------Assignment # 3 -  -----------------
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }

  return [increment, log];
}
const [increment, log] = createIncrement();

increment();
increment();
increment();
log(); // What is logged?

increment();
log();

// Explanation for the Output
/*
The output appears as it is owing to the concept of closure which preserves the value assigned to variables in a particular lexical scope when they are accessed from within a functional scope.

*/

//----------------Assignment # 4 -  -----------------

// The refactored code is as follows:
function createStack() {
  items = [];
  return {
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    },
  };
}

const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop();
// stack.items;
