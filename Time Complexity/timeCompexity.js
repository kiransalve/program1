//------ 1 ------//
// let a = 0;

// for (let i = 0; i < N; i++) {
//   for (j = N; j > i; j++) {
//     a = a + i + j;
//   }
// }

// Time Complexity is O(n^2)

// as j loop runs for i times

//------ 2 ------//

for (i = n / 2; i <= n; i++) {
  for (j = 2; j <= n; j = j * 2) {
    k = k + n / 2;
  }
}

// O(n(logn))
