// I. var, let const -----------------------------------------------------------
// var is locally scoped
// var can still be used, bit is considered
// use let and const if you can then...
var greeter = 'hey hi';

function myFunction() {
    var hello = 'hello world from the inside';
    console.log(hello)
}

console.log(greeter);
console.log(myFunction()); // error

// One of the main differences is the scope of the variables. Scope means where the
// variables are available for use in your code. var variables can have either 
// global or function scope, which means they can be accessed either anywhere in 
// your code or only within the function where they are declared. let and const 
// variables have block scope, which means they can only be accessed within 
// the block where they are declared, such as a loop, an if statement, 
// or a try-catch block.

// Another difference is the redeclaration and reassignment of the variables. 
// Redeclaration means declaring the same variable name more than once in the 
// same scope. Reassignment means changing the value of the variable after it is 
// declared. var variables can be both redeclared and reassigned, which can lead 
// to confusion and errors. let variables can be reassigned but not redeclared, 
// which prevents accidental duplication of variable names. 
// const variables can neither be redeclared nor reassigned, 
// which makes them immutable and reliable.

// A third difference is the hoisting of the variables. Hoisting is a 
// JavaScript mechanism where variables and function declarations are moved to 
// the top of their scope before code execution. This means that you can use a 
// variable before it is declared, but the value will be undefined until the 
// declaration is reached. var variables are hoisted to the top of their scope, 
// which can cause unexpected behavior and bugs. let and const variables are not 
// hoisted, which means you have to declare them before you use them, which is a 
// good practice and avoids errors.

