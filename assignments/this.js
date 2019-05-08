/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global Scope: When 'this' is not bound to anything and references the window or global scope.
 * 2. Implicit Binding: When you use 'this' inside of a function that is part of an object, 'this' references the object.
 * 3. New Binding: When you create a constructor function, 'this' refers to an instance of that constructor function.
 * 4. Explicit Binding: When you use the call or apply method to directly bind this to an object
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

const windowThis = this;

console.log(windowThis);

// Principle 2

// code example for Implicit Binding

const object = {
  name: "Michael",
  greeting: "Hi",
  sayHello: function() {
    return `Hello, my name is ${this.name}.`;
  }
};

console.log(object.sayHello());

// Principle 3

// code example for New Binding

function Person(name) {
  this.name = name;
  this.greeting = "Welcome to the constructor";
  this.speak = function() {
    console.log(`${this.greeting}, ${this.name}`);
  };
}

const mike = new Person("Mike");
const jeff = new Person("Jeff");

mike.speak();
jeff.speak();

// Principle 4

// code example for Explicit Binding

function speak2() {
  console.log(`${this.greeting}, ${this.name} is with explicit binding`);
}

speak2.call(object);
