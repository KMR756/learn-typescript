// simple calculator using typeScript 
type TwoNumber = {
    a:number,
    b:number,
    result:number|string
}

enum Operator {
    Add= "+",
    Subtract= "-",
    Multiply= "*",
    Divide= "/",
    Power= "pow"
}

// Add
const sumOfTwoNumber = (a:number,b:number):TwoNumber=>{
    return {a,b,result:a+b}
}

const subtractOfTwoNumber = (a:number,b:number):TwoNumber=>{
    return {a,b,result:a-b}
} 

const multipleOfTwoNumber = (a:number,b:number):TwoNumber=>{
    return{a,b,result:a*b}
}

const divideOfTwoNumber = (a:number,b:number):TwoNumber=>{
    if(b===0){
        return {a,b,result:"b dont be zero"}
    }
    return {a,b,result:a/b}
}

const powerOfTwoNumber = (a:number,b:number):TwoNumber=>{
    return {a,b,result:Math.pow(a,b)}
}

const calcutale = (operator:string,a:number,b:number):TwoNumber=>{
    switch(operator){
        case Operator.Add: return sumOfTwoNumber(a,b);
        case Operator.Subtract: return subtractOfTwoNumber(a,b);
        case Operator.Multiply: return multipleOfTwoNumber(a,b);
        case Operator.Divide: return divideOfTwoNumber(a,b);
        case Operator.Power: return powerOfTwoNumber(a,b);
        default:
            throw new Error("invalid input...")
    }
}

console.log(calcutale(Operator.Add,2,2))
console.log(calcutale(Operator.Subtract,2,2))