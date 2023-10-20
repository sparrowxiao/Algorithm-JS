/*
two pointers i and j to handle the string from both beginning and end.
If both the characters at i and j are vowels, swap them.
If the character at i is not a vowel, increment i.
if the character at j is not a vowel, decrement j.

Time Complexity: O(n/2) => O(n)
Space Complexity: O(n) => O(n)

*/

function reverseVowels(str) {
  const vowels = "aeiouAEIOU";
  let i = 0;
  let j = str.length - 1;
  let strArr = str.split("");
  while (i < j) {
    if (vowels.includes(strArr[i]) && vowels.includes(strArr[j])) {
      let temp = strArr[i];
      strArr[i] = strArr[j];
      strArr[j] = temp;
      i++;
      j--;
    } else if (vowels.includes(strArr[i])) {
      j--;
    } else if (vowels.includes(strArr[j])) {
      i++;
    } else {
      i++;
      j--;
    }
  }
  return strArr.join("");
}
console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
