class Light {
  light: string;
  constructor(light: string) {
    this.light = light;
  }

  sign() {
    throw Error("not implemented");
  }
}

class RedLight extends Light {
  constructor() {
    super("red");
  }

  sign() {
    return "Stop";
  }
}

class YellowLight extends Light {
  constructor() {
    super("yellow");
  }

  sign() {
    return "Wait";
  }
}

class GreenLight extends Light {
  constructor() {
    super("green");
  }

  sign() {
    return "go";
  }
}

export class TrafficLight {
  states: Light[];
  current: Light;

  constructor() {
    this.states = [new RedLight(), new YellowLight(), new GreenLight()];
    this.current = this.states[0];
  }

  change() {
    const total = this.states.length;
    let index = this.states.findIndex((light) => light === this.current);

    if (index + 1 < total) {
      this.current = this.states[index + 1];
    } else {
      this.current = this.states[0];
    }
  }

  sign() {
    return this.current.sign();
  }
}
