let arr = [5, 2, -4, -5, 3, -1, 2, 3, 1];

let maxsum = 0;
let currentSum = 0;
for (let i = 0; i < arr.length; i++) {
  currentSum = currentSum + arr[i];
  if (maxsum < currentSum) {
    maxsum = currentSum;
  }
  if (currentSum < 0) {
    currentSum = 0;
  }
}
console.log(maxsum);
