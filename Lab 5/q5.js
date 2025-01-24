class Menu {
    #item1Price = 10; // Price for Item 1
    #item2Price = 15; // Price for Item 2
  
    constructor(item1Count, item2Count) {
      this.item1Count = item1Count;
      this.item2Count = item2Count;
    }
  
    
    calculateTotalCost() {
      return this.item1Count * this.#item1Price + this.item2Count * this.#item2Price;
    }
 
    get totalCost() {
      return this.calculateTotalCost();
    }
  }
  
  const order1 = new Menu(2, 3); // 2 Item1 and 3 Item2
  const order2 = new Menu(1, 1); // 1 Item1 and 1 Item2
  const order3 = new Menu(0, 4); // 0 Item1 and 4 Item2
  
  console.log(`Total cost for order 1: $${order1.totalCost}`);
  console.log(`Total cost for order 2: $${order2.totalCost}`);
  console.log(`Total cost for order 3: $${order3.totalCost}`);