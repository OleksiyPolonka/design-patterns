export class Subject {
  observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs == observer);
  }

  fire(action: any) {
    this.observers.forEach((observer) => {
      observer.update(action);
    });
  }
}

export class Observer {
  state: number;
  initialState: number;

  constructor(state: number) {
    this.state = state;
    this.initialState = state;
  }

  update(action: any) {
    switch (action.type) {
      case "INCREMENT":
        this.state = this.state + 1;
        break;
      case "DECREMENT":
        this.state = this.state - 1;
        break;

      case "ADD":
        this.state = this.state + action.payload;
        break;

      default:
        this.state = this.initialState;
    }
  }
}
