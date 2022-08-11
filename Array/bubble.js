let a = [5, 2, 4, 3, 1];

let bubbleSort = bubble(a);
console.log(bubbleSort);

function bubble(arr) {
  let n = arr.length;
  let i, j, temp;

  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      if (a[j] < a[i]) {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
}
