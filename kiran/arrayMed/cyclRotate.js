let arr = [1, 2, 3, 4, 5];

let x = arr[arr.length - 1];
let i;

function rotate(arr) {
  for (i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = x;
  console.log(arr);
}

rotate(arr);
