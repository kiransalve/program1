let arr = [50, 60, 70, 80];

let k = 3;

// we have to find 3rd smallest number

function kthSmallest(arr, k) {
  // bubble sort
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // k - 1
  console.log(arr[k - 1]);
}

let fun = kthSmallest(arr, k);

fun;
