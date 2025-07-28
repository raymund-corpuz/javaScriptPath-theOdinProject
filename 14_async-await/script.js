const server = {
  people: [
    {
      name: "Odin",
      age: 20,
    },
    {
      name: "thor",
      age: 35,
    },
    {
      name: "freyja",
      age: 29,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};

function getPersonsInfo(name) {
  return server.getPeople().then((people) => {
    return people.find((person) => {
      return person.name === name;
    });
  });
}

getPersonsInfo("Odin");

async function getPersonInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find((person) => {
      return person.name === name;
    });
    return person;
  } catch (error) {
    console.log(`Error occured :`, error);
  }
}

console.log(getPersonInfo("Odin"));

const img = document.querySelector(".image");

async function getCats() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats",
    { mode: "cors" }
  );
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}

//Fireship ==============================>

console.log("🥪 Synchronous 1");

setTimeout((_) => console.log(`🍅 Timeout 2`), 0);

Promise.resolve().then((_) => console.log("🍍 Promise"));

console.log("🥪 Synchronous 4");

const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

promise
  .then((res) => res.json())
  .then((user) => {
    throw new Error("uh oh");
    return user;
  })
  .then((user) => console.log("😊", user.title))
  .catch((err) => console.error("😭", err));

console.log("🥪 Synchronous");

// Elapse time ============================>
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}`);

const codeBlocker = () => {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  return "🐷 Billion loops";
};

log("🥪 Synchronouuuuuus");

log(codeBlocker());

log("🥪 Synchronouuuuuus 2");

//async Elapse =================================>
// Elapse time ============================>
const asynctick = Date.now();
const asynclog = (v) =>
  console.log(`${v} \n Elapsed: ${Date.now() - asynctick}`);

const asynccodeBlocker = () => {
  //   let i = 0;
  //   while (i < 1000000000) {
  //     i++;

  //   return new Promise((resolve, reject) => {
  //     let i = 0;

  //     while (i < 1000000000) {
  //       i++;
  //     }
  //     resolve("🐷 Billion loops");
  //   });

  return Promise.resolve().then((v) => {
    let i = 0;
    while (i < 1000000000) {
      return "🐷 billion loops done";
    }
  });
};

asynclog("🥪 Synchronouuuuuus");

asynccodeBlocker().then(asynclog);

asynclog("🥪 Synchronouuuuuus 2");
