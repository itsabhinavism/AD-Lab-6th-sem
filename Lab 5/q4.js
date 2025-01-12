class Employee {
    constructor(firstName, lastName, yearsWorked) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.yearsWorked = yearsWorked;
    }
  
    
    getDetails() {
      return `${this.firstName} ${this.lastName} has worked for ${this.yearsWorked} years.`;
    }
  }
  
    const employees = [
    new Employee("Alice", "John", 15),
    new Employee("Bob", "Jack", 10),
    new Employee("Charles", "Brown", 12)
  ];
  employees.forEach(employee => {
    console.log(employee.getDetails());
  });