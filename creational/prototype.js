
const car = {
  wheels: 4,
  init() {
    console.log('this.owner: ', this.owner);

    console.log(`Some text go ${this.wheels} here ${this.owner}`)
  }
}

const carWithOwner = Object.create(car, {
  owner: {
    value: "new owner"
  }
});

carWithOwner.init()
