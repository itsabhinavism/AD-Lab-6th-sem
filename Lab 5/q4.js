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
    new Employee("Alice", "Johnson", 5),
    new Employee("Bob", "Smith", 8),
    new Employee("Charlie", "Brown", 2)
  ];

  employees.forEach(employee => {
    console.log(employee.getDetails());
  });