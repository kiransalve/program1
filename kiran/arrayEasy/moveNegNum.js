let arr = [1, 2, -2, -3, 5, 6, -4, -2];

let temp = [];
let j = 0;
for (let i = 0; i < arr.length; i++) {
  // store positive number
  if (arr[i] >= 0) {
    temp[j++] = arr[i];
  }
}

for (let i = 0; i < arr.length; i++) {
  // store negative number
  if (arr[i] <= 0) {
    temp[j++] = arr[i];
  }
}

for (let i = 0; i < arr.length; i++) {
  arr[i] = temp[i];
}
console.log(arr);
