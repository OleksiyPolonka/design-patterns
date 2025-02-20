// OLD INTERFACE
export class OldCalc {
  operation(t1: number, t2: number, operation: string): number {
    switch (operation) {
      case "add":
        return t1 + t2;
      case "sub":
        return t1 - t2;
      default:
        return NaN;
    }
  }
}

// NEW INTERFACE
export class NewCalc {
  add(t1: number, t2: number) {
    return t1 + t2;
  }
  sub(t1: number, t2: number) {
    return t1 - t2;
  }
}

export class CalcAdapter {
  calc: NewCalc;
  constructor() {
    this.calc = new NewCalc();
  }

  operation(t1: number, t2: number, operation: string) {
    switch (operation) {
      case "add":
        return t1 + t2;
      case "sub":
        return t1 - t2;
      default:
        return NaN;
    }
  }
}
