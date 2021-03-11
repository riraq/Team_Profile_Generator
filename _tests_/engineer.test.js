const Employee = require('../lib/employee.js');
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Engineer constructor', () => {
        it('should return an object property containing the value of the employee name, id, email, and office number', () => {
            const employeeName = 'Rony';
            const employeeID = '001';
            const employeeEmail = 'rony@rony.com';
            const employeeGitHub = 'riraq'
            const obj = new Engineer(employeeName, employeeID, employeeEmail, employeeGitHub);
            
            expect(obj.name).toEqual(employeeName);
            expect(obj.id).toEqual(employeeID);
            expect(obj.email).toEqual(employeeEmail);
            expect(obj.gitHub).toEqual(employeeGitHub);
        });
    });

    describe('getGitHub', () => {
        it('should return the github username of the employee', () => {
            const employeeName = 'Rony';
            const employeeID = '001';
            const employeeEmail = 'rony@rony.com';
            const employeeGitHub = 'riraq'
            const obj = new Engineer(employeeName, employeeID, employeeEmail, employeeGitHub);

            expect(obj.getGitHub()).toEqual(employeeGitHub);
        })
    });

    describe('getRole', () => {
        it('should return "Engineer"', () => {
            const returnEngineer = 'Engineer';
            const employeeName = '';
            const employeeID = '';
            const employeeEmail = '';
            const employeeGitHub = 'riraq'
            
            const obj = new Engineer(employeeName, employeeID, employeeEmail, employeeGitHub);

            expect(obj.getRole()).toEqual(returnEngineer);
        })
    });

});