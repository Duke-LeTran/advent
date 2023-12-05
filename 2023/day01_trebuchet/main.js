// https://medium.com/geekculture/javascript-vs-python-syntax-cheatsheet-9bc7c59599c6
// https://jsdoc.app/about-getting-started
// https://www.digitalocean.com/community/tutorials/how-to-work-with-files-using-the-fs-module-in-node-js
console.log('hello nodejs!');

// let fs = require('fs');
let fs = require('node:fs');

/**
 * Checks if character is a digit
 * @param {string} input_char the character
 * @return {bool} returns true or false, whether character is a digit
 */
function isDigit (input_char) {
    return !isNaN(input_char)
}

// COLLECT NUMBERS
let line = 'abc12defg34hi5'



// function main() {
//     // READ FILE
//     // ITERATE LINE BY LINE
//     // COLLECT NUMBERS
//     // SUM NUMBERS
// }


let ls_result_number = [];


fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    // console.log(data);
    for (let i = 0; i < data.length; i++ ) {
      if (isDigit(data[i])) {
            console.log(data)
            ls_result_number.push(data[i]);
      }
    };
});

console.log(ls_result_number)