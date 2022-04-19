// Buble sort

// for all element of array
//      if (arr[i] > arr[i+1])
//           swap (arr[i] and arr[i+1])
//      end if
// end for

let arr = [5, 4, 3, 2, 1];

function bubleSort(arr) {
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
  return arr;
}

let fun = bubleSort(arr);
console.log(fun);
