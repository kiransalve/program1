// 1. maximum in array
// let arr = [3, 1, 4, 2];
// let max = arr[0]; // take variable suppose 0th index maximum value

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// 2. minimum element in array
// let arr = [3, 1, -4, 2];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// 3. store prime no. in an array
// let num = 10;
// let arr = [];
// const isPrime = (num) => {
//   let p = 2;
//   let i;
//   while (num) {
//     for (i = 2; i < p; i++) {
//       if (p % i == 0) {
//         break;
//       }
//     }
//     if (i == p) {
//       arr.push(i);
//       num--;
//     }
//     p++;
//   }
//   return arr;
// };
// console.log(isPrime(num));

// 4. print all possible subarray
// let arr = [1, 2, 3, 4];
// let str = "";
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     for (let k = i; k <= j; k++) {
//       str = str + arr[k] + " ";
//     }
//     str += "\n";
//   }
// }
// console.log(str);

// 5. return maximum sum of the subarray
// let arr = [5, 2, -4, 3];

// let currentSum = 0;
// let maximumSum = 0;
// for (let i = 0; i < arr.length; i++) {
//   currentSum = currentSum + arr[i];

//   if (maximumSum < currentSum) {
//     maximumSum = currentSum;
//   }
//   if (currentSum < 0) {
//     currentSum = 0;
//   }
// }

// console.log(maximumSum);

// 5. maximum 2d array sum
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [1, 5, 3],
// ];

// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < arr.length; j++) {
//     sum += arr[i][j];
//   }
//   if (sum > max) {
//     max = sum;
//   }
// }
// console.log(max);

// 6. maximum runing sum
// let arr = [1, 6, 5, 4];
// let ans = [];
// ans[0] = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   ans[i] = ans[i - 1] + arr[i];
// }
// console.log(ans);

// 7. sum of odd length subarray
// let arr = [1,2,1, 2];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j += 2) {
//     for (let k = i; k <= j; k++) {
//       sum = sum + arr[k];
//     }
//   }
// }
// console.log(sum);

// 8. rotate array by one
// let arr = [1, 2, 3, 4, 5];

// let n = arr.length;
// let d = 2
// function rotateArray(arr, d, n) {
//   let i;
//   for (i = 0; i < d; i++) {
//     moveLeftByOne(arr, n);
//   }
//   return arr;
// }

// function moveLeftByOne(arr, n) {
//   let i;
//   let temp = arr[0];
//   for (i = 0; i < n - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[i] = temp;
// }
// console.log(rotateArray(arr, d, n));

// 9. bubble sort
//let arr = [5, 4, 3, 2, 1];
// loop throug every element
// for (let i = 0; i < arr.length - 1; i++) {
//   // loop to compare unsorted array
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     // compare two adjacent number
//     if (arr[j] > arr[j + 1]) {
//       // if current number is greater than adjacent number
//       // them swap
//       let temp = arr[j]; // current num in temp space
//       arr[j] = arr[j + 1]; // adjacent num in curr num position
//       arr[j + 1] = temp; // current num which store in temp space to its next position
//     }
//   }
// }
//console.log(arr);

// 10. selection sort
// let arr = [10,9,8,7,6,5,4,3,2,1];
// // loop throgh every element of array
// for (let i = 0; i < arr.length - 1; i++) {
//     // suppose our min element is at ith position
//   let smallest = i;
//   // loop from next elm i+1 till arr.length
//   for (let j = i + 1; j < arr.length; j++) {
//       // if we found number smaller that smallest
//     if (arr[j] < arr[smallest]) {
//         // then make it as smallest
//       smallest = j;
//     }
//     // swap
//     let temp = arr[smallest];// store smallest in temp space
//     arr[smallest] = arr[i]; // store current value to prev position
//     arr[i] = temp; // store temp value in current position
//   }
// }
// console.log(arr);

// 11. insertion sort
// let i, j;
// let arr = [55, 456, 13, 121, 11];
// for (i = 1; i < arr.length; i++) {
//   let current = arr[i];
//   for (j = i - 1; arr[j] > current && j >= 0; j--) {
//     arr[j + 1] = arr[j];
//   }
//   arr[j + 1] = current;
// }
// console.log(arr);
