abstract class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  abstract responsibilities(): string;

  work() {
    return `${this.name} - ${this.responsibilities()}`;
  }

  getPaid() {
    return `${this.name}'s salaries ${this.salary}`;
  }
}

export class Developer extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary);
  }

  responsibilities(): string {
    return `Writes code`;
  }
}

export class QAEngineer extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary);
  }

  responsibilities(): string {
    return `Tests code`;
  }
}
