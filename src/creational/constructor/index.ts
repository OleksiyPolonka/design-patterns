class Person {
  age: number;
  name: string;

  constructor(name: string, age: number) {
    // Initialize object properties
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

export default Person;
