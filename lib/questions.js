const fs = require('fs');
const inquirer = require('inquirer');

const employeeData = [];

function questions() {
    inquirer.prompt([
            {
                // adds a title to the readme
                type: 'input',
                message: 'What is the team manager\'s name?',
                name: 'name',
            },
            {
                // gives a description of the project
                type: 'input',
                message: 'What is the team manager\'s id?',
                name: 'id',
            },
            {
                // what needs to be installed in order to run the application
                type: 'input',
                message: 'What is the team manager\'s email?',
                name: 'email',
            },
            {
                // what is this application used for/who would use it
                type: 'input',
                message: 'What is the team manager\'s office number?',
                name: 'officeNumber',
            }
        ])

        // returns license badge and formatting for license section
        .then((response) => {
            employeeType();
            return response;
        })

        // .then((data) => {
        //     return data
        // })
        
        // .then((toBeWritten) => {
        //     fs.writeFile('generatedReadme.md', toBeWritten, (err) =>
        //         err ? console.error(err) : console.log('Success!')
        //     );
        // })
}

function employeeType(){
    inquirer
    .prompt([
        {
            type: 'list',
            message:'Which type of team member would you like to add?',
            name: 'employeeTypePrompt',
            choices: ['Engineer', 'Intern', 'Continue without adding more']
        }
    ])
    .then((response) => {
        switch(response.employeeTypePrompt) {
            case 'Engineer':
                engineerPrompt(response);
                break;
            case 'Intern':
                internPrompt(response);
                break;
            case 'Continue without adding more':
                break;
            default:
                break;
        };
    });
};

function engineerPrompt(response){
    inquirer
    .prompt([
        {
            // adds a title to the readme
            type: 'input',
            message: 'What is the engineer\'s name?',
            name: 'name',
        },
        {
            // gives a description of the project
            type: 'input',
            message: 'What is the engineer\'s id?',
            name: 'id',
        },
        {
            // what needs to be installed in order to run the application
            type: 'input',
            message: 'What is the engineer\'s email?',
            name: 'email',
        },
        {
            // what needs to be installed in order to run the application
            type: 'input',
            message: 'What is the engineer\'s GitHub?',
            name: 'gitHub',
        },
    ])
    .then((response) =>{
        employeeType();
    })
}

function internPrompt(response){
    inquirer
    .prompt([
        {
            // adds a title to the readme
            type: 'input',
            message: 'What is the intern\'s name?',
            name: 'name',
        },
        {
            // gives a description of the project
            type: 'input',
            message: 'What is the intern\'s id?',
            name: 'id',
        },
        {
            // what needs to be installed in order to run the application
            type: 'input',
            message: 'What is the intern\'s email?',
            name: 'email',
        },
        {
            // what needs to be installed in order to run the application
            type: 'input',
            message: 'What is the intern\'s school?',
            name: 'school',
        },
    ])
    .then((response) =>{
        employeeType();
    })
}

module.exports = {questions}