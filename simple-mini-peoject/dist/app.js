"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: "rahat",
    age: 28,
    isEnroll: true,
    course: ["java", "typeScript"],
    score: [23, 456, 12],
    info: ["dhaka", 70, true]
};
const student2 = {
    name: "patel",
    age: 35,
    isEnroll: false,
    course: ["java"],
    score: [12, 3435],
    info: ["indea", 23, false]
};
const studentInfo = (student) => {
    console.log(`name:${student.name}`);
    console.log(`age:${student.age}`);
    console.log(`Courses:${student.course.join(",")}`);
};
studentInfo(student1);
studentInfo(student2);
//# sourceMappingURL=app.js.map