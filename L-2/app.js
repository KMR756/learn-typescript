// object , array , tuple , enum
//
//
//______________________________________________________
// object and array
var person = {
    name: "rahat Khan",
    age: 29,
    isDeveloper: true,
    address: {
        road: "Mirpur",
        district: "dhaka",
    },
    skills: ["reactJs", "nodeJs", "HTML", "CSS"],
    marks: [1, 2, 345, 655, 34],
};
var myFavouriteLanguage1;
myFavouriteLanguage1 = ["bangla", "english"];
var myFavouriteLanguage2; // dont use in typescript
myFavouriteLanguage2 = ["bangla", "english", 43, true];
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isDeveloper);
console.log(person.address.road);
console.log(person.address.district);
console.log(person.skills);
console.log(person.skills[1]);
console.log(person.marks);
console.log(person.marks[4]);
console.log(myFavouriteLanguage1);
console.log(myFavouriteLanguage1[1]);
console.log(myFavouriteLanguage2);
console.log(myFavouriteLanguage2[2]);
console.log(myFavouriteLanguage2[3]);
//
//
//______________________________________________________
// tuple : fixed array of many types
var person2 = {
    name: "Rahat khan",
    age: 27,
    skills: ["react", "node", "html", "css"],
    product: [10, "mackbook pro m2", 120000],
};
// person2.product[1]= 30;    //not valid , cant assign string value as a number
person2.product[0] = 20;
// person2.product= [10, "mackbook pro m2", 120000, "fevourite"]    //not valid
console.log(person2);
console.log(person2.product[0]);
console.log(person2.product[1]);
console.log(person2.product[2]);
//
//
//______________________________________________________
// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person3 = {
    name: "rahat",
    age: 23,
    skils: ["react", "node", "HTML"],
    role: Role.ADMIN,
};
if (person3.role === Role.ADMIN) {
    console.log("ADMIN");
}
else if (person3.role === Role.AUTHOR) {
    console.log("AUTHOR");
}
else if (person3.role === Role.USER) {
    console.log("USER");
}
