// remove spaces and punctuation
// remove all capitals

// .toLowerCase() => will remove all capitalization
// if space or non-alpha replace with ''
// use regex to replace?
// pointers to first index and last index
// in a loop first index +1 last index -1
// checking if same chars
// when first index > last index stop unless not matching before hand


function palindrome(s) {
    // change all char's to lowercase
    let lowerStr = s.toLowerCase()
    // console.log(lowerStr)
    // remove all spaces and non-alpha chars
    let removeSpace = lowerStr.replace(/[^a-z0-9]|_/g, "")
    console.log(removeSpace)
    console.log(typeof removeSpace)
    // Making removeSpace into an array splitting on each char then using .reverse() as it only works on arrays to reverse the order then .join to put back into a string.  both split and join are using empty char (not a space) for the separation/join
    let rev = removeSpace.split('').reverse().join('')
    console.log(rev)
    console.log(removeSpace === rev)
}

// palindrome("Race, Car")
// palindrome("race a car")
// palindrome('palindrome')
palindrome('1234321')