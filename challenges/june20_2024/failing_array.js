function withoutLast(arr) {
    // Fix it
    // big arrays? => nope length of 5 still errored
  //   int > 9? => nope we popped 2 but it then popped 3
    console.log(arr)
  //   arr.pop(); // removes the last element
  //   console.log(arr)
    if(arr.length > 5) {
      arr.pop()
      arr.pop()
    } else {
      arr.pop()
    }
    console.log(arr)
    return arr;
  }


// with arr[0] > o
//   [ 60, 5, 23, 40, 28 ] = expected [ 60, 5, 23 ] to deeply equal [ 60, 5 ]
// [57, 20, 53, 51, 92,3, 77,  9,  6] = expected [ 57, 20, 53, 51, 92, 3, 77 ] to deeply equal [ 57, 20, 53, 51, 92, 3 ]

// with arr.length > 5
// [19, 17, 51, 80,31, 66, 30, 54] = expected [ 19, 17, 51, 80, 31, 66 ] to deeply equal [ 19, 17, 51, 80, 31 ]
// [27, 61, 94, 65, 38, 38,74, 30, 88, 15, 90, 26,7, 74] = expected [ 27, 61, 94, 65, 38, 38, 74, 30, 88, 15, 90, 26 ] to deeply equal [ 27, 61, 94, 65, 38, 38, 74, 30, 88, 15, 90 ]