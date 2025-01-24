
let inventory = [];

let item1 = { name: "Laptop", model: "X123", cost: 1200, quantity: 10 };
let item2 = { name: "Smartphone", model: "S456", cost: 800, quantity: 25 };
let item3 = { name: "Headphones", model: "H789", cost: 150, quantity: 50 };

inventory.push(item1, item2, item3);


console.log("Inventory:", inventory);
console.log("Quantity of third item:", inventory[2].quantity);


let item4 = { name: "Tablet", model: "T001", cost: 500, quantity: 15 };
inventory.push(item4);

console.log("Updated Inventory:", inventory);
console.log("Model of new item:", inventory[3].model);