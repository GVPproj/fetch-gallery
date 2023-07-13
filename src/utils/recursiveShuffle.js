export default function recursiveShuffle(arr) {
    let shuffled = [] // array to return each time
    if (!arr.length) {
       return shuffled // break out of recursion when source array has no elements
    }
    let i = Math.floor(Math.random() * arr.length) // a random index from our array length
    shuffled.push(arr[i]) // push randomly indexed element from old array into new array
    let slicedArray = arr.slice(0, i).concat(arr.slice(i + 1)) // we will recursively pass this back in without pushed element
    return shuffled.concat(recursiveShuffle(slicedArray)) // return the shuffled array with another recursion call
 }