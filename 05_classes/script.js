let userGet = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

userGet.fullName = "Alice Cooper";
console.log(userGet.name);
console.log(userGet.surname);
console.log(userGet.fullName);
console.log((userGet.fullName = "Raymund Corpuz"));
console.log(userGet.name);
console.log(userGet.surname);

//Accessor Descriptors ===========================================>
let userSet = {
  name: "John",
  surname: "Smith",
};

Object.defineProperty(userSet, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

console.log(userSet.fullName);
for (let key in userSet) console.log(key);

//Smarter getters/setter ================================>

let userSmarter = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  },
};

userSmarter.name = "Gio";
console.log(userSmarter.name);

//Using for compatibility ===========================>
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}

let john = new User("John", new Date(1992, 6, 11));
console.log(john.birthday);

//Class basic syntax ===============================>

function UserConstructor(name) {
  this.name = name;
  this.isAdmin = false;
}

let userConstructor = new UserConstructor("Jack");

console.log(userConstructor.name);
console.log(userConstructor.isAdmin);

//Constructor mode test:  new.target =======================>

function UserNewTarget(name) {
  if (!new.target) {
    return new UserNewTarget(name);
  }

  this.name = name;
}

let johnny = UserNewTarget("John");
console.log(johnny.name);
