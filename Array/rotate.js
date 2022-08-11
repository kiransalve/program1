let arr = [1, 2, 3, 4, 5, 6];
let r = 2;

let rotateArray = rotateRight(arr, r);
console.log(rotateArray);

let start, end;
function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateRight(arr, r) {
  r %= arr.length;
  // reversing the entire array
  reverse(arr, 0, arr.length - 1);

  // rotating the first r elm
  reverse(arr, 0, r - 1);

  // rotating length r elm
  reverse(arr, r, arr.length - 1);
  return arr;
}
