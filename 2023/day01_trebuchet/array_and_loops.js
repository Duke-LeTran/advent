//
// I. Arrays
let a1 = new Array() // Empty Array
let a2 = new Array() // Array of 10 elements
let a3 = [] // Empty Array
let a4 = [1, 2, 3] // Array of 3 elements
let a5 = [1, 2, "b"] // No problem

console.log(a5[2]) // 3
console.log(a5[3]) // undefined
console.log(a4.length) 
console.log(len(a5))

let fruits = []
fruits.push("Kiwi")  // appends/adds Kiwi to end of list  
fruits.pop("Kiwi")  // removes Kiwi from list

// II. Loops -------------------------------------------------------------------
// https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript
// iterating through a list
var ls = ['a', 'b', 'c', 'd']

// method 1
console.log('-------------------------- 1 ---------------------------')
// this is the most stereotypical
// var arr_max_len = ls.length
// for (var i=0; i < arr_max_len; i++){
for (var i=0; i < arr.length; i++){
    // console.log(i)
    console.log(i, ls[i]);
}

// method 2
console.log('-------------------------- 2 ---------------------------')
ls.forEach(function(item, index) {console.log(item,index);})

// method 3
console.log('-------------------------- 3 ---------------------------')
for (const i of ls) { 
    console.log(i)
};