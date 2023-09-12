import inquirer from "inquirer";
import chalk from 'chalk';
let score = 0;
const questions = await inquirer.prompt([
    {
        message: chalk.yellow("Who is the founder of pakistan"),
        type: 'list',
        choices: ["ALLAMA IQBAL", "QUAID AZAM", "SIR SYED", "LIAQUAT ALI KHAN"],
        name: "ques1"
    },
    {
        message: chalk.yellow("Who is first prime minsiter of pakistan"),
        type: 'list',
        choices: ["ALLAMA IQBAL", "QUAID AZAM", "SIR SYED", "LIAQUAT ALI KHAN"],
        name: "ques2"
    },
    {
        message: chalk.yellow("Who is the current president of pakistan"),
        type: 'list',
        choices: ["ARIF ALVI", "QUAID AZAM", "KAMRAN TESSORI", "LIAQUAT ALI KHAN"],
        name: "ques3"
    },
    {
        message: chalk.yellow("Who is the prime minister of India?"),
        type: 'list',
        choices: ["modi", "obama", "chengojong", "LIAQUAT ALI KHAN"],
        name: "ques4"
    },
    {
        message: chalk.yellow("Who is the first governer general of pakistan ?"),
        type: 'list',
        choices: ["ALLAMA IQBAL", "QUAID AZAM", "SIR SYED", "LIAQUAT ALI KHAN"],
        name: "ques5"
    },
    {
        message: chalk.yellow("Who called the poet of east ?"),
        type: 'list',
        choices: ["QUAID AZAM", "ALLAMA IQBAL", "SIR SYED", "LIAQUAT ALI KHAN"],
        name: "ques6"
    },
    {
        message: chalk.yellow("WHO is the current governer of sindh ?"),
        type: 'list',
        choices: ["MURTAZA WAHAB", "IMRAN KHAN", "KAMRAN TESSORI", "LIAQUAT ALI KHAN"],
        name: "ques7"
    },
    {
        message: chalk.yellow("Who is the current captain of Pakistan team ?"),
        type: 'list',
        choices: ["SARFARAZ AHMED", "SHADAB KHAN", "M.AMIR", "BABAR AZAM"],
        name: "ques8"
    },
    {
        message: chalk.yellow("Who is the founder of microsoft ?"),
        type: 'list',
        choices: ["STEVE JOBS ", "ELON MASK", "NAWAZ KHAN", "BILL GATES"],
        name: "ques9"
    },
    {
        message: chalk.yellow("WhAT is the formula of water"),
        type: 'list',
        choices: ["H2O", "H2O34 ", " CO2", "H2SO4"],
        name: chalk.red("ques10")
    },
]);
if (questions.ques1 == "QUAID AZAM") {
    chalk.green(console.log(`YOUR ANSWER IS ${questions.ques1} AND RIGHT ANSWER IS QUAID AZAM THAT'S WHY YOU ARE RIGHT`));
    score++;
}
else {
    chalk.red(console.log(`YOUR ANSWER IS ${questions.ques1} AND RIGHT ANSWER IS QUAID AZAM THAT'S WHY YOU ARE WRONG`));
}
;
if (questions.ques2 == "LIAQUAT ALI KHAN") {
    chalk.green(console.log(`YOUR ANSWER IS ${questions.ques2} AND RIGHT ANSWER IS LIAQUAT ALI KHAN THAT'S WHY YOU ARE RIGHT`));
    score++;
}
else {
    chalk.red(console.log(`YOUR ANSWER IS ${questions.ques2} AND RIGHT ANSWER IS LIAQUAT ALI KHAN THAT'S WHY YOU ARE WRONG`));
}
;
if (questions.ques3 == "ARIF ALVI") {
    chalk.green(console.log(`YOUR ANSWER IS ${questions.ques3} AND RIGHT ANSWER IS ARIF ALVI THAT'S WHY YOU ARE RIGHT`));
    score++;
}
else {
    chalk.red(console.log(`YOUR ANSWER IS ${questions.ques3} AND RIGHT ANSWER IS ARIF ALVI THAT'S WHY YOU ARE WRONG`));
}
;
if (questions.ques4 == "modi") {
    chalk.green(console.log(`YOUR ANSWER IS ${questions.ques4} AND RIGHT ANSWER IS MODI THAT'S WHY YOU ARE RIGHT`));
    score++;
}
else {
    console.log(`YOUR ANSWER IS ${questions.ques4} AND RIGHT ANSWER IS MODI THAT'S WHY YOU ARE WRONG`);
}
if (questions.ques5 == "QUAID AZAM") {
    console.log(`YOUR ANSWER IS ${questions.ques5} AND RIGHT ANSWER IS QUAID AZAM THAT'S WHY YOU ARE RIGHT`);
    score++;
}
else {
    console.log(`YOUR ANSWER IS ${questions.ques5} AND RIGHT ANSWER IS QUAID AZAM THAT'S WHY YOU ARE WRONG`);
}
if (questions.ques6 == "ALLAMA IQBAL") {
    console.log(`YOUR ANSWER IS ${questions.ques6} AND RIGHT ANSWER IS ALLAMA IQBAL THAT'S WHY YOU ARE RIGHT`);
    score++;
}
else {
    console.log(`YOUR ANSWER IS ${questions.ques6} AND RIGHT ANSWER IS ALLAMA IQBAL THAT'S WHY YOU ARE WRONG`);
}
if (questions.ques7 == "KAMRAN TESSORI") {
    console.log(`YOUR ANSWER IS ${questions.ques7} AND RIGHT ANSWER IS KAMRAN TESSORI THAT'S WHY YOU ARE RIGHT`);
    score++;
}
else {
    console.log(`YOUR ANSWER IS ${questions.ques7} AND RIGHT ANSWER IS KAMRAN TESSORI THAT'S WHY YOU ARE WRONG`);
}
if (questions.ques8 == "BABAR AZAM") {
    console.log(`YOUR ANSWER IS ${questions.ques8} AND RIGHT ANSWER IS BABAR AZAM THAT'S WHY YOU ARE RIGHT`);
    score++;
}
else {
    console.log(`YOUR ANSWER IS ${questions.ques8} AND RIGHT ANSWER IS BABAR AZAM THAT'S WHY YOU ARE WRONG`);
}
if (questions.ques9 == "BILL GATES") {
    console.log(`YOUR ANSWER IS ${questions.ques9} AND RIGHT ANSWER IS BILL GATES THAT'S WHY YOU ARE RIGHT`);
    score++;
}
else {
    console.log(`YOUR ANSWER IS ${questions.ques9} AND RIGHT ANSWER IS BILL GATES THAT'S WHY YOU ARE WRONG`);
}
if (questions.ques10 == "H2O") {
    console.log(`YOUR ANSWER IS ${questions.ques10} AND RIGHT ANSWER IS H20 THAT'S WHY YOU ARE RIGHT`);
    score++;
}
else {
    console.log(`YOUR ANSWER IS ${questions.ques10} AND RIGHT ANSWER IS H20 THAT'S WHY YOU ARE WRONG`);
}
console.log(`QUIZ COMPLETED ! YOUR SCORE IS ${score} OUT OF 10`);
