import Bank from "../src/bank";

// Set up a test suite
const bank = new Bank();

// Scenario 1: Successful Balance Inquiry
try {
    // Create an account and deposit money to ensure there is a balance
    bank.createAccount("David Wilson", 45, "9988776");
    bank.deposit("9988776", 3500); // Add money to account
    const balanceResult = bank.checkBalance("9988776"); // Check the balance
    if (balanceResult === "Current balance: $3500") {
        console.log("Scenario 1 passed");
    } else {
        console.log("Scenario 1 failed");
    }
} catch (error) {
    console.log("Scenario 1 failed");
}

// Scenario 2: Failed Balance Inquiry for Non-Existent Account
try {
    bank.checkBalance("0000000"); // Attempt to check balance for a non-existent account
    console.log("Scenario 2 failed"); // If no error is thrown, the test fails
} catch (error) {
    if (error instanceof Error && error.message === "Account not found") {
        console.log("Scenario 2 passed");
    } else {
        console.log("Scenario 2 failed");
    }
}