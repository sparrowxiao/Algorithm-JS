/*
Method 1.length of string is important, traverse the string with the longest length
Method 2.traverse the shortest string, append the character from both strings
Method 3.using array to store the result, join the array to string

All of the methods have the same time complexity and space complexity
Time complexity: O(n)
Space complexity: O(n)

But the method 2 is the fastest, because the string length is smallest, the loop is shortest.
Need to consider the min length of the string if the string length is different.
*/

function mergeString1(str1, str2) {
  let result = "";
  let i = 0;
  let j = 0;
  while (i < str1.length || j < str2.length) {
    if (i < str1.length) {
      result += str1[i];
      i++;
    }
    if (j < str2.length) {
      result += str2[j];
      j++;
    }
  }
  return result;
}
function mergeString2(str1, str2) {
  let result = "";
  const minLength = Math.min(str1.length, str2.length);
  for (let i = 0; i < minLength; i++) {
    result += str1[i] + str2[i];
  }
  result += str1.slice(minLength) + str2.slice(minLength);
  return result;
}

function mergeString3(str1, str2) {
  const merged = [];
  const minLength = Math.min(str1.length, str2.length);

  for (let i = 0; i < minLength; i++) {
    merged.push(str1[i]);
    merged.push(str2[i]);
  }

  // Append the remaining characters from longer string, if any
  merged.push(str1.slice(minLength));
  merged.push(str2.slice(minLength));

  return merged.join("");
}

const startTime1 = performance.now();
console.log(mergeString1("abc", "pqr"));
console.log(mergeString1("ab", "pqrs"));
console.log(mergeString1("abcd", "pq"));
const endTime1 = performance.now();
let excutionTime = endTime1 - startTime1;
console.log(`Time taken by mergeString1: ${excutionTime}ms`);

const startTime2 = performance.now();
console.log(mergeString2("abc", "pqr"));
console.log(mergeString2("ab", "pqrs"));
console.log(mergeString2("abcd", "pq"));
const endTime2 = performance.now();
excutionTime = endTime2 - startTime2;
console.log(`Time taken by mergeString2: ${excutionTime}ms`);

const startTime3 = performance.now();
console.log(mergeString3("abc", "pqr"));
console.log(mergeString3("ab", "pqrs"));
console.log(mergeString3("abcd", "pq"));
const endTime3 = performance.now();
excutionTime = endTime3 - startTime3;
console.log(`Time taken by mergeString3: ${excutionTime}ms`);
