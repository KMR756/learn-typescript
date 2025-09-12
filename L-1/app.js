// types: number , string , boolean
function add(num1, num2, printResult, someText) {
  if (printResult) {
    console.log("".concat(someText, " ").concat(num1 + num2));
  }
  return num1 + num2;
}
var n1 = 50;
var n2 = 30;
var printResult = true;
var someText = "sum of two number:";
add(n1, n2, printResult, someText);
// console.log(ans);
