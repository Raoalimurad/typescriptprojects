import inquirer from "inquirer";
let converstion = {
    "PKR": {
        "USD": 0.0033,
        "EURO": 0.0030,
        "PKR": 1
    },
    "USD": {
        "PKR": 307.47,
        "EURO": 0.93,
        "USD": 1
    },
    "EURO": {
        "PKR": 330.11,
        "USD": 1.07,
        "EURO": 1,
    }
};
let answer = await inquirer.prompt([
    {
        message: "select your currency",
        type: "list",
        choices: ["PKR", "USD", "EURO"],
        name: "before"
    },
    {
        message: "select convertion currency",
        type: "list",
        choices: ["PKR", "USD", "EURO"],
        name: "after"
    },
    {
        message: "entre your convertion amount ",
        type: "number",
        name: "amount"
    }
]);
if (answer.before && answer.after && answer.amount) {
    let result = converstion[answer.before][answer.after] * answer.amount;
    console.log(`your amount is ${answer.before} to ${answer.after} is ${result}`);
}
else {
    console.log("invalid syntax please choose right value");
}
