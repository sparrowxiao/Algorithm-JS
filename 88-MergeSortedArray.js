/*Since those two arrays are sorted, and num1 array size is fixed, 
so it is simple to start from the end of the two arrays.
Compare the last element from each array, and pick 
the larger one and put it to the end of the first array.
 */

var merge = function(nums1, m, nums2, n) {
    let i = m-1;
    let j = n-1;
    let k = m+n-1;
    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[k] = nums1[i];
            i--;
        }else{
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    while(j>=0){
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    //return nums1;
    
}
const startTime1 = performance.now();
console.log(merge([2,0],1,[1],1));
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
const endTime1 = performance.now();
let excutionTime1 = endTime1 - startTime1;
////console.log(`Time taken by merge: ${excutionTime1}ms`);


const startTime2 = performance.now();
console.log(merge([1],1,[],0));
console.log(merge([0],0,[1],1));
const endTime2 = performance.now();
let excutionTime2 = endTime2 - startTime2;
//console.log(`Time taken by merge: ${excutionTime2}ms`);
