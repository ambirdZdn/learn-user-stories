// Indicates the type for all bank accounts in the Bank
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
} 

/**
 * Bank class that manages all bank accounts in the bank
 */
export default class Bank {
    // Array to store all bank accounts in the bank
    private accounts: BankAccount[] = [];

    /**
     * Method to find a bank account in the bank
     * @param accountNumber The account number of the bank account
     * @returns The bank account if found, otherwise undefined
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }

    /**
     * Method to create a bank account in the bank
     * @param name The name of the account holder
     * @param age The age of the account holder
     * @param accountNumber The account number of the bank account
     * @returns The created bank account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExitts = this.findAccount(accountNumber);
        if(isAccExitts){
            throw new Error("Account already exists");
        }
        const account: BankAccount = {
            name,
            age,
            accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }
}
