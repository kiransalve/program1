// find minimum and maximum number of array

let arr = [1, 2, 13, -4, 0];

function minMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("Min is ", min, "Max is ", max);
}

let fun = minMax(arr);

fun;
