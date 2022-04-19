// 10. selection sort
let arr = [10,9,8,7,6,5,4,3,2,1];
// loop throgh every element of array
for (let i = 0; i < arr.length - 1; i++) {
    // suppose our min element is at ith position
  let smallest = i;
  // loop from next elm i+1 till arr.length
  for (let j = i + 1; j < arr.length; j++) {
      // if we found number smaller that smallest
    if (arr[j] < arr[smallest]) {
        // then make it as smallest
      smallest = j;
    }
    // swap
    let temp = arr[smallest]; // store smallest in temp space
    arr[smallest] = arr[i]; // store current value to prev position
    arr[i] = temp; // store temp value in current position
  }
}
console.log(arr);



