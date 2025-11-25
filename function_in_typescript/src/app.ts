// normal function 
// function funstionName (parameter1,parameter2){
//     // logic
// }


// funstion with typescript
// function funstionName(parameter1:type,parameter2:type):returnType{
//     // logic
// }

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// function greet (name:string):string{
//     return `hello ${name}`
// }
// console.log(greet("rahat"));
// console.log(greet("patel"));

// arrow
// const greet = (name:string):string=>{
//     return `hello ${name}`
// }
// console.log(greet("patel"));

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// function type signature
// let greetFunction : (name:string) => string
// greetFunction= function(name){
//     return `hi:${name}`
// }
// console.log(greetFunction("patel"));

// arrow
// let greetFunction : (name:string)=>string
// greetFunction= (name):string=>{
// return `${name}`
// }
// console.log(greetFunction("rahat"));

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// optional parameter
// function greet (firstName:string,lastName:string,age?:number):string{
//     return `${firstName} ${lastName} age:${age?age:"N/A"}`
// }
// console.log(greet("rahat","khan"));
// console.log(greet("rahat","khan",34));

// // arrow
// const greet = (firstName:string,lastName:string,age?:number)=>{
//     return `${firstName} ${lastName} age: ${age?age:"N/A"}`
// }
// console.log(greet("rahat","khan"));
// console.log(greet("rahat","khan",29));

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// default parameter
// function welcomeMessage (name:string = "Guest"):string{
//     return `welcome ${name}`
// }
// console.log(welcomeMessage("rahat"));
// console.log(welcomeMessage());

// arrow
// const welcomeMessage = (name:string = "Guest"):string=>{
// return `Welcome ${name}`
// }
// console.log(welcomeMessage());
// console.log(welcomeMessage("rahat"));

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// return type : option -1
// function sunOfTwoNumber(a:number,b:number):{a:number,b:number,sum:number}{

//     const sum = a + b
//     return {sum,a,b}
// }
// const result = sunOfTwoNumber(5,10)
// console.log(`sum of ${result.a} and ${result.b} is : ${result.sum}`);

// arrow
// const sunOfTwoNumber=(a:number,b:number):{a:number,b:number,sum:number}=>{
// const sum = a+b
// return {a,b,sum}
// }
// const result = sunOfTwoNumber(10,12)
// console.log(`sum of ${result.a} and ${result.b} is : ${result.sum}`);
 
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// return type : option -2
// type sumOfTowNumber = {
//     a:number,
//     b:number,
//     sum:number
// }

// function sumOfTowNumber(a:number,b:number):sumOfTowNumber{
//     const sum = a+b
//     return {a,b,sum}
// }

// const result = sumOfTowNumber(55,10)
// console.log(`Sum of ${result.a} and ${result.b} is : ${result.sum}`);

// arrow
// type sumOfTowNumber = {
//     a:number,
//     b:number,
//     sum:number
// }

// const sumOfTowNumberFn = (a:number,b:number):sumOfTowNumber=>{
//     const sum = a+b;
//     return {a,b,sum}
// }

// const result = sumOfTowNumberFn(10,12)
// console.log(`sum of ${result.a} and ${result.b} is : ${result.sum}`);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// return : void
// function sunOfTwoNumberAndPrint (a:number,b:number):void{
//     const result = a+b;
//     console.log(`sum of ${a} and ${b} is : ${result}`);
    
// }

// sunOfTwoNumberAndPrint(12,12)

// arrow
// const sumOfTowNumberAndPrint=(a:number,b:number):void=>{
// const sum = a+b
// console.log(`sum of ${a} and ${b} is : ${sum}`);

// }

// sumOfTowNumberAndPrint(12,12)
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// return : never
// Because this function never returns a value — it stops execution permanently.
// function throwError(message:string):never{
//     throw new Error(message)
// }

// throwError("someThing went Wrong...")


// const throwError = (message:string):never=>{
//     throw new Error(message)
// }

// throwError("some Thing went wrong...")