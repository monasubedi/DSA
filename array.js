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

function rotateOptimized(arr,k){
    let size = arr.length;
    if(k > size){
        k = k % size;
    }
    reverse(arr,0,size-1);
    reverse(arr,0,k-1);
    reverse(arr,k,size-1);

    return arr;

}

function reverse(arr,left,right){
    while(left < right){
        let temp = arr[left];
        arr[left++] = arr[right];
        arr[right--] = temp;
    }
}

console.log(rotateOptimized([1, 2, 3, 4, 5, 6, 7], 3));

