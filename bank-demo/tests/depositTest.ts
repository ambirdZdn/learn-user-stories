import Bank from "../src/bank";

// Set up a test suite
const bank = new Bank();

// Scenario 1: Successful Deposit
try {
    const newAccount = bank.createAccount("John Doe", 29, "9274937");
    const depositResult = bank.deposit("9274937", 50);
    if (depositResult === "Deposit successful. New balance: $50") {
        console.log("Scenario 1 passed");
    } else {
        console.log("Scenario 1 failed");
    }
} catch (error) {
    console.log("Scenario 1 failed");
}

// Scenario 2: Deposit Amount Too Low
try {
    // Ensure the account exists before testing
    bank.createAccount("Jane Doe", 29, "9274938");
    bank.deposit("9274938", 5); // Less than minimum deposit
    console.log("Scenario 2 failed"); // If no error is thrown, the test fails
} catch (error) {
    if (error instanceof Error && error.message === "Error: Deposit amount too low. Minimum deposit is $10.") {
        console.log("Scenario 2 passed");
    } else {
        console.log("Scenario 2 failed");
    }
}

// Scenario 3: Deposit into Non-Existent Account
try {
    bank.deposit("9999999", 50); // Account does not exist
    console.log("Scenario 3 failed"); // If no error is thrown, the test fails
} catch (error) {
    if (error instanceof Error && error.message === "Account not found") {
        console.log("Scenario 3 passed");
    } else {
        console.log("Scenario 3 failed");
    }
}