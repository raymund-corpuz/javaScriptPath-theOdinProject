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

//Public class fields =====================>
class ClassWithField {
  instanceField;
  instanceFieldWithInitializer = "instance field";
  static staticField;
  staticFieldWithInitializer = "static field";
}

class C {
  [Math.random()] = 1;
}

console.log(new C());
console.log(new C());
// Both instances have the same field name

class Base {
  constructor() {
    console.log("Base constructor", this.field);
  }
}

class Derived extends Base {
  field = 1;
  constructor() {
    super();
    console.log("Derived constructor", this.field);
    this.field = 2;
  }
}

const instance = new Derived();
console.log(instance.field);

//Using Class Fields =============================>

class Person1 {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Person2 {
  name;
  age;
  constructor(properties) {
    Object.assign(this, properties);
  }
}

class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Professor extends Person {
  name = `Professor ${this.name}`;
}

console.log(new Professor("Raymund", 29).name);

//Inheritance =======================================>

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speaks() {
    return `${this.name} barks`;
  }
}

const d = new Dog("Mitzie");
console.log(d.speak());

// Inheritance by practice =================================>

class MLHeroes {
  constructor(name, role, level) {
    this.name = name;
    this.role = role;
    this.level = level;
  }

  levelUp() {
    this.level++;
    return `${this.name} is now level ${this.level}`;
  }

  introduce() {
    return `I'm ${this.name}, a ${this.role}, level ${this.level}.`;
  }
  static compareLevels(hero1, hero2) {
    if (hero1.level > hero2.level) {
      return `${hero1.name} is higher level`;
    } else if (hero2.level > hero1.level) {
      return `${hero2.name} is higher level`;
    } else {
      return `${hero1.name} and ${hero2.name} are same level`;
    }
  }
}

class MarksmanHero extends MLHeroes {
  constructor(name, level) {
    super(name, "Marksman", level);
  }
  ultimate() {
    return `${this.name} casts: Indra's Arrow`;
  }
}
class TankHero extends MLHeroes {
  constructor(name, level) {
    super(name, "Tank", level);
  }
  ultimate() {
    return `${this.name} cast: War Axe Smash`;
  }
}
class MageHero extends MLHeroes {
  constructor(name, level) {
    super(name, "Mage", level);
  }
  ultimate() {
    return `${this.name} cast: sSong of Siren`;
  }
}

const miya = new MarksmanHero("Miya", 1);
const tigreal = new MarksmanHero("Tigreal", 3);
const kagura = new MarksmanHero("Kagura", 2);

console.log(miya.introduce());
console.log(tigreal.introduce());
console.log(kagura.introduce());

miya.levelUp();
miya.levelUp();
miya.levelUp();
console.log(miya.levelUp());
console.log(miya.ultimate());
console.log(MLHeroes.compareLevels(miya, kagura));

//Private in class =========================>
class MLHero {
  #hp = 100;

  takeDamage(amount) {
    this.#hp -= amount;

    return `HP left: ${this.#hp}`;
  }

  getHp() {
    return this.#hp;
  }
}

const hero = new MLHero();
console.log(hero.takeDamage(30));
