var lengthofLastWord1 = function(s) {
    let arr = s.split(' ');
    let len = arr.length;
    for(let i=len-1; i>=0; i--){
        if(arr[i] === ''){
            arr.pop();
        }else{
            break;
        }
    }
    let lastWord = arr.pop();   //needs more time then traverse the array
    return lastWord.length;
}
var lengthofLastWord2 = function(s) {
    let arr = s.split(' ');
    let len = arr.length;
    for(let i=len-1; i>=0; i--){
        if(arr[i] !== ''){
           return arr[i].length;
        }else{
            continue;
        }
    }
}
const startTime1 = performance.now();
console.log(lengthofLastWord1("   fly me   to   the moon  "));
console.log(lengthofLastWord1("Hello World"));
const endTime1 = performance.now();
let excutionTime = endTime1 - startTime1;
console.log(`Time taken by lengthofLastWord1: ${excutionTime}ms`);

const startTime2 = performance.now();
console.log(lengthofLastWord2("   fly me   to   the moon  "));
console.log(lengthofLastWord2("Hello World"));
const endTime2 = performance.now();
let excutionTime2 = endTime2 - startTime2;
console.log(`Time taken by lengthofLastWord2: ${excutionTime2}ms`);