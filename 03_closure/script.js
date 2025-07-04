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

//Prototypal inheritance with factories ===================>
function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => level++;
  return { name, getReputation, giveReputation, increaseLevel };
}

const me = createPlayer("raymund", 99);
console.log(me.getReputation());
console.log(me.giveReputation());
console.log(me.giveReputation());
console.log(me.increaseLevel());
console.log(me.increaseLevel());
console.log(me.name);

//module pattern in JavsScript ===================>

const Formatter = (function () {
  console.log("Start");
  const log = (message) => console.log(`[${Date.now()}] logger: ${message}`);

  const makeUppercase = (text) => {
    log("Making uppercase");
    return text.toUpperCase();
  };

  return {
    makeUppercase,
  };
})();

console.log(Formatter.makeUppercase("tomek"));

// Sample 2 ================================>
const Formatter2 = (function () {
  let timesRun = 0;

  const log = (message) => console.log(`[$Date.now()] Logger: ${message}`);

  const setTimesRun = () => {
    log("Setting times run");
    return ++timesRun;
  };

  const makeUppercase = (text) => {
    log("Making uppercase");
    setTimesRun();
    return text.toUpperCase();
  };

  return {
    makeUppercase,
    timesRun,
    setTimesRun,
  };
})();

console.log(Formatter2.makeUppercase("tomek"));
console.log(Formatter2.timesRun);

Formatter2.timesRun = 10;
console.log(Formatter2.setTimesRun());

//Declaring module dependencies ==========================>

const Formatter3 = (function (doc) {
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const makeUppercase = (text) => {
    log("making Uppercase");
    return text.toUpperCase();
  };

  const writeToDOM = (selector, message) => {
    if (!!doc && "querySelector" in doc) {
      doc.querySelector(selector).innerHTML = message;
    }
  };

  return {
    makeUppercase,
    writeToDOM,
  };
})(document);
Formatter3.writeToDOM("div", "Hi there");
