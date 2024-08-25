//Implement Linear Search with Javascript
// function linearSearch(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }
//time complexity - O(n)
//space complexity - O(1)



//Global Linear Search
// function globalLinearSearch(nums, target) {
//     const result = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             result.push(i);
//         }

//     }
//     if (result.length === 0) return -1;
//     return result;
// }


//Binary Search
//Given an array of integers nums which is sorted in ascending order, and an integer target, 
//Write a function to search target in nums. If target exists, then return its index.
//Otherwise, return -1. You must write an algorithm with O(logn) runtime complexity.

// function binarySearch(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;


//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);
//         if (nums[middle] === target) {
//             return middle;
//         }
//         else if (target < nums[middle]) {
//             end = middle - 1;
//         }
//         else {
//             start = middle + 1;
//         }
//     }
//     return -1;


// }

// console.log(binarySearch([-1, 0, 4, 5, 6, 9], 9));
//time complexity - O(logn)
//space complexity - O(1)

//Given an array arr of positive integers sorted in a strictly increasing order and an integer k.
//Return the kth positive integer that is missing from this array.

//arr = [2,3,4,7,11], k = 5;
// var findKthPositive = function (arr, k) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         
//         if (arr[i] <= k + count) {
//             count++;
//         }
//     }
//     return k + count;
// }

// console.log(findKthPositive([2, 3, 4, 7, 11], 5));


//Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.
//nums=[-2,-1,-1,1,2,3], output = 3;
//first-way
// var maximumCount = function (nums) {
//     let posCount = 0;
//     let negCount = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < 0) {
//             negCount++;
//         }
//         else if (nums[i] > 0) {
//             posCount++;
//         }
//     }
//     return Math.max(posCount, negCount)
// }

// console.log(maximumCount([-2,-1,-1,0,0,3]));

//second-way
var maximumCount = (nums) => {
    return Math.max(lowerBound(nums), upperBound(nums));
}

function lowerBound(nums) {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] < 0) high = mid;
        else low = mid + 1;
    }

    return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
}

function upperBound(nums) {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        let mid = Math.ceil((low + high) / 2);
        if (nums[mid] > 0) low = mid;
        else high = mid - 1;
    }
    return nums[0] >= 0 ? 0 : low + 1;
}
console.log(maximumCount([-2, -1, , 0, 0, 3]));
