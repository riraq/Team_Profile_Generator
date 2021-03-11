class Employee {
   constructor (name, id, email) {
       this.name = name;
       this.id = id;
       this.email = email;
   };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return 'Employee';
    };
};

const newEmployee = new Employee('Rony', '001', 'rony@rony.com')

newEmployee.getName()

module.exports = Employee;