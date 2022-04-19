let accounts = [
  [1, 1, 8],
  [5, -1, 6],
  [4, 1, 7],
];

var maximumWealth = function (accounts) {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }

    if (sum > maxWealth) {
      maxWealth = sum;
    }
  }
  return maxWealth;
};

console.log(maximumWealth(accounts));
