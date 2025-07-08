import User, { printAge as age, printName as name } from "./user.js";

const user = new User("Raymund", 29);

console.log(user.name);

name(user);
age(user);
