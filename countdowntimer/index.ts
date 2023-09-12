import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.italic.green("welcome to RAO ALI MURAD count down timer"));

async function gather() {
    let timer = await inquirer.prompt([
        {
            message: "Enter your timer in secounds",
            type: "number",
            name: "timers"
        }])
    let seconds =timer.timers;

    const makeIteration = (): void => {
         console.clear()
        if (seconds > 0) {
            console.log(chalk.greenBright(`  YOUR TIME IS REMAINING:         ${seconds}                   `));
            setTimeout(makeIteration, 1000); // 1 second waiting
            seconds -= 1;
        } else {
            console.log(chalk.red((`             COUNTDOWN IS COMPLETE            `)));
            restart()

        }
    };
    console.clear()
    setTimeout(makeIteration,)
}
gather()

async function restart() {
    let req = await inquirer.prompt([
        {
            message: "DO YOU WANT TO START AGAIN ?",
            type:"list",
            choices: ["yes","No"],
            name: "ask"
        }
    ]);
    let requried = req.ask;
    if (requried ==="yes"){
        console.clear();
        gather();
    }
    else if(requried ==="No"){
        console.log(chalk.bold.italic.yellow("THANKS FOR USING RAO ALI MURAD COUNTDOWN TIMER"))
    }

};
