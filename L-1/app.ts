// types: number , string , boolean
function add(
  num1: number,
  num2: number,
  printResult: boolean,
  someText: string
) {
  if (printResult) {
    console.log(`${someText} ${num1 + num2}`);
  }
  return num1 + num2;
}

const n1 = 50;
const n2 = 30;
const printResult = true;
const someText = "sum of two number:";
add(n1, n2, printResult, someText);
// console.log(ans);
