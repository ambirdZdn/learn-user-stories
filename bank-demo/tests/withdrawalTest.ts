import Bank from "../src/bank";

// Set up a test suite
const bank = new Bank();

// Scenario 1: Successful Withdrawal
try {
    // Create an account and deposit money to ensure there are sufficient funds
    bank.createAccount("Alice Smith", 30, "1234567");
    bank.deposit("1234567", 5000); // Add money to account
    const withdrawalResult = bank.withdraw("1234567", 2000); // Withdraw an amount within limits
    if (withdrawalResult === "Withdrawal successful. New balance: $3000") {
        console.log("Scenario 1 passed");
    } else {
        console.log("Scenario 1 failed");
    }
} catch (error) {
    console.log("Scenario 1 failed");
}

// Scenario 2: Failed Withdrawal due to Insufficient Funds
try {
    // Ensure the account exists
    bank.createAccount("Bob Johnson", 40, "7654321");
    bank.deposit("7654321", 3000); // Add money to account
    bank.withdraw("7654321", 4000); // Attempt to withdraw more than available balance
    console.log("Scenario 2 failed"); // If no error is thrown, the test fails
} catch (error) {
    if (error instanceof Error && error.message === "Insufficient funds") {
        console.log("Scenario 2 passed");
    } else {
        console.log("Scenario 2 failed");
    }
}

// Scenario 3: Failed Withdrawal due to Exceeding Maximum Limitation
try {
    // Ensure the account exists
    bank.createAccount("Charlie Brown", 35, "1122334");
    bank.deposit("1122334", 15000); // Add money to account
    bank.withdraw("1122334", 12000); // Attempt to withdraw more than the maximum limit
    console.log("Scenario 3 failed"); // If no error is thrown, the test fails
} catch (error) {
    if (error instanceof Error && error.message === "Can't withdraw more than $10,000 at a time") {
        console.log("Scenario 3 passed");
    } else {
        console.log("Scenario 3 failed");
    }
}