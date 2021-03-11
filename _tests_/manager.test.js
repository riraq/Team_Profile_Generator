const Employee = require('../lib/employee.js');
const Manager = require('../lib/manager.js');

describe('Manager', () => {
    describe('Manager constructor', () => {
        it('should return an object property containing the value of the employee name, id, email, and office number', () => {
            const employeeName = 'Rony';
            const employeeID = '001';
            const employeeEmail = 'rony@rony.com';
            const employeeOfficeNumber = '111'
            const obj = new Manager(employeeName, employeeID, employeeEmail, employeeOfficeNumber);
            
            expect(obj.name).toEqual(employeeName);
            expect(obj.id).toEqual(employeeID);
            expect(obj.email).toEqual(employeeEmail);
            expect(obj.officeNumber).toEqual(employeeOfficeNumber);
        });
    });

    describe('getOfficeNumber', () => {
        it('should return the office number of the employee', () => {
            const employeeName = '';
            const employeeID = '';
            const employeeEmail = '';
            const employeeOfficeNumber = '111'
            const obj = new Manager(employeeName, employeeID, employeeEmail, employeeOfficeNumber);

            expect(obj.getOfficeNumber()).toEqual(employeeOfficeNumber);
        })
    });

    describe('getRole', () => {
        it('should return "Manager"', () => {
            const returnManager = 'Manager';
            const employeeName = '';
            const employeeID = '';
            const employeeEmail = '';
            const employeeOfficeNumber = '111'
            
            const obj = new Manager(employeeName, employeeID, employeeEmail, employeeOfficeNumber);

            expect(obj.getRole()).toEqual(returnManager);
        })
    });

});