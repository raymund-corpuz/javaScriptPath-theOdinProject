interface Account {
  id: number;
  owner: string;
  balance: number;
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
}

class BankAccount implements Account {
  constructor(
    public id: number,
    public owner: string,
    public balance: number
  ) {}

  deposit(amount: number) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New Balance: ${this.balance}`);
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }

    this.balance -= amount;
    console.log(`Withdrew ${amount}. New balance ${this.balance}`);
  }
}

const acc = new BankAccount(1, "Ray", 500);
acc.deposit(200);
