#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Inquirer_1 = require("Inquirer");
var Chalk_1 = require("Chalk");
console.log(Chalk_1.default.bold.italic.blueBright("<<<-------------------------------------------------------------->>>"));
console.log(Chalk_1.default.italic.bold.yellow("<<<>----------------------- QUIZ START -------------------------<>>>"));
console.log(Chalk_1.default.bold.italic.blueBright("<<<<------------------------------------------------------------->>>"));
var questions = await Inquirer_1.default.prompt([
    {
        name: "Name",
        type: "input",
        message: "Enter your Full Name:"
    },
    {
        name: "q1",
        type: "list",
        message: "1-What is Typescript primarily used for?",
        choices: [
            "A. Memory Management",
            "B. Dynamic Typing",
            "C. Static Typing", //correct
            "D. Asynchronous Operations"
        ]
    },
    {
        name: "q2",
        type: "list",
        message: "2-How do you specify that a function does not return anything in Typescript?",
        choices: [
            "A. function myfunc():void", //correct
            "B. function myfunc():undefined",
            "C. function myfunc():null",
            "D. function myfunc():None "
        ]
    },
    {
        name: "q3",
        type: "list",
        message: "3-How do you define an optional parameter in the Typescript function?",
        choices: [
            "A. function std(email:string?)",
            "B. function std(email?:string)", //correct
            "C. function std(email:string=)",
            "D. function std(email string?)"
        ]
    },
    {
        name: "q4",
        type: "list",
        message: "4-How do you declare a variable that can be either a string or null in Typescript?",
        choices: [
            "A. let variable: string || null;",
            "B. let variable: string && null;",
            "C. let variable: string & null;",
            "D. let variable: string | null;"
        ] //correct
    },
    {
        name: "q5",
        type: "list",
        message: "5-What is the purpose of the never type in Typescript?",
        choices: [
            "A. To indicate a function always throw an exception or never returns", //correct
            "B. To indicate that a variable can be any type",
            "C. To represent the absence of values",
            "D. To represent the absence of a type"
        ]
    },
    {
        name: "q6",
        type: "list",
        message: "6-In Typescript,What does an enum allow you to do?",
        choices: [
            "A. Store a list of numeric values",
            "B. Store a set of named constants,numeric or string", //correct
            "C. Define a new data type",
            "D. Assin multiple types to a variable"
        ]
    },
    {
        name: "q7",
        type: "list",
        message: "7-How do you define an array of strings in Typescript?",
        choices: [
            "A. Array<string>",
            "B. Both A and B",
            "C. string[]", //correct
            "D. List<string>"
        ]
    },
    {
        name: "q8",
        type: "list",
        message: "8-How can you allow an object to have any number of properties of a given type in Typescript?",
        choices: [
            "A. {[key:any]:string;}",
            "B. {[key:string]:any;}", //correct
            "C. {[property:string]:string;}",
            "D. {[value:string]:string;}"
        ]
    },
    {
        name: "q9",
        type: "list",
        message: "9-What is the primary purpose of Typescript interfaces?",
        choices: [
            "A. To describe the shape of an object", //correct
            "B. To create nes classes",
            "C. To generate HTML templates",
            "D. To manage asynchoronous code"
        ]
    },
    {
        name: "q10",
        type: "list",
        message: "10-In Typescript,how do you enforce a variable to be of a specific type at compile time?",
        choices: [
            "A. Using the force keyword",
            "B. Using the type keyword",
            "C. By casting the variable",
            "D. By using type annotations"
        ] //correct
    }
]);
var result = 0;
switch (questions.q1) {
    case "C. Static Typing":
        console.log(Chalk_1.default.green("Correct"));
        ++result;
        break;
    default:
        console.log(Chalk_1.default.red("Incorrect!"));
}
switch (questions.q2) {
    case "A. function myfunc():void":
        console.log(Chalk_1.default.green("Correct"));
        ++result;
        break;
    default:
        console.log(Chalk_1.default.red("Incorrect!"));
}
switch (questions.q3) {
    case "B. function std(email?:string)":
        console.log(Chalk_1.default.green("Correct"));
        ++result;
        break;
    default:
        console.log(Chalk_1.default.red("Incorrect!"));
}
switch (questions.q4) {
    case "D. let variable: string | null;":
        console.log(Chalk_1.default.green("Correct"));
        ++result;
        break;
    default:
        console.log(Chalk_1.default.red("Incorrect!"));
}
switch (questions.q5) {
    case "A. To indicate a function always throw an exception or never returns":
        console.log(Chalk_1.default.green("Correct"));
        ++result;
        break;
    default:
        console.log(Chalk_1.default.red("Incorrect!"));
}
switch (questions.q6) {
    case "B. Store a set of named constants,numeric or string":
        console.log(Chalk_1.default.green("Correct"));
        ++result;
        break;
    default:
        console.log(Chalk_1.default.red("Incorrect!"));
}
switch (questions.q7) {
    case "C. string[]":
        console.log(Chalk_1.default.green("Correct"));
        ++result;
        break;
    default:
        console.log(Chalk_1.default.red("Incorrect!"));
}
switch (questions.q8) {
    case "B. {[key:string]:any;}":
        console.log(Chalk_1.default.green("Correct"));
        ++result;
        break;
    default:
        console.log(Chalk_1.default.red("Incorrect!"));
}
switch (questions.q9) {
    case "A. To describe the shape of an object":
        console.log(Chalk_1.default.green("Correct"));
        ++result;
        break;
    default:
        console.log(Chalk_1.default.red("Incorrect!"));
}
switch (questions.q10) {
    case "D. By using type annotations":
        console.log(Chalk_1.default.green("Correct"));
        ++result;
        break;
    default:
        console.log(Chalk_1.default.red("Incorrect!"));
}
console.log(Chalk_1.default.bold.green("\n                   *****   RESULT   *****"));
console.log(Chalk_1.default.italic.blue("\n\t <<<<---- ".concat(Chalk_1.default.bold.yellowBright(questions.Name), ": Score ").concat(Chalk_1.default.bold.yellowBright(result), " out of ").concat(Chalk_1.default.bold.yellowBright(10), " ---->>>> \uD83D\uDC4D")));
