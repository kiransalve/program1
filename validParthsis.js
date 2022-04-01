let s = ["[", "]"];

const isValid = (x) => {
  // create stack
  let stk = [];
  // loop through each element
  for (let i = 0; i < x.length; i++) {
    let char = stk[stk.length - 1];
    // if you get starting bracket
    if (x[i] == "(" || x[i] == "{" || x[i] == "[") {
      stk.push(x[i]);
    } else if (
      (char == "(" && x[i] == ")") ||
      (char == "[" && x[i] == "]") ||
      (char == "{" && x[i] == "}")
    ) {
      stk.pop;
    } else return false;
  }
  return stk.length ? false : true;
};
