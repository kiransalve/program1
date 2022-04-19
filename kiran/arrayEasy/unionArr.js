let arr1 = [1, 2, 5, 6, 2, 3, 5, 7, 3];

let arr2 = [2, 4, 5, 6, 8, 9, 4, 6, 5, 4];

// define set container
var s = new Set();

// insert array element in s
for (let i = 0; i < arr1.length; i++) {
  s.add(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
  s.add(arr2[i]);
}

var arr = [];
for (let itr of s) {
  arr.push(itr);
}

console.log("number of union ", s.size, arr);
