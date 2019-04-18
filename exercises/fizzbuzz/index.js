// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  //iterate through the numbers between 1 and n, inclusive
  for (let i = 1; i < n + 1; i++){
    //if the number is a multiple of 3 but not 5
    if (i % 3 === 0 && i % 5 !== 0){
      //print fizz
      console.log('fizz');
      //skip to the next i
      continue;
    }
    //if the number is a mulitple of 5 but not 3
    if (i % 3 !== 0 && i % 5 === 0){
      //print buzz
      console.log('buzz');
      //skip to the next i
      continue;
    }
    //if the number is a multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0){
      //print fizzbuzz
      console.log('fizzbuzz');
      //skip to the next i
      continue;
    }
    else {
      //if none of those conditions are met, print the number
      console.log(i);
    }
  }
}

//Notes: the continue statements are necessary here so that we continue to print without
//breaking, AND by replacing the printing of the numbers

console.log(fizzBuzz(200));

module.exports = fizzBuzz;
