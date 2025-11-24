// // premitive data type

// // string
// let name : string = "rahat"

// name = "patel"

// let age  = 23
// age = 29


// let isMarrid :boolean = false
// isMarrid=true
// console.log(name,age,isMarrid);

// // array and tuples
// let score :number[]= [23,4,6,788,54]
// const score2 :Array<number> = [23,43564,6654,23434]
// let name : string[] =["rahat","patel"]
// const name2 : Array<string> = ["rahat khn","ptel khn","gorib"]
// console.log(name[1]);
// console.log(name2[2]);

// console.log(score);
// console.log(score2);

// // tuples
// const student : [string,number,boolean]= ["rahat",26,false]
// console.log(student);


// any typs : not recomented
let ramdomValue:any = "hello";
// ramdomValue=12
// ramdomValue=false
console.log(ramdomValue.trim());


let unknowValue:unknown = "rahat"

if (typeof unknowValue === "string") {
  console.log(unknowValue.toUpperCase()); // ✔ safe
}

// void
function sentHello (a:number,b:number):void{
  
  console.log(`sum: ${a+b}`);
  
   
    
}
sentHello(12,12)


// null : no value no define || and undefind : define but not assign 
const nullValue :null = null;
const undefineValue :undefined = undefined


console.log(nullValue,undefineValue);

