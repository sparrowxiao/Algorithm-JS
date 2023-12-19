/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }
    nums.sort((a, b) => a - b);
    return nums;
};
console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));

/*
The line of code nums.sort((a, b) => a - b); is using JavaScript's built-in Array.prototype.sort() method to sort the nums array in ascending order.

The sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

However, when a compare function is supplied, all non-undefined array elements are sorted according to the return value of the compare function. In this case, (a, b) => a - b is the compare function.

Here's how it works:

If a and b are two elements being compared, then:
If the result is less than 0, sort a to an index lower than b (i.e., a comes first).
If the result is 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
If the result is greater than 0, sort b to an index lower than a (i.e., b comes first).
So, nums.sort((a, b) => a - b); sorts the numbers in the nums array in ascending order.
*/