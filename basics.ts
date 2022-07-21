//Primitives: number, string, boolean
//more complex types: arrays. objects
//function types, parameters

//Primitives
let age: number;
age = 25;
let username: string;
username = "anuzza";
let isStudent: boolean;
isStudent = true;

//more complex types
let hobbies: string[];

hobbies = ["sports", "music", "cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

//array of objects
let people: {
  name: string;
  age: number;
}[];

//Type inference

let course = "React-The Complete Guide";

//course=98509;
