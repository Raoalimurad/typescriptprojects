import inquirer from "inquirer";

 const answers= await inquirer.prompt([
    {
        message:"Kindly entre your id",
        type:"input",
        name:"userid",
    }, 
    {
        message:"Kindly entre your pincode",
        type:"number",
        name:"userpin",
        when(answers) {
            return answers.userid
        }
    },

    
    {
        message:"Select your account type (HINT saving means add money in your account):",
        type:"list",
        choices:["current","saving"],
        name:"accounttype",
        when(answers) {
            return answers.userpin
        },
    }, 
   
    {
        message:"Select your transition type:",
        type:"list",
        choices:["fast cash","withdraw"],
        name:"transition",
        when(answers) {
            return answers.accounttype=="current"
        }
    }, 
    {
        message:"Select amount which you would like tp add:",
        type:"number",
        name:"amount1",
        when(answers) {
            return answers.accounttype=="saving"
        }
    }, 
    {
        message:"Select amount please:",
        type:"list",
        choices:["1000","3000","5000","10000"],
        name:"amount",
        when(answers) {
            return answers.transition=="fast cash"
        }
    }, 
    {
        message:"kindly entre amount please:",
        type:"number",
        name:"amount",
        when(answers) {
            return answers.transition=="withdraw"
        }
    }, 
 ])
 if(answers.userid && answers.userpin &&answers.accounttype=="current"){
    let autobalance= Math.floor(Math.random()*100000)
    console.log(`your previous balnce is ${autobalance}`)
    let balance =answers.amount
    if(autobalance>=balance){
        console.log("Now your currrent balance is ",autobalance-balance)
    }else{
        console.log("insufficent balance")
    }
         
 }else if(answers.userid && answers.userpin &&answers.accounttype=="saving"){
    let autobalance= Math.floor(Math.random()*100000)
    let result1 = answers.amount1
    console.log(`your previous balnce is ${autobalance}`)
    console.log("Now your current balance is ", autobalance + result1)

 }else{
    console.log("you are wrong")
 }

 