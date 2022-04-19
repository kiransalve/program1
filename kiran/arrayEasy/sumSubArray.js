let arr = [1, 2, 3, 4, 5];
let sum = 9;

function subArraySum(arr, sum) {
  let currentSum = arr[0];
  let i;
  let start = 0;

  // pick a starting point
  for (i = 1; i <= arr.length; i++) {
    // if current sum exeeds sum,
    // then remove the starting element
    while (currentSum > sum && start < i - 1) {
      currentSum = currentSum - arr[start];
      start++;
    }

    // If currentSum becomes equal to sum
    if (currentSum == sum) {
      let p = i - 1;
      console.log("sum found between", start, " and ", p);
    }

    // add this element to currentSum
    if (i < arr.length) {
      currentSum = currentSum + arr[i];
    }
  }
}

let fun = subArraySum(arr, sum);

fun;
