// import inquirer from "inquirer";

// const answers:{num1:number,num2:number,operator:string}= await inquirer.prompt([
//     {
//         message:"Entre the first value ",
//         type:"number",
//         name:"num1"
//     },
//     {
//         message:"Entre the first value ",
//         type:"number",
//         name:"num2"
//     },
//     {
//         message:"Entre the operator which you want  ",
//         type:"list",
//         choices:["+","-","*","/"],
//         name:"operator"
//     }
// ]);
// const {num1,num2,operator}=answers;
// if(num1 && num2 && operator){
//     let result:number=0;
//     if(operator=="+"){
//         result= num1+num2;
//     }else if(operator=="-"){
//         result= num1-num2;
//     }else if(operator=="*"){
//         result= num1*num2;
//     }else if(operator=="/"){
//         result= num1/num2;
//     }
//     console.log("your answer is",result);
// }
// else{
//   console.log("your result not find because of error")
// }