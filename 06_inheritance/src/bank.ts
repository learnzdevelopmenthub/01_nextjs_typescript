abstract class BankAccount {
    constructor(
        private _accountNumber: string,
        protected balance: number,
        public owner: string
    ) {
    }

    private _validateAccount(): boolean {
        return this._accountNumber.length === 10;
    }

    protected updateBalance(amount: number): void {
        if (!this._validateAccount()) {
            return;
        }
        this.balance += amount;
    }

    public getAccountInfo(): void {
        console.log(`Owner: ${this.owner}`)
        console.log(`Balance: ${this.balance}`)
    }

    abstract getType(): void;
}


class SavingsAccount extends BankAccount {

    override getType(): string {
       return "SavingsAccount"
    }
    
    addInterest(rate: number): void {
        const intrest = this.balance * rate / 100

        this.updateBalance(intrest)
    }
}


const acc = new SavingsAccount("1234567890", 1000, "Arun")
console.log(acc.owner)
acc.addInterest(10)
acc.getAccountInfo()

