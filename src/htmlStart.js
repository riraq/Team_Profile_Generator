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
    <h2>${employeeInfo.id}</h2>
    <h2>${employeeInfo.email}</h2>
    <h2>${employeeInfo.officeNumber}</h2>
    `;
    htmlGenerated.push(managerData)
};

function htmlEngineer(employeeInfo){
    const engineerData = `
    <h2>${employeeInfo.name}</h2>
    <h2>Engineer</h2>
    <h2>${employeeInfo.id}</h2>
    <h2>${employeeInfo.email}</h2>
    <h2>${employeeInfo.gitHub}</h2>
    `;
    htmlGenerated.push(engineerData)

};

function htmlIntern(employeeInfo){
    const internData = `
    <h2>${employeeInfo.name}</h2>
    <h2>Intern</h2>
    <h2>${employeeInfo.id}</h2>
    <h2>${employeeInfo.email}</h2>
    <h2>${employeeInfo.school}</h2>
    `;
    htmlGenerated.push(internData)
};

function generateHTML(employeeData) {
    console.log('employeeData:  ', employeeData)
    console.log('employeeData length:  ', employeeData.length)
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
                    console.log("This is the iteration for htmlManager", i)
                    console.log("This is the response for htmlManager", response[i])
                    htmlManager(response[i]);
                }
            }
            return response;
        })

        .then((response) => {
            for (let i = 0; i < response.length; i++) {
                if (response[i].hasOwnProperty('gitHub')) {
                    console.log("This is the iteration for htmlEngineer", i)
                    console.log("This is the response for htmlEngineer", response[i])
                    htmlEngineer(response[i]);
                }
            }
            return response;
        })

        .then((response) => {
            for (let i = 0; i < response.length; i++) {
            if (response[i].hasOwnProperty('school')) {
                    console.log("This is the iteration for htmlIntern", i)
                    console.log("This is the response for htmlIntern", response[i])
                    htmlIntern(response[i]);
                }
            }
            return response;
        })


        .then((response) => {
            htmlGenerated.push(htmlEnd);
            console.log("Almost made it to the end!", response)
            return response;
        })

        .then((response) => {
            // console.log("the final step before it works:  ", htmlGenerated)
            // console.log("the final step before it works:  ", htmlGenerated[0])
            fs.writeFile('./dist/index.html', htmlGenerated.join(''), (err) => {
                err ? console.error(err) : console.log('htmlEnd logged!')
            });
            return response;
        })
}

module.exports = generateHTML;