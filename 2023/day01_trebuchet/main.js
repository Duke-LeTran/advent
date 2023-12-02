console.log('hello nodejs!');

// process args
console.log(process.argv);


// process args
console.log(process.argv.slice(2));

// print env
// console.log(process.env);

// I. var, let const -----------------------------------------------------------
// var is locally scoped
var greeter = 'hey hi';

function myFunction() {
    var hello = 'hello world from the inside';
    console.log(hello)
}

console.log(greeter);
console.log(myFunction()); // error

// II. Loops -------------------------------------------------------------------
// https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript
// iterating through a list
var ls = ['a', 'b', 'c', 'd']
// method 1
console.log('-------------------------- 1 ---------------------------')
var arr_max_len = ls.length
for (var i=0; i < arr_max_len; i++){
    // console.log(i)
    console.log(i, ls[i]);
}
// method 2
console.log('-------------------------- 2 ---------------------------')
ls.forEach(function(item, index) {console.log(item,index);})
console.log('-------------------------- 3 ---------------------------')
// method 3
for (const i of ls) { 
    console.log(i)
};