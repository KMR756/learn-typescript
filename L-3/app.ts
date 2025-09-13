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
// console.log(sum, combineName);

//
//
// ____________________________________________________________
// literal type
function combine2(
  num3: number | string,
  num4: number | string,
  conversionType: "as-number" | "as-string"
) {
  let result;
  if (
    (typeof num3 === "number" && typeof num4 === "number") ||
    conversionType === "as-number"
  ) {
    result = +num3 + +num4;
  } else {
    result = num3.toString() + " " + num4.toString();
  }
  return result;
}

const sum2 = combine2(20, 10, "as-number");
const sum3 = combine2("20", 20, "as-number");
const combineName2 = combine2("Rahat", "khan", "as-string");
console.log(sum2, sum3, combineName2);

// type alias | custom type
