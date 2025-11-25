type Student = {
    name:string,
    age:number,
    isEnroll:boolean,
    course:string[],
    score:number[],
    info:[string,number,boolean]
}

const student1:Student={
    name:"rahat",
    age:28,
    isEnroll:true,
    course:["java","typeScript"],
    score:[23,456,12],
    info:["dhaka",70,true]
}

const student2:Student={
    name:"patel",
    age:35,
    isEnroll:false,
    course:["java"],
    score:[12,3435],
    info:["indea",23,false]
}

const studentInfo=(student:Student):void=>{
    console.log(`name:${student.name}`);
    console.log(`age:${student.age}`);
    console.log(`Courses:${student.course.join(",")}`);
    
}

studentInfo(student1)
studentInfo(student2)