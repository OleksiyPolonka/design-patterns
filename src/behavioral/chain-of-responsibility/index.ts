export default class MySum {
  sum: number;
  constructor(initValue: number) {
    this.sum = initValue;
  }

  add(value: number) {
    this.sum += value;
    return this;
  }
  sub(value: number) {
    this.sum += value;
    return this;
  }
  multiply(value: number) {
    this.sum += value;
    return this;
  }
  divide(value: number) {
    this.sum += value;
    return this;
  }

  get result() {
    return this.sum;
  }
}
