// divide two integer

function devide(dividend, divisor) {
  var sign = (dividend < 0 ? 1 : 0 ^ (divisor < 0) ? 1 : 0) ? -1 : 1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  var quotient = 0,
    temp = 0;

  while (dividend >= divisor) {
    dividend -= divisor;
    ++quotient;
  }
  if (sign == -1) {
    quotient = -quotient;
  }
  return quotient;
}

var a = 96,
  b = 16;

console.log(devide(a, b));
