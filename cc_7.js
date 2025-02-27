// Task 1: Function Declaration
// Scenario: Customer Invoice Calculation

// Function to calculate the final invoice amount
function calculateInvoice(subtotal, taxRate, discount) {
    const total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
}

// Test Data
console.log(calculateInvoice(100, 0.08, 5)); // Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected output: "Total Invoice: $530.00"

// Task 2: Function Expression
// Scenario: Employee Hourly Wage Calculation

// Function expression to calculate hourly wage
const calculateHourlyWage = function(salary, hoursPerWeek) {
    const hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
}

// Test Data
console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly Wage: $41.21"

// Task 3: Arrow Function
// Scenario: Customer Loyalty Discount

// Arrow function to calculate loyalty discount
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate;
    if (years >= 5) {
        discountRate = 0.15;
    } else if (years >= 3) {
        discountRate = 0.10;
    } else {
        discountRate = 0.05;
    }
    const discountedPrice = amount - (amount * discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
}

// Test Data
console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"

// Task 4: Parameters and Arguments
// Scenario: Product Shipping Cost Calculation

// Function to calculate shipping cost
function calculateShippingCost(weight, location, expedited = false) {
    let cost;
    if (location === "USA") {
        cost = 5 + (0.5 * weight);
    } else if (location === "Canada") {
        cost = 10 + (0.7 * weight);
    } else {
        throw new Error("Unsupported location");
    }
    if (expedited) {
        cost += 10;
    }
    return `Shipping Cost: $${cost.toFixed(2)}`;
}

// Test Data
console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"

// Task 5: Returning Values
// Scenario: Business Loan Interest Calculation

// Function to calculate total loan interest
function calculateLoanInterest(principal, rate, years) {
    const interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}

// Test Data
console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"

// Task 6: Higher-Order Functions
// Scenario: Filtering High-Value Transactions

// Higher-order function to filter high-value transactions
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

// Test Data
let transactions = [500, 1200, 3000, 800, 2200];
console.log(filterHighValueTransactions(transactions, amount => amount > 1000));
// Expected output: [1200, 3000, 2200]

// Task 7: Closures
// Scenario: Budget Tracker

// Function to create a budget tracker
function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance -= expense;
        return `Current Balance: $${balance}`;
    };
}

// Test Data
let budget = createBudgetTracker();
console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -$500"

// Task 8: Recursion in JavaScript
// Scenario: Business Growth Projection

// Recursive function to project revenue growth
function calculateGrowth(years, revenue) {
    if (years === 0) {
        return revenue;
    }
    return calculateGrowth(years - 1, revenue * 1.05);
}

// Test Data
console.log(`Projected Revenue: $${calculateGrowth(8, 1000).toFixed(2)}`); // Expected output: "Projected Revenue: $1102.50"
console.log(`Projected Revenue: $${calculateGrowth(5, 5000).toFixed(2)}`); // Expected output: "Projected Revenue: $6381.41"