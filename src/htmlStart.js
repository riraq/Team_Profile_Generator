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
<body>
    <nav class="navbar navbar-expand-lg navbar-light">
        <h1 class="ms-auto me-auto p-4">My Team</h1>
    </nav>
    <div class="container">
        <div class="row row-cols-auto">   
    `;

const htmlEnd = `
        </div>    
    </div>
</body>
</html>`;

function htmlManager(employeeInfo) {
    const managerData = `
    <div class="card m-3 mx-auto col" style="width: 18rem;">  
        <h3 class="card-header">
            ${employeeInfo.name}
        </h3>
        <div class="card-body">
            <h4 class="card-title">Manager</h4>
            <p class="card-text">ID: ${employeeInfo.id}</p>
            <p>Email: <a href="mailto:${employeeInfo.email}">${employeeInfo.email}</a></p>
            <p>Office Number: ${employeeInfo.officeNumber}</p>
        </div>
    </div>`;
    htmlGenerated.push(managerData)
};

function htmlEngineer(employeeInfo) {
    const engineerData = `
    <div class="card m-3 mx-auto col" style="width: 18rem;">  
        <h3 class="card-header">
            ${employeeInfo.name}
        </h3>
        <div class="card-body">
            <h4 class="card-title">Engineer</h4>
        <p class="card-text">ID: ${employeeInfo.id}</p>
        <p>Email: <a href="mailto:${employeeInfo.email}">${employeeInfo.email}</a></p>
        <p>GitHub: <a href="https://github.com/${employeeInfo.gitHub}">https://github.com/${employeeInfo.gitHub}</a></p>
    </div>
</div>`;
    htmlGenerated.push(engineerData)

};

function htmlIntern(employeeInfo) {
    const internData = `
    <div class="card m-3 mx-auto col" style="width: 18rem;">  
        <h3 class="card-header">
            ${employeeInfo.name}
        </h3>
        <div class="card-body">
            <h4 class="card-title">Intern</h4>
        <p class="card-text">ID: ${employeeInfo.id}</p>
            <p>Email: <a href="mailto:${employeeInfo.email}">${employeeInfo.email}</a></p>
            <p>School: ${employeeInfo.school}</p>
        </div>
    </div>`;
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