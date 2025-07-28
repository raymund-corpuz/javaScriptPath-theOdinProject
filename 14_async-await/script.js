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
