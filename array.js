// Arrays in Javascript

// Decalaration
let person = {
    name: "Piyush",
    age: 25,
};

let arr = ["apple", "banana", "cherry", person];

console.log(arr.length); // know the length of an array

// # Add and Remove Elements

// Add to End of the Array
arr.push("orange");

// Remove From End of the Array
arr.pop();
arr.pop();

// Add to Top of the Array
arr.unshift("orange");

// Remove From Top of the Array
arr.shift();

// # Looping Arrays

// For Loop
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

// While Loop
let i = 0;
while (i < arr.length) {
    // console.log(arr[i]);

    i++;
}

// # Inbuilt Loop Methods
const numbers = [1, 2, 3, 4, 5];

// map in javascript
numbers.map((item, index, array) => {
    return item + 5;
});

// filter in javascript
numbers.filter((item, index, array) => {
    return item > 3;
});

// reduce in javascript
numbers.reduce((prev, item) => {
    return prev + item;
}, 2);

// some in javascript
numbers.some((item, index, array) => {
    return item > 3;
});

// every in javascript
numbers.every((item, index, array) => {
    return item < 10;
});

// find in javascript
numbers.find((item, index, array) => {
    return item > 3;
});

// findIndex
const index = [1, 2, 3].findIndex((item) => item === 2);
// console.log(index);

// Spread and Rest Operators
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

const finalNums = [...nums, ...nums2]; // Spread Operator

// Rest Operator
function sum(...numbers) {
    return numbers;
}

//   console.log(sum(nums, nums2, 5, "hello"));

// # More Array Methods

// concat
nums.concat(nums2, arr);

// Slice
arr.slice(-2);

// Splice
arr.splice(1, 2, "orange");

// Fill
const dummy = [2, 5, 1, 6];
dummy.fill(2, 2);

// Flat
const flatEx = [1, [2, 3], [[4, 5], 6]]; // => [1,2,3,4,5,6]

const flattenedArray = flatEx.flat(2);
// console.log(flattenedArray);

// reverse
nums.reverse();
// console.log(nums);

// sort
//   const unsorted = [5, 2, 10, 7, 3, 1];
//   unsorted.sort((a, b) => b - a);
//   console.log(unsorted);




//Ques 1 - Second Largest Number

//Input: [12,35,1,10,34,1] => 34
//Input: [10,5,10] => 5

// function secondLargest(arr) {

//     const uniqueArr = new Set(arr);


//     //first sort the array
//     let sorted = Array.from(uniqueArr).sort((a, b) => a - b);//[1,1,10,12,34,35]
//     console.log(sorted);


//     //remove the duplicates


//     return sorted.length >= 2 ? sorted[sorted.length - 2] : -1;

// }

// console.log(secondLargest([1, 1, 10, 12, 34, 35, 35]));


// function secondLargestOptimized(arr){
//     let largest = Number.NEGATIVE_INFINITY;
//     let secondLargest = Number.NEGATIVE_INFINITY;

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             secondLargest = largest;
//             largest = arr[i];
//         }
//         else if(arr[i] != largest && arr[i] > secondLargest){
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }
// console.log(secondLargestOptimized([1, 1, 10, 12, 34, 35, 35]));


//Ques 2 - Rotate Array by K
//Input: nums = [1,2,3,4,5,6,7], k = 3, Output: [5,6,7,1,2,3,4]
//Input: nums = [-1,-100,3,99], k = 2,  Output:[3,99,-1,-100]


// function rotate(arr, k) {
//     let size = arr.length;
//     if (k > size) {
//         k = k % size;
//     }
//     const rotated = arr.splice(size - k, size);
//     arr.unshift(...rotated);

//     return arr;

// }

// function rotateOptimized(arr,k){
//     let size = arr.length;
//     if(k > size){
//         k = k % size;
//     }
//     reverse(arr,0,size-1);
//     reverse(arr,0,k-1);
//     reverse(arr,k,size-1);

//     return arr;

// }

// function reverse(arr,left,right){
//     while(left < right){
//         let temp = arr[left];
//         arr[left++] = arr[right];
//         arr[right--] = temp;
//     }
// }

// console.log(rotateOptimized([1, 2, 3, 4, 5, 6, 7], 3));

//Ques3: Remove Duplicates from Sorted Array

//Input: [1,1,2] => Output: 2, [1,2,_]
//Input: [0,0,1,1,1,2,2,3,3,4] => Output: 5, [0,1,2,3,4,_,_,_,_,_]


// function removeDuplicates(arr){
//     //1. let set = new Set(arr);

//     // return Array.from(set);

//     //2.
//     // for(let i = 0; i < arr.length; i++){
//     //     if(arr[i] === arr[i+1]){
//     //         arr.splice(i+1,1);
//     //         i--;
//     //     }
//     // }
//     // return arr;

//     //3.
//     let i = 0;
//     for(let j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j];
//         }
//     }
//     return i+1;
// }

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));



//moveZeroes

var moveZeroes = function (nums) {
    // let countZero = 0;
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] === 0){
    //         countZero++;
    //         nums.splice(i,1);
    //         console.log(nums.length);
    //     }
    // }
    // for(let i = 0; i < countZero; i++){
    //     nums.push(0);
    // }

    // return nums;
    // let i = 0;
    // for (let j = 0; j < nums.length; j++) {
    //     if (nums[j] !== 0) {
    //         let temp = nums[i];
    //         nums[i] = nums[j];
    //         nums[j] = temp;
    //         i++;
    //     }
    // }
    // return nums;

};

// console.log(moveZeroes([0, 0, 1]));

// var maximumDifference = function (nums) {
//     // let max = -1;
//     // for (let i = 0; i < nums.length; i++) {
//     //     for (let j = i + 1; j < nums.length; j++) {
//     //         if (nums[i] < nums[j] && i < j) {
//     //             let diff = nums[j] - nums[i];
//     //             if (diff > max) {
//     //                 max = diff;

//     //             }
//     //         }

//     //     }

//     // }
//     // return max;

//     let max = -1;
//     let i = 0;
//     for(let j = 1; j < nums.length; j++){
//         if(nums[i] < nums[j] && i < j){
//             let diff = nums[j] - nums[i];
//             if(diff > max){
//                 max = diff;
//             }
//         }
//     }
//     return max;


// };

// console.log(maximumDifference([1,5,2,10]));

// var containsDuplicate = function (nums) {
//     nums.sort((a, b) => a - b);
     
//      for (let i = 0; i < nums.length; i++) {
//          if (nums[i] === nums[i + 1]) {
//              return true;
//          }
//      }
     
//      return false;
//  };

// var intersection = function(nums1, nums2) {
//     let result = new Set();
//     for(let i = 0; i < nums1.length; i++){
//         if(nums2.includes(nums1[i])){
//             result.add(nums1[i]);
//         }
//     }
//     return Array.from(result);
// };