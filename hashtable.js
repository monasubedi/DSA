// class HashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key, value) {
//         const index = this.hash(key);
//         // this.table[index] = value;
//         let bucket = this.table[index];
//         if (!bucket) {
//             this.table[index] = [[key, value]];
//             // console.log("bucket is", bucket);
//         }
//         else {
//             let sameKeyItem = bucket.find(item => item[0] === key);


//             if (sameKeyItem) {
//                 sameKeyItem[1] = value;
//                 console.log('is same', sameKeyItem);

//             }
//             else {
//                 bucket.push([key, value]);
//             }
//         }

//     }
//     get(key) {
//         const index = this.hash(key);
//         // return this.table[index];
//         let bucket = this.table[index];
//         if (bucket) {
//             let sameKeyItem = bucket.find(item => item[0] === key);
//             if (sameKeyItem) {
//                 return sameKeyItem[1];
//             }
//         }
//         return undefined;

//     }
//     remove(key) {
//         const index = this.hash(key);
//         //this.table[index] = undefined;
//         const bucket = this.table[index];
//         if (bucket) {
//             let sameKeyItem = bucket.find(item => item[0] === key);
//             if (sameKeyItem) {
//                 console.log(bucket.indexOf(sameKeyItem));

//                 bucket.splice(bucket.indexOf(sameKeyItem), 1);
//             }
//         }
//     }
//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);

//             }

//         }
//     }
// }

// const hashtable = new HashTable(50);
// hashtable.set("name", "Mona");
// hashtable.set("name", "Mona subedi");
// hashtable.set("age", 19);
// console.log(hashtable.get("name"));
// hashtable.remove("age")

// hashtable.display();

// var addTwoNumbers = function (l1, l2) {
//     let num1 = Number(convertToString(l1.reverse()));
//     let num2 = Number(convertToString(l2.reverse()));
//     return num1 + num2;


// };

// var convertToString = function (arr) {
//     let str = "";
//     for (let i = 0; i < arr.length; i++) {
//         str += arr[i];
//     }
//     return str;
// }
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

let num = 124 + "";
// let arr = [];
// for(let i = 0; i < num.length; i++){
//     arr.push(Number(num[i]));
// }



// var twoSum = function (nums, target) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], i);
//     }
//     console.log(map);

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         console.log(complement);

//         if (map.has(complement) && map.get(complement) !== i) {
//             return [i, map.get(complement)];
//         }
//     }
//     return null;
// }

// nums = [2, 7, 11, 15];
// target = 9;
// console.log(twoSum(nums, target));




// var plusOne = function (digits) {
//     let num = Number(convertToString(digits)) + 1;


//     let str = num + "";
//     console.log(Number(convertToString(digits)) + 1);

//     let arr = [];
//     for (let i = 0; i < str.length; i++) {

//         arr.push(Number(str[i]));

//     }
//     return arr;
// };

// var convertToString = function (arr) {
//     console.log(arr);

//     let str = "";
//     for (let i = 0; i < arr.length; i++) {
//         str += arr[i];
//     }
//     return str;
// }

// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));

// var isPalindrome = function (x) {
//     let str = x + "";
//     return x === Number(str.split("").reverse().join(""));
// };
// console.log(isPalindrome(-121));
// var removeElement = function (nums, val) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//            nums[count] = nums[i];
//            count++;
//         }
//     }
//     return nums;
// };
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
var merge = function (nums1, m, nums2, n) {
    let arr = [...nums1, ...nums2];
    let j = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr[j] = arr[i];
            j++;
        }
    }
    return newArr;

};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));





