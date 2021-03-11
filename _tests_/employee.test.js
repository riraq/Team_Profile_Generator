const Employee = require('../lib/employee.js');

describe('Employee', () => {
    describe('Employee constructor', () => {
        it('should return an object property containing the value of the employee name', () => {
            const employeeName = 'Rony';
            const employeeID = '001';
            const employeeEmail = 'rony@rony.com';
            const obj = new Employee(employeeName, employeeID, employeeEmail);
            
            expect(obj.name).toEqual(employeeName);
            expect(obj.id).toEqual(employeeID);
            expect(obj.email).toEqual(employeeEmail);
        });
    });

    describe('getName', () => {
        it('should return the name of the employee', () => {
            const employeeName = 'Rony';
            const obj = new Employee(employeeName);

            expect(obj.getName()).toEqual(employeeName);
        })
    });

    describe('getId', () => {
        it('should return the ID of the employee', () => {
            const employeeName = '';
            const employeeID = '001';
            const obj = new Employee(employeeName, employeeID);

            expect(obj.getId()).toEqual(employeeID);
        })
    });

    describe('getEmail', () => {
        it('should return the email of the employee', () => {
            const employeeName = '';
            const employeeID = '';
            const employeeEmail = 'rony@rony.com';
            const obj = new Employee(employeeName, employeeID, employeeEmail);

            expect(obj.getEmail()).toEqual(employeeEmail);
        })
    });

    describe('getRole', () => {
        it('should return "Employee"', () => {
            const returnEmployee = 'Employee';
            const employeeName = '';
            const employeeID = '';
            const employeeEmail = '';

            const obj = new Employee(employeeName, employeeID, employeeEmail);

            expect(obj.getRole()).toEqual(returnEmployee);
        })
    });

});