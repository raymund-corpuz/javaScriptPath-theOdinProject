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
