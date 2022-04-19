let arr = [1, 2, 3, 5, 6];

let n = arr.length;

function findMissingNum(arr, n) {
  // calculate the sum of n natural number
  let total = Math.floor(((n + 1) * (n + 2)) / 2);

  for (let i = 0; i < n; i++) {
    total -= arr[i];
  }
  console.log(total);
}

findMissingNum(arr, n);
