//Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
//Output: [3,3,5,5,6,7]


//Brute Force approach
// const maxSlidingWindowNaive = function(nums,k){
//     const result = [];
//     const n = nums.length;

//     for(let i = 0; i < n - k; i++){
//         let max = nums[i];
//         for(let j = 0; j < k; j++){
//             if(nums[i+j] > max){
//                 max = nums[i+j];
//             }
//         }
//         result.push(max);
//     }
//     return result;
// }

// console.log(maxSlidingWindowNaive([1,3,-1,-3,5,3,6,7], 3));

// function processData(input) {
//     //Enter your code here
//    let arr = input.sort((a,b) => a - b);
//    let n = arr.length;
//    let mid = Math.floor(n / 2);
//    [arr[mid],arr[n-1]] = [arr[n-1],arr[mid]];
//    let left = mid + 1;
//    let right = n - 1;
//    while(left < right){
//        [arr[left],arr[right]]= [arr[right],arr[left]];
//        left++;
//        right--;
//    }
//    return arr;
// }
// console.log(processData([1, 2, 3, 4, 5, 6, 7]));


// function palindromeIndex(s) {
//     // Write your code here

//     let index = -1;
//     for(let i = 0; i < s.length; i++){
//         let newStr = s.substring(0,i) + s.substring(i+1);
//         console.log(s.substring(0,i),s.substring(i+1));

//         if(isPalindrome(newStr)){
//             index = i;
//             break;
//         }
//     }

//     return index;
// }
// function isPalindrome(newStr) {

//     let stringVal = newStr.split("").reverse().join("");
//     return stringVal === newStr;
// }
// console.log(palindromeIndex('aaab'));

// let arr =[2,3,4];

// [arr[1],arr[2]] = [arr[2],arr[1]];
// console.log(arr);


function caesarCipher(s, k) {
    // Write your code here
    let oa = "abcdefghijklmnopqrstuvwxyz";
    let rotatedStr = oa;
    let encrypedStr = "";
    if(k > 26){
        k = k % 26;
    }
    let a = rotatedStr.substring(0, k);
    let newStr = rotatedStr.substring(k, rotatedStr.length);
    newStr += a;

    let lower = s.toLowerCase();

    for (let j = 0; j < s.length; j++) {
        if (!oa.includes(lower[j])) {
            encrypedStr += s[j];
        }
        else {
            let str = newStr[oa.indexOf(lower[j])];
            if (s[j] === s[j].toUpperCase()) {

                encrypedStr += str.toUpperCase();
            }
            else {
                encrypedStr += str;
            }

        }

    }
    return encrypedStr;

}
console.log(caesarCipher("www.abc.xy", 87));
