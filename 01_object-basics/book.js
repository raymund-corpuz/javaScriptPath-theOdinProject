// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read ? "read" : "not yet read";
//   this.info = function () {
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
//   };
// }

// const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", false);

// console.log(theHobbit.info());

// //__proto__ Object ==============================>
// function Player(name, team, sport) {
//   this.name = name;
//   this.team = team;
//   this.sport = sport;
//   this.print = function () {
//     return `Hi! I'm ${this.name}, I have a team called ${this.team}  we play ${this.sport}`;
//   };
// }

// const player1 = new Player("Messi", "Philippines", "basketball");
// const player2 = new Player("Ronaldo", "Japangasinan", "basketball");

// console.log(Object.getPrototypeOf(player1) === Player.prototype);
// console.log(Object.getPrototypeOf(player2) === Player.prototype);

// console.log(player1.print());
// console.log(player2.print());

// console.log(player1.hasOwnProperty("valueOf"));
// console.log(Object.prototype.hasOwnProperty("valueOf"));

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  return `Hello, I'm ${this.name}`;
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  return `My marker is 
        '${this.marker}'`;
};

console.log(Object.getPrototypeOf(Player.prototype));

Object.setPrototypeOf(Player.prototype, Person.prototype);
console.log(Object.getPrototypeOf(Player.prototype));

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "0");

console.log(player1.sayName());

console.log(player2.sayName());
console.log(player1.getMarker());
console.log(player2.getMarker());

//CONSTRUCTOR FUNCTIONS =================================>
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

let hero1 = new Hero("Bjorn", 1);
console.log(hero1);
console.log(Object.getPrototypeOf(hero1));

Hero.prototype.greet = function () {
  return `${this.name} says hello`;
};

console.log(hero1.greet());

//call method =========================>
function Warrior(name, level, weapon) {
  Hero.call(this, name, level);
  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);
  this.spell = spell;
}

Warrior.prototype.attack = function () {
  return `${this.name} attaks with the ${this.weapon}`;
};

Healer.prototype.heal = function () {
  return `${this.name} cast ${this.spell}`;
};

const heroWarrior = new Warrior("Bjorn", 1, "axe");
const heroHealer = new Healer("Kanin", 1, "cure");

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

console.log(heroWarrior.attack());
console.log(heroWarrior.greet());
console.log(heroHealer.heal());
console.log(heroHealer.greet());

//this Keyword ===================================>
let counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};

console.log(counter.next());

//Simple function invocation ===========================>
// function show() {
//   console.log(this === window);
// }

// show();

//Method Invocation  =====================================>
let car = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};

console.log(car.getBrand());

let brand = car.getBrand.bind(car);
console.log(brand());

// =======================================================>

const Dog = function (name) {
  this.name = name;
  let barkCount = 0;

  this.bark = function () {
    barkCount++;
    return `${this.name} "bark"`;
  };

  this.getBrakCount = function () {
    return `${this.name} has barked ${barkCount} times`;
  };
};

Dog.prototype.wagTail = function () {
  return `${this.name} is wagging tail`;
};

const myDog = new Dog("Dave");
console.log(myDog.bark());
console.log(myDog.bark());
console.log(myDog.getBrakCount());
console.log(myDog.wagTail());

// Mobile Legends Reference ===================================>

function MLHero(name) {
  this.name = name;
  let level = 1;

  this.levelUp = function () {
    level++;
    return `${level} level up`;
  };
  this.sayHello = function () {
    return `Hello I'm ${this.name} nice to meet you`;
  };
}

MLHero.prototype.isWarrior = function () {
  return `${this.name} is a warrior`;
};

function MyHeroAbility(name, ability) {
  MLHero.call(this, name);
  this.ability = ability;
}

// MyHeroAbility.prototype = Object.create(MLHero.prototype);
// MyHeroAbility.prototype.constructor = MyHeroAbility;

MyHeroAbility.prototype.firstSkill = function () {
  return `I will use ${this.ability}`;
};
Object.setPrototypeOf(MyHeroAbility.prototype, MLHero.prototype);

const myMLHero = new MyHeroAbility("Alucard", "Katon Fire Ball Technique");

console.log(myMLHero.name);
console.log(myMLHero.levelUp());
console.log(myMLHero.sayHello());
console.log(myMLHero.isWarrior());
console.log(myMLHero.firstSkill());

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    const display = `${this.brand} are affordable, ${this.model} has amazing features`;

    return display;
  }
}

const newCar = new Car("Toyota", "Corolla", 2022);
console.log(newCar.displayInfo());
