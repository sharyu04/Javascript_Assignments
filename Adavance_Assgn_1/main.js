// A function that adds 10 to the input number

let cache = {}
const addTen = (n) => {
    if (n in cache) {
        console.log("Cached value")
        return cache[n]
    }
    else {
        console.log("Calculating")
        let result = n + 10
        cache[n] = result
        return result
    }
}

console.log(addTen(6))  //calculating
console.log(addTen(6))  // cached value
