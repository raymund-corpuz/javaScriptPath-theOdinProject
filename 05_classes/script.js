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
