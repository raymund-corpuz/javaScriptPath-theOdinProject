function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? "read" : "not yet read";
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", false);

console.log(theHobbit.info());

//__proto__ Object ==============================>
function Player(name, team, sport) {
  this.name = name;
  this.team = team;
  this.sport = sport;
  return `Hi! I'm ${this.name}, I have a team called ${this.team}  we play ${this.sport}`;
}

const player1 = new Player();
const player2 = new Player();

console.log(Object.getPrototypeOf(player1) === Player.prototype);
console.log(Object.getPrototypeOf(player2) === Player.prototype);
