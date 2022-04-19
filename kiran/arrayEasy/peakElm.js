// peak element
// let arr = [1,2,3]
// output = 2 (2 is index of 3)

// let arr = [5,4,6,17,9]
// output = 3 (3 is index of 17)

let arr = [1, 2];
let n = arr.length;
function findPeak(arr, n) {
  if (n == 1) {
    return 0;
  }
  if (arr[0] >= arr[1]) {
    return 0;
  }
  if (arr[n - 1] >= arr[n - 2]) {
    return n - 1;
  }

  // check for every element
  for (let i = 1; i < n - 1; i++) {
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
      return i;
    }
  }
}

let fun = findPeak(arr, n);
console.log(fun);
