//Primitives: number, string, boolean
//more complex types: arrays. objects
//function types, parameters

//Primitives
let age: number;
age = 25;
let username: string | string[];
username = "anuzza";
let isStudent: boolean;
isStudent = true;

//more complex types
let hobbies: string[];

hobbies = ["sports", "music", "cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

//array of objects
let people: Person[];

//Type inference

let course: string | number = "React-The Complete Guide";

course = 98509;

//functions & types
// return type can be given as well
function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}
