import Bank from "../src/bank";

//set up a test suite
const bank = new Bank();

//scenario 1
const account = bank.createAccount("John Doe", 29,"9274937");
if(account.accountNumber === "9274937"){
    console.log("Scenario 1 passed");
}
else{
    console.log("Scenario 1 failed");
}

//scenario 2
try {
    bank.createAccount("Jane Doe", 29,"9274937");
    console.log("Scenario 2 failed");
}
catch(_){
    console.log("Scenario 2 passed");
}