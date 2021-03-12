const questions = require('../lib/questions')
const fs = require('fs');
const Manager = require('../lib/manager');

const htmlGenerated = [];

const htmlStart = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link href="./style.css" rel="stylesheet">
    <title>Team Profile</title>
</head>
<body>`;

const htmlEnd = `
    <script type="text/javascript" src="../lib/writeToDoc.js"></script>
</body>
</html>`;

function htmlManager(employeeInfo){
    const managerData = `
    <h2>${employeeInfo.name}</h2>
    <h2>Manager</h2>
    <h3>ID: ${employeeInfo.id}</h3>
    <h3>Email: ${employeeInfo.email}</h3>
    <h3>Office Number: ${employeeInfo.officeNumber}</h3>
    `;
    htmlGenerated.push(managerData)
};

function htmlEngineer(employeeInfo){
    const engineerData = `
    <h3>${employeeInfo.name}</h3>
    <h3>Engineer</h3>
    <h3>ID: ${employeeInfo.id}</h3>
    <h3>Email: ${employeeInfo.email}</h3>
    <h3>GitHub: ${employeeInfo.gitHub}</h3>
    `;
    htmlGenerated.push(engineerData)

};

function htmlIntern(employeeInfo){
    const internData = `
    <h3>${employeeInfo.name}</h3>
    <h3>Intern</h3>
    <h3>ID: ${employeeInfo.id}</h3>
    <h3>Email: ${employeeInfo.email}</h3>
    <h3>School: ${employeeInfo.school}</h3>
    `;
    htmlGenerated.push(internData)
};

function generateHTML(employeeData) {
    const htmlPromise = new Promise((resolve, reject) => {
        if (employeeData) {
            resolve(employeeData)
        }
        else {
            reject(err)
        }
    })

    htmlPromise
        .then((response) => {
            htmlGenerated.push(htmlStart);
            return response;
        })

        .then((response) => {
            for (let i = 0; i < response.length; i++) {
                if (response[i].hasOwnProperty('officeNumber')) {
                    htmlManager(response[i]);
                }
            }
            return response;
        })

        .then((response) => {
            for (let i = 0; i < response.length; i++) {
                if (response[i].hasOwnProperty('gitHub')) {
                    htmlEngineer(response[i]);
                }
            }
            return response;
        })

        .then((response) => {
            for (let i = 0; i < response.length; i++) {
            if (response[i].hasOwnProperty('school')) {
                    htmlIntern(response[i]);
                }
            }
            return response;
        })


        .then((response) => {
            htmlGenerated.push(htmlEnd);
            return response;
        })

        .then((response) => {
            fs.writeFile('./dist/index.html', htmlGenerated.join(''), (err) => {
                err ? console.error(err) : console.log('Your Team Profile has been created!')
            });
            return response;
        })
}

module.exports = generateHTML;