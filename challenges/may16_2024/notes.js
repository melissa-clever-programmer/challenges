// #1

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// label the months by number
// determine what integers fall into what quarter
// conditionals?
// modulus?

// if month between 1-3 return 1 elseif 4-6 return 2 elseif 7-9 return 3 else return 4

function quarter(month) {
    if(month >= 1 && month <= 3) {
        console.log(1)
    }
    else if(month >= 4 && month <= 6) {
        console.log(2)
    }
    else if(month >= 7 && month <= 9) {
        console.log(3)
    }
    else  {
        console.log(4)
    }
}

quarter(5)
quarter(12)



// #2

// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.


// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

// flag = true
// loop through list
// if i = flick (if flag = true change flag = false else flag = true)
// create empty array and push flag into array
// print new array

function flip(arr){
    var flag = true
    var newArr = []
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === 'flick') {
            if(flag === false) {
                flag = true
            } else {
                flag = false
            }
            // flag = !flag // !flag just simply takes flag and since it is a boolean simply reverses the value
        }
        newArr.push(flag)
    }
    return newArr
}
console.log(flip(['flick', 'chocolate', 'adventure', 'sunshine','bicycle', 'jarmony', 'flick', 'sheep', 'flick','bicycle', 'jarmony', 'flick', 'sheep', 'flick','bicycle', 'jarmony', 'flick', 'sheep', 'flick','flick', 'chocolate', 'adventure', 'sunshine','flick', 'chocolate', 'adventure', 'sunshine','flick', 'chocolate', 'adventure', 'sunshine','bicycle', 'jarmony', 'flick', 'sheep', 'flick','bicycle', 'jarmony', 'flick', 'sheep', 'flick','bicycle', 'jarmony', 'flick', 'sheep', 'flick','flick', 'chocolate', 'adventure', 'sunshine','flick', 'chocolate', 'adventure', 'sunshine']))
console.log(flip(['flick', 'chocolate', 'adventure', 'sunshine']))
console.log(flip(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))