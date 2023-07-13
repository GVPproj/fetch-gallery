// a 'clean shuffle' that uses recursion and doesn't mutate the input

export default function recursiveShuffle(arr) {
    let shuffled = [] // array to return each time
    if (!arr.length) {
       return shuffled // BASE CASE: break out of recursion if source array has no elements
    }
    let i = Math.floor(Math.random() * arr.length) // a random index from within array length
    shuffled.push(arr[i]) // push randomly indexed element from old array into new array
    let slicedArray = arr.slice(0, i).concat(arr.slice(i + 1)) // a new array w/o pushed element
    return shuffled.concat(recursiveShuffle(slicedArray)) // RECURSIVE CASE: return shuffled array merged w/ self-call(on sliced array)
 }