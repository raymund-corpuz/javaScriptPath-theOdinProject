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
