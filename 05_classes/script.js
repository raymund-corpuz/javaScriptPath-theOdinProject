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

//Overview of Classes

const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());

if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time");
}

// Exercise ============================>
function Hero(name, level) {
  this.name = name;
  this.level = level;
  this.sayHi = function () {
    return `Hello, I'm ${this.name}. Nice Meeting you!`;
  };
  this.myLevel = function () {
    ++level;
    return `level up ${this.level}`;
  };
}

const alucard = new Hero("Alucard", 5);
console.log(alucard.name, alucard.level, alucard.sayHi(), alucard.myLevel());

//Defining Classes ==================================>
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

//Expression; the class is anonymous but assign to a variable
const RectangleExpression = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

//Expression; the class has its own name
const RectangelHasOwnName = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

//Super key word

class Foo {
  constructor(name) {
    this.name = name;
  }
  getNameSeparator() {
    return "-";
  }
}

class FooBar extends Foo {
  constructor(name, index) {
    super(name);
    this.index = index;
  }

  getNameSeparator() {
    return "/";
  }

  getFullName() {
    return this.name + super.getNameSeparator() + this.index;
  }
}

const firstFooBar = new FooBar("foo", 1);

console.log(firstFooBar.name);
console.log(firstFooBar.getFullName());
console.log(firstFooBar.getNameSeparator());
console.log(firstFooBar.getFullName());
