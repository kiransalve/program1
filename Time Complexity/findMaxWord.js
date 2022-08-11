const findWord = (sentence) => {
  let max = 0;
  let temp = 0;
  for (let i = 0; i < sentence.length; i++) {
    temp = sentence[i].split(" ").length;
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

let sentence = ["i am best", "i am not best", "i am very very best"];

console.log(findWord(sentence));
