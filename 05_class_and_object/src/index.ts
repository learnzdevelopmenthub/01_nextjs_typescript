class Account {
    readonly id: number;
    owner: string;
    balance: number;
    nickname?: string | undefined;

    constructor(accountNumber: number, owner: string, balance: number, nickname?: string | undefined) {
        this.id = accountNumber
        this.owner = owner
        this.balance = balance
        this.nickname = nickname
    }

    deposit(amount: number): void {
        this.balance += amount;
    }
}


const acc1 = new Account(1, "Arun", 1000)
console.log(acc1)
// acc1.id = 3
const acc2 = new Account(1, "siva", 500, "siva")
console.log(acc2)