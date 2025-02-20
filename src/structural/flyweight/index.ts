abstract class AbstractCar {
  abstract model: string;
  abstract price: number;
}

class Car implements AbstractCar {
  constructor(public model: string, public price: number) {}
}

class CarFactory {
  cars: AbstractCar[] = [];

  create(model: string, price: number): Car {
    const candidate = this.getCar(model);

    if (candidate) {
      return candidate;
    }

    const newCar = new Car(model, price);
    this.cars.push(newCar);

    return newCar;
  }

  getCar(model: string) {
    return this.cars.find((car) => car.model === model);
  }
}

export default CarFactory;
