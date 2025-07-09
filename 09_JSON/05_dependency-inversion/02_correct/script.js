class Computer {
  constructor(inputDevice) {
    this.inputDevice = inputDevice; // ✅ depends on abstraction
  }

  use() {
    console.log(this.inputDevice.input());
  }
}

class Keyboard {
  input() {
    return "Typing on keyboard...";
  }
}

class TouchScreen {
  input() {
    return "Tapping on screen...";
  }
}

const keyboard = new Keyboard();
const touchscreen = new TouchScreen();

const pc1 = new Computer(keyboard);
const pc2 = new Computer(touchscreen);

pc1.use(); // Typing on keyboard...
pc2.use(); // Tapping on screen...
