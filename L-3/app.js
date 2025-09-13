// union : pipe | in typescript . add multiple datatypes .
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + " " + num2.toString();
    }
    return result;
}
var sum = combine(12, 23);
var combineName = combine("rahat", "khan");
// console.log(sum, combineName);
//
//
// ____________________________________________________________
// literal type
function combine2(num3, num4, conversionType) {
    var result;
    if ((typeof num3 === "number" && typeof num4 === "number") ||
        conversionType === "as-number") {
        result = +num3 + +num4;
    }
    else {
        result = num3.toString() + " " + num4.toString();
    }
    return result;
}
var sum2 = combine2(20, 10, "as-number");
var sum3 = combine2("20", 20, "as-number");
var combineName2 = combine2("Rahat", "khan", "as-string");
function combine3(value1, value2, conversionType) {
    var result;
    if ((typeof value1 === "number" && typeof value2 === "number") ||
        conversionType === "as-number") {
        result = +value1 + +value2;
    }
    else {
        result = value1.toString() + " " + value2.toString();
    }
    return result;
}
var sum4 = combine3(12, 23, "as-number");
var sum5 = combine3("12", 23, "as-number");
var combineName3 = combine3("rahat", "khan", "as-string");
console.log(sum4, sum5, combineName3);
