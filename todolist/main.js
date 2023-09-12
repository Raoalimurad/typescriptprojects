import inquirer from "inquirer";
let todos = [];
let loap = true;
while (loap) {
    let answers = await inquirer.prompt([
        {
            message: "entre your todo name",
            type: "string",
            name: "todo"
        },
        {
            message: "Do you want more todos ?",
            type: "confirm",
            name: "addtodo",
            default: false
        },
    ]);
    loap = answers.addtodo;
    if (answers.todo) {
        todos.push(answers.todo);
    }
    else {
        console.log("entre valid syntax");
    }
}
if (todos.length > 0) {
    console.log("your todo list is given below");
    todos.forEach(to => {
        console.log(to);
    });
}
;
