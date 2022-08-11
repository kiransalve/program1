const toHex = (n) => {
  // define 0 to 9 as it is and 10 to 15 as "a" to "f" respectively
  let map = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f",
  };
  let result = "";
  if (num == 0) return "0";

  // number should be non-zero,if it is negetive then we take 2's complement of number
  if (num < 0) {
    num = 2 ** 32 - num * -1;
  }

  // number is positive
  while (num > 0) {
    result = map[`${num % 16}`] + result;
    // we keep adding the remainder
    num = parseInt(num / 16);
  }
  return result;
};
let num = 155;

console.log(toHex(num));
