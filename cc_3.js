// Task 1
// Declaring an array with prices 
let prices = [10, 20, 30, 40, 50];

// Adding a new price to the array
prices.push(60);

// Removing the first price from the array
prices.shift();

// Logging the updated price list 
console.log("Updated prices", prices);

// Task 2
// Declare an array orders representing quantities.
let orders = [5, 15, 25, 35, 45];

// Increase the Third order by 5 units
orders[2] += 5;

// Calculate the total number of orders
let totalOrders = orders.reduce((acc, order) => acc + order, 0);

// Logging the total number of orders
console.log("Updated total orders", totalOrders);
