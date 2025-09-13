// union : pipe | in typescript . add multiple datatypes .
function combine(num1: number | string, num2: number | string) {
  let result;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + " " + num2.toString();
  }
  return result;
}

const sum = combine(12, 23);
const combineName = combine("rahat", "khan");
console.log(sum, combineName);

// literal type
// type alias | custom type
