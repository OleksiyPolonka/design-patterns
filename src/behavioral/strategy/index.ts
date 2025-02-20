abstract class Vehicle {
  abstract timeTaken: number;

  travelTime() {
    return this.timeTaken;
  }
}

export class Bus extends Vehicle {
  constructor(public override timeTaken = 10) {
    super();
  }
}

export class Taxi extends Vehicle {
  constructor(public override timeTaken = 5) {
    super();
  }
}

export class Car extends Vehicle {
  constructor(public override timeTaken = 3) {
    super();
  }
}

export class Commute {
  travel(transport: Vehicle) {
    return transport.travelTime();
  }
}
