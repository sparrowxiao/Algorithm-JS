var romanToInt = function(s) {
    const roman = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let result = 0;
    let arr = s.split('');
    for(let i=0;i<arr.length;i++){
        if (arr[i] === 'I' && (arr[i+1] === 'V' || arr[i+1] === 'X')){
            result -= roman[arr[i]];}
        else if (arr[i] === 'X' && (arr[i+1] === 'L' || arr[i+1] === 'C')){
            result -= roman[arr[i]];}
        else if (arr[i] === 'C' && (arr[i+1] === 'D' || arr[i+1] === 'M')){
            result -= roman[arr[i]];}
        else{result += roman[arr[i]];}
        }
    return result;
};

const startTime1 = performance.now();
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
const endTime1 = performance.now();
let excutionTime = endTime1 - startTime1;
console.log(`Time taken by romanToInt: ${excutionTime}ms`);
