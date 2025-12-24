// public
// private
// protected

class BankAccount {

    constructor(
        public owner: string, 
        private _balance: number, 
        public accountType: string) {
    }

    deposite(amount: number) {
        this._balance += amount
    }


   get balance(): number {
    return this._balance
   }

    set balance(amount: number) {
        if (amount < 0) {
            console.log("Invalid Amount")
            return;
        }

        this._balance = amount;
   }
}


const acc = new BankAccount("Arun", 500, "Savings")

acc.deposite(300)

console.log(acc.balance)

acc.balance = -1
