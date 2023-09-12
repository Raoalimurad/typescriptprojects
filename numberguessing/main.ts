   
import inquirer from 'inquirer';
console.log("welcome to Rao Ali Murad number guessing game");
const game = Math.floor( Math.random()*10) ;
let result;
const userper = await inquirer.prompt([
    {
        message:"How much time you want to play ",
        name:"permison",
        type:"number",
        

    }])

while(userper.permison>0){
    const useranswer:{
        username:number,
        permisson:number
    }= await inquirer.prompt([
        {
            message:"write any number between 1 to 10 ",
            name:"username",
            type:"number", 
        }
    
    ]);
    let{username,permisson}=useranswer;
    console.log(useranswer)
    console.log(`you have${userper.permison-1} terms `)
    if(username==game){
        console.log("you win")
        userper.permison=0;
    }else{
          console.log("you lose")
    }
    console.log(`your answer is  ${useranswer.username} computer answer is   ${game} i hope you enjoy it`)
  userper.permison--;
}










