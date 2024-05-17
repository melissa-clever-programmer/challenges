// #1

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.



function getQuarter(month) {
    return Math.ceil(month / 3);
}



// #2

// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.




function flickSwitch(arr) {
    let result = [];
    let currentBoolean = true;
    
    for (let item of arr) {
        if (item === 'flick') {
            currentBoolean = !currentBoolean;
        }
        result.push(currentBoolean);
    }
    
    return result;
}

console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine','bicycle', 'jarmony', 'flick', 'sheep', 'flick','bicycle', 'jarmony', 'flick', 'sheep', 'flick','bicycle', 'jarmony', 'flick', 'sheep', 'flick','flick', 'chocolate', 'adventure', 'sunshine','flick', 'chocolate', 'adventure', 'sunshine','flick', 'chocolate', 'adventure', 'sunshine','bicycle', 'jarmony', 'flick', 'sheep', 'flick','bicycle', 'jarmony', 'flick', 'sheep', 'flick','bicycle', 'jarmony', 'flick', 'sheep', 'flick','flick', 'chocolate', 'adventure', 'sunshine','flick', 'chocolate', 'adventure', 'sunshine']))