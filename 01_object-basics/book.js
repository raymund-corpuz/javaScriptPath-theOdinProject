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
