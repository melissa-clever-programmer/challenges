// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// if array empty or 1 index return 0
// loop
// sort in descending order newList (ts has sort function)
// loop 
// i[0] - i[1] + i[1] - i[2] newList2
// sum of newList2

function sumDiff(arr: number[]) {
    if(arr.length <= 1) {
        return 0
    }
    arr.sort((a, b) => b - a)
    console.log(arr)
  let sum = 0
  for(let i =0; i <arr.length -1; i++) {
    sum += arr[i] - arr[i + 1]
  }
  console.log(sum)
  return sum
}

sumDiff([2,7,4])