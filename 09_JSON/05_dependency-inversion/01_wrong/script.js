//The dependency injection principle states that high level code should never depend on low level interfaces, and should instead use abstractions. It’s all about decoupling code.

class Keyboard {
  input() {
    return `Typing on keyboard...`;
  }
}

class Computer {
  constructor() {
    this.keyboard = new Keyboard(); // Directly dependent
  }

  use() {
    console.log(this.keyboard.input());
  }
}
