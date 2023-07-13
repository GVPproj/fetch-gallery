export default function recursiveShuffle(arr) {
    let shuffled = [] // array to return
    if (!arr.length) {
       return shuffled // base case to break out of recursion
    }
    let i = Math.floor(Math.random() * arr.length)
    shuffled.push(arr[i]) // push randomly indexed element into array
    let slicedArray = arr.slice(0, i).concat(arr.slice(i + 1))
    return shuffled.concat(recursiveShuffle(slicedArray))
 }