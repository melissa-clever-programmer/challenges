// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// create an empty string
// loop threw array
// use join => should combine words into a string

// console.log("hi", "hi") => hi hi
// console.log("hi" + "hi") => hihi

let arr = ['hello', 'world', 'this', 'is', 'great']
console.log(arr.join(' '))
let newArr = ['Hello', ' ', 'I', 'am', 'Melissa']
console.log(newArr.join(' '))

let test = ''
console.log(test.concat('test01', ' ', 'test02'))

let newString = ''
function sentenceSmash(arr) {
    // return arr.join(' ')
    let newString = ''
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i])
        // newString.concat(arr[i], ' ')
        // if(arr[i] === ' ') {
        //     arr.unshift(' ')
        // }
        if(i != arr.length-1) {
            newString += arr[i] + ' '
        } else {
            newString += arr[i]
        }
        
    }
    return newString
}

console.log(sentenceSmash(arr))
console.log(sentenceSmash(newArr))