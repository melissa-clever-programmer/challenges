// https://www.codewars.com/kata/57eae65a4321032ce000002d
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


// loop through string of integers
// conditional is < 5 = 0 otherwise 1

let intString = '1928384756203847539'
let binary = ''
for(let i = 0; i < intString.length; i++) {
    // console.log(intString[i])
    if(parseInt(intString[i]) < 5) {
        // binary += 0
        binary += parseInt(0)
        // console.log(intString[i])
    } else {
        // binary += 1
        binary += parseInt(1)
    }
    // console.log(binary)
}
console.log(binary)