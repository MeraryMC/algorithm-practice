// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

console.log("=======================================");

function anagrams(stringA, stringB) {
  const mapA = buildCharMap(stringA);
  const mapB = buildCharMap(stringB);
  if (Object.keys(mapA).length !== Object.keys(mapB).length){
    return false;
  }
  for (let char in mapA){
    if(mapA[char] !== mapB[char]){
      return false;
    }
  }
  return true;
}

//build out a helper function to create a character map out of the strings
function buildCharMap(string) {
  let charObj = {};
  for (let char of string.replace(/[^\w]/g, '').toLowerCase()){
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
};

console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); //True

module.exports = anagrams;

console.log("=======================================");