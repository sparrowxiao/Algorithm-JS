/*
Although the question is marked as medium, it is a very easy question. I guess since the JS built-in functions are used.
See split, reverse, join function I used in the solution.

Time Complexity: O(n)
space complexity: O(n)



*/

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

const startTime1 = performance.now();
console.log(reverseWords("the sky is blue"));
const endTime1 = performance.now();
let excutionTime = endTime1 - startTime1;
console.log(`Time taken by reverseWords: ${excutionTime}ms`);

const startTime2 = performance.now();
console.log(reverseWords("the"));
const endTime2 = performance.now();
excutionTime = endTime2 - startTime2;
console.log(`Time taken by reverseWords: ${excutionTime}ms`);
