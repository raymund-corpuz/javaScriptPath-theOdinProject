//The interface segregation principle states that an entity should never be forced to implement an interface that contains elements which it will never use.

class Penguin {}

class Bird {}

const flyer = {
  fly() {
    console.log(`Flap flap, i'm flying`);
  },
};

Object.assign(Bird.prototype, flyer);

const bird = new Bird();
bird.fly();

const penguin = new Penguin();
penguin.fly();
