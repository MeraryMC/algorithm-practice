// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //make empty object
  let charObj = {};
  //helper variable
  let max = 0;
  //variable to hold the max character
  let maxChar = '';
  for (let char of str){ //used to iterate through a string, array, or iritable object
    //let the property of char at charObj equal its own value plus one, unless the value is falsy (which means that charObj[char] was undefined), in which case assign the value of 1
    charObj[char] = charObj[char] + 1 || 1;
  }
  console.log(charObj);

  for (let char in charObj){ //used to iterate through an obejct with key value pairs
      if (charObj[char] > max){
        max = charObj[char];
        maxChar = char;
      }
    }
  return maxChar;
}



console.log(maxChar("apple 1231111"));


module.exports = maxChar;


