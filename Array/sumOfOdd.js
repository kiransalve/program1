let arr = [1, 4, 2, 5, 3];

function sumOfOdd(arr) {
  let sum = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let contribution = ((i + 1) * (n - i) + 1) / 2;
    sum += Math.floor(contribution) * arr[i];
  }
  return sum;
}

let sum = sumOfOdd(arr);

console.log(sum);
