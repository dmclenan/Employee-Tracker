const { prompt } = require("inquirer");
const db = require("./db/dbQueries");


function mainMenu() {
    prompt([
        {
            type: "list",
            Name: "choice",
        message: "what would you like to do?",
            choices: [
                {
                    name: "view All Employees",
                    value: "VIEW_EMPLOYEES"
                },

                {
                    name: "Quit",
                    value: "Quit"
                }
            ]
        }
    ]).then(res => {
        let choices = res.choices;

    })
}

function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("/n");
            console.table(employees)
        })
        .then(() => mainMenu());
}


function quit() {
    console.log("goodbye!");
    Process.exit();
};

mainMenu();