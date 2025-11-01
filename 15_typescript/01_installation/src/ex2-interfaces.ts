// interface User {
//   id: number;
//   name: string;
//   email: string;
//   isAdmin?: boolean; //optional
// }

// //create two user objects
// const user1: User = { id: 1, name: "Alice", email: "alice@email.com" };
// const user2: User = {
//   id: 2,
//   name: "Bob",
//   email: "bob@eamil.com",
//   isAdmin: true,
// };

// //create a function that prints user info
// function printUser(user: User) {
//   console.log(`${user.name} (${user.email})`);
// }

// printUser(user1);
// printUser(user2);

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean; //optional
}

const user1: User = { id: 1, name: "Alice", email: "alice@email.com" };
const user2: User = {
  id: 2,
  name: "Bob",
  email: "bob@email.com",
  isAdmin: true,
};

function printUser(user: User) {
  console.log(`${user.name} (${user.email})`);
}

printUser(user1);
printUser(user2);
