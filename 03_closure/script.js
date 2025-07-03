function makeFunc() {
  const name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

const myFunc = makeFunc();
myFunc();

// CLOSURE IN DEPT DETAILS ================>

function createAccount(account) {
  let balance = account;

  return {
    deposit: (ammount) => {
      balance = ammount + balance;
      console.log(`You deposite ${ammount}, your total balance ${balance}`);
    },

    withdraw: (ammount) => {
      if (ammount > balance) {
        console.log("Insuficient balance");
      } else {
        balance = balance - ammount;
        console.log(`You withdraw ${ammount}, your total balance ${balance}`);
      }
    },
  };
}
const myAccount = createAccount(1000);
myAccount.deposit(200);
myAccount.withdraw(500);
myAccount.withdraw(10000);

//Private variabls and functions ========================>

function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;
  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
console.log(josh.giveReputation());
console.log(josh.giveReputation());

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation(),
});
