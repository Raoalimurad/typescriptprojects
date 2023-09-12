import inquirer from "inquirer";
import chalk from "chalk";
class player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fueldecrese() {
        let fueel = this.fuel - 25;
        this.fuel = fueel;
    }
    fuelincrese() {
        this.fuel = 100;
    }
}
class opposite {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fueldecrese() {
        let fueel = this.fuel - 25;
        this.fuel = fueel;
    }
}
let questions = await inquirer.prompt([
    {
        message: "kindly enter your name",
        type: "input",
        name: "username"
    },
    {
        message: "kindly select your oponent",
        type: "list",
        choices: ["Skeleton", "zombie", "snacks"],
        name: "userchoice"
    }
]);
let p1 = new player(questions.username);
let o1 = new player(questions.userchoice);
console.log(chalk.bold.red(`${questions.username} VS ${questions.userchoice}`));
while (true) {
    if (questions.userchoice == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                message: "select your choice which you want",
                type: "list",
                choices: ["Attack", "Drinkfuel", "Run for your life"],
                name: "opt"
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            console.log(num);
            if (num > 0) {
                p1.fueldecrese();
                console.log(chalk.bold.red(`${p1.name} now your fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} now your fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(console.log(chalk.bold.red("you loose try next time !")));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrese();
                console.log(chalk.bold.red(`${o1.name} now your fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} now your fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(console.log(chalk.bold.green("HURRAH you win !")));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drinkfuel") {
            p1.fuelincrese();
            console.log(chalk.bold.italic.green(`${p1.name}  you drink health portion now your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(console.log(chalk.bold.red("you loose try next time !")));
            process.exit();
        }
    }
    if (questions.userchoice == "zombie") {
        let ask = await inquirer.prompt([
            {
                message: "select your choice which you want",
                type: "list",
                choices: ["Attack", "Drinkfuel", "Run for your life"],
                name: "opt"
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            console.log(num);
            if (num > 0) {
                p1.fueldecrese();
                console.log(chalk.bold.red(`${p1.name} now your fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} now your fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(console.log(chalk.bold.red("you loose try next time !")));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrese();
                console.log(chalk.bold.red(`${o1.name} now your fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} now your fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(console.log(chalk.bold.green("HURRAH you win !")));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drinkfuel") {
            p1.fuelincrese();
            console.log(chalk.bold.italic.green(`${p1.name}  you drink health portion now your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(console.log(chalk.bold.red("you loose try next time !")));
            process.exit();
        }
    }
    if (questions.userchoice == "snacks") {
        let ask = await inquirer.prompt([
            {
                message: "select your choice which you want",
                type: "list",
                choices: ["Attack", "Drinkfuel", "Run for your life"],
                name: "opt"
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            console.log(num);
            if (num > 0) {
                p1.fueldecrese();
                console.log(chalk.bold.red(`${p1.name} now your fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} now your fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(console.log(chalk.bold.red("you loose try next time !")));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrese();
                console.log(chalk.bold.red(`${o1.name} now your fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} now your fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(console.log(chalk.bold.green("HURRAH you win !")));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drinkfuel") {
            p1.fuelincrese();
            console.log(chalk.bold.italic.green(`${p1.name}  you drink health portion now your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(console.log(chalk.bold.red("you loose try next time !")));
            process.exit();
        }
    }
}
