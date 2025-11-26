"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operator;
(function (Operator) {
    Operator["Add"] = "+";
    Operator["Subtract"] = "-";
    Operator["Multiply"] = "*";
    Operator["Divide"] = "/";
    Operator["Power"] = "pow";
})(Operator || (Operator = {}));
// Add
const sumOfTwoNumber = (a, b) => {
    return { a, b, result: a + b };
};
const subtractOfTwoNumber = (a, b) => {
    return { a, b, result: a - b };
};
const multipleOfTwoNumber = (a, b) => {
    return { a, b, result: a * b };
};
const divideOfTwoNumber = (a, b) => {
    if (b === 0) {
        return { a, b, result: "b dont be zero" };
    }
    return { a, b, result: a / b };
};
const powerOfTwoNumber = (a, b) => {
    return { a, b, result: Math.pow(a, b) };
};
const calcutale = (operator, a, b) => {
    switch (operator) {
        case Operator.Add: return sumOfTwoNumber(a, b);
        case Operator.Subtract: return subtractOfTwoNumber(a, b);
        case Operator.Multiply: return multipleOfTwoNumber(a, b);
        case Operator.Divide: return divideOfTwoNumber(a, b);
        case Operator.Power: return powerOfTwoNumber(a, b);
        default:
            throw new Error("invalid input...");
    }
};
console.log(calcutale(Operator.Add, 2, 2));
console.log(calcutale(Operator.Subtract, 2, 2));
//# sourceMappingURL=canlulator.js.map