// Return an array with the given functino called on each element in 
// the fiven array
function map(arr, func) {
    return arr.map(func);
}

// Test map()
console.log(map([2, 4, 6], function (num) {
    return num * 2;
}));