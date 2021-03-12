const questions = require('../lib/questions')
const fs = require('fs');


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

const htmlEnd = `    <script type="text/javascript" src="../lib/writeToDoc.js"></script>
</body>
</html>`;

function htmlManager(employeeInfo){
    const managerData = `
    <h2>${employeeInfo.name}</h2>
    <h2></h2>
    <h2>${employeeInfo.id}</h2>
    <h2>${employeeInfo.email}</h2>
    <h2>${employeeInfo.officeNumber}</h2>
    `;
    fs.appendFile('index.html', managerData, (err) => {
        err ? console.error(err) : console.log('Commit logged!')
      });

};

function htmlEngineer(employeeInfo){
    const engineerData = `
    <h2>${employeeInfo.name}</h2>
    <h2></h2>
    <h2>${employeeInfo.id}</h2>
    <h2>${employeeInfo.email}</h2>
    <h2>${employeeInfo.gitHub}</h2>
    `;
    fs.appendFile('index.html', engineerData, (err) => {
        err ? console.error(err) : console.log('Commit logged!')
      });

};

function htmlIntern(employeeInfo){
    const internData = `
    <h2>${employeeInfo.name}</h2>
    <h2></h2>
    <h2>${employeeInfo.id}</h2>
    <h2>${employeeInfo.email}</h2>
    <h2>${employeeInfo.school}</h2>
    `;
    fs.appendFile('index.html', internData, (err) => {
        err ? console.error(err) : console.log('Commit logged!')
      });

    
};

function generateHTML(employeeData){
    console.log('employeeData:  ', employeeData)
    fs.appendFile('./dist/index.html', htmlStart, (err) => {
        err ? console.error(err) : console.log('Commit logged!')
      });
    for(let i=0; i<employeeData.length; i++){
        if (employeeData.hasOwnProperty('officeNumber')){
            htmlManager(employeeData);
        }
        else if(employeeData.hasOwnProperty('gitHub')){
            htmlEngineer(employeeData);
        }
        else if(employeeData.hasOwnProperty('school')){
            htmlIntern(employeeData);
        };

        if(i = employeeData.length - 1){
            fs.appendFile('index.html', htmlEnd, (err) => {
                err ? console.error(err) : console.log('Commit logged!')
              });
        
        }
    }
}

module.exports = generateHTML;