class Employee {
   constructor (name, id, email) {
       this.name = name
       this.id = id
       this.email = email
   };

   getName() {
       console.log(`Name: ${this.name}`)
   }
};

const newEmployee = new Employee('Rony', '001', 'rony@rony.com')

newEmployee.getName()

module.exports = Employee;