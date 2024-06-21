// Create a function called reverse for the String prototype that will allow the following functionality:

// "String".reverse();// => returns "gnirtS"
// "Super awesome string".reverse();// => returns "gnirts emosewa repuS"

var a = "String"
var b = "Super awesome string"


function backwards(c) {
    var d = ''
    for(var i = c.length-1; i >-1; i--) {
        d += c[i]
        console.log(d)
    }
    return d
}

// backwards(a)
// backwards(b)

// kinda like using oop/class methods String.prototype is like the instance created by the class and calling it .function name is running the function on the instance.
String.prototype.reverse = function () {
    var d = ''
    for(var i = this.length-1; i >-1; i--) {
        d += this[i]
        console.log(d)
    }
    return d
}
"Super awesome string".reverse()