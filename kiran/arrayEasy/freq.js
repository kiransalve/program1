// count number of occurance in array

let arr = [1];

let x = 1;

let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (x == arr[i]) {
    count++;
  }
}
console.log(count);
