import inquirer from "inquirer";

const answers =await inquirer. prompt([
    {
       message:"Entre the words which you want to count",
       type:"input",
       name:"userinput",
    }
])
let result = answers.userinput;
const final=result.trim().split(" ");
console.log(`The length of your words is  ${final.length}`)