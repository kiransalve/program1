let arr = [5, 2, -4, -5, 3, -1, 2, 3, 1];

let str = "";
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    for (let k = i; k <= j; k++) {
      str = str + arr[k] + " ";
    }
    str += "\n";
  }
}

console.log(str);
