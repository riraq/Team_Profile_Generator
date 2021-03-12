const Employee = require('../lib/employee.js');
const Intern = require('../lib/intern.js');

describe('Intern', () => {
    describe('Intern constructor', () => {
        it('should return an object property containing the value of the employee name, id, email, and office number', () => {
            const employeeName = 'Rony';
            const employeeID = '001';
            const employeeEmail = 'rony@rony.com';
            const employeeSchool = 'UT Austin'
            const obj = new Intern(employeeName, employeeID, employeeEmail, employeeSchool);
            
            expect(obj.name).toEqual(employeeName);
            expect(obj.id).toEqual(employeeID);
            expect(obj.email).toEqual(employeeEmail);
            expect(obj.school).toEqual(employeeSchool);
        });
    });

    describe('getSchool', () => {
        it('should return the school of the employee', () => {
            const employeeName = '';
            const employeeID = '';
            const employeeEmail = '';
            const employeeSchool = 'UT Austin'
            const obj = new Intern(employeeName, employeeID, employeeEmail, employeeSchool);

            expect(obj.getSchool()).toEqual(employeeSchool);
        })
    });

    describe('getRole', () => {
        it('should return "Intern"', () => {
            const returnIntern = 'Intern';
            const employeeName = '';
            const employeeID = '';
            const employeeEmail = '';
            const employeeSchool = 'UT Austin'
            
            const obj = new Intern(employeeName, employeeID, employeeEmail, employeeSchool);

            expect(obj.getRole()).toEqual(returnIntern);
        })
    });

});