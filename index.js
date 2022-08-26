function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  const reversedWord = word.split("").reverse().join("");
  // compare the reversed string to the input
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  reverse the input string
  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("hannah"));
}

module.exports = isPalindrome;