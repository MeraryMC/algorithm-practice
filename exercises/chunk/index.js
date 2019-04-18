// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //make result array
  var result = [];
  var inner = [];

  //account for chunk being greater than the array length
  if (size > array.length){
    return array;
  } else {
    while (array.length > 0){ //important to keep track of because we're going to keep cutting down the array
    inner = array.slice(0, size);
    // console.log(inner);
    result.push(inner);
    array = array.splice(size);
    }
    return result;
  }
}


console.log(chunk([1, 2, 3, 4, 5], 2));
module.exports = chunk;
