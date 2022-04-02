let arr = [1, 2, 3, 4];
let ans = [];

ans[0] = arr[0];

for (let i = 1; i < arr.length; i++) {
  ans[i] = ans[i - 1] + arr[i];
}

console.log(ans);
