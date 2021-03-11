const Employee = require('../lib/employee.js');

describe('Employee', () => {
    describe('Employee class', () => {
        it('should return an object property containing the value of the employee name', () => {
            const employeeName = 'Rony';
            const employeeID = '001';
            const employeeEmail = 'rony@rony.com';
            const obj = new Employee(employeeName, employeeID, employeeEmail);
            
            expect(obj.name).toEqual(employeeName)
            expect(obj.id).toEqual(employeeID)
            expect(obj.email).toEqual(employeeEmail)
        });
    });
});