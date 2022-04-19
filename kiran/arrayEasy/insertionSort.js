// 11. insertion sort
let i, j;
let arr = [5, 4, 3, 2, 1];
for (i = 1; i < arr.length; i++) {
  let current = arr[i];
  for (j = i - 1; arr[j] > current && j >= 0; j--) {
    arr[j + 1] = arr[j];
  }
  arr[j + 1] = current;
}
console.log(arr);c
