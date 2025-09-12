// object , array , tuple , enum

//
//
//______________________________________________________
// object and array
const person: {
  name: string;
  age: number;
  isDeveloper: boolean;
  address: {
    road: string;
    district: string;
  };
  skills: string[];
  marks: number[];
} = {
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

let myFavouriteLanguage1: string[];
myFavouriteLanguage1 = ["bangla", "english"];

let myFavouriteLanguage2: any[]; // dont use in typescript
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
const person2: {
  name: string;
  age: number;
  skills: string[];
  product: [number, string, number];
} = {
  name: "Rahat khan",
  age: 27,
  skills: ["react", "node", "html", "css"],
  product: [10, "mackbook pro m2", 120000],
};

console.log(person2);
console.log(person2.product[0]);
console.log(person2.product[1]);
console.log(person2.product[2]);
