let C, K;
function convertTemp(num, conv) {
  if (conv === K) {
    var kToc = num - 273;
    console.log(kToc, "C");
  }
  if (conv === C) {
    var cToK = 273 + num;
    console.log(cToK, "K");
  }
}
convertTemp(308, C);
convertTemp(35, K);
