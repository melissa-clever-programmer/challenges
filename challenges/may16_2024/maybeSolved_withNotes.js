// #1

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

function getQuarter(month) {
    return Math.ceil(month / 3);
}

// line 5 = creating a function called getQuarter and requesting a parameter of a integer
// line 6 = return the number rounded up to next integer and divided by 3
// line 6 amended = taking the integer provided dividing it by 3 and rounding it up to the next integer

console.log(getQuarter(4))


// #2

// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.


function flickSwitch(arr) {
    let result = [];
    let currentBoolean = true;
    
    for (let item of arr) { // looping through array let item = each index
        result.push(currentBoolean);  // appending to array the current boolean
        if (item != 'flick') { // if index is not = to flick
            currentBoolean = !currentBoolean; // change boolean value
        }
    }
    
    return result;
}

console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']))
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))

function flickSwitch01(arr) {
    let result = [];
    let currentBoolean = true;
    
    for (let item of arr) { // looping through array let item = each index
        
        if (item === 'flick') { // if index is not = to flick
            currentBoolean = !currentBoolean; // change boolean value
        }
        result.push(currentBoolean);  // appending to array the current boolean
    }
    
    return result;
}

console.log(flickSwitch01(['flick', 'chocolate', 'adventure', 'sunshine']))
console.log(flickSwitch01(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))

function flickSwitch02(arr) {
    let result = [];
    let currentBoolean = true;
    
    for (let item of arr) { // looping through array let item = each index
        result.push(currentBoolean);  // appending to array the current boolean
        if (item === 'flick') { // if index is not = to flick
            currentBoolean = !currentBoolean; // change boolean value
        }
        
    }
    
    return result;
}

console.log(flickSwitch02(['flick', 'chocolate', 'adventure', 'sunshine']))
console.log(flickSwitch02(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))