// import Person from "./creational/constructor";
// import MemberFactory, { MEMBERSHIPS_IDS } from "./creational/factory";

import { Developer, QAEngineer } from "./behavioral/template";

// import { TrafficLight } from "./behavioral/state";
// import { Bus, Car, Commute, Taxi } from "./behavioral/strategy";

// import { Observer, Subject } from "./behavioral/observer";

// import { ChatRoom, User } from "./behavioral/mediator";

// import CustomIterator from "./behavioral/iterator";

// import MySum from "./behavioral/chain-of-responsibility";
// import ComplaintRegistry from "./structural/facade";
// import CarFactory from "./structural/flyweight";
// import { proxiedFetch } from "./structural/proxy";

// import Server, { aws } from "./structural/decorator";

// import Database from "./creational/singleton";
// import { OldCalc, NewCalc, CalcAdapter } from "./structural/adapter";

// Constructor Pattern start
// const person1 = new Person("Alice", 30);
// person1.greet();
// Constructor Pattern end

// Factory Pattern start
// const factory = new MemberFactory();
// const members = [
//   factory.create("User 1", MEMBERSHIPS_IDS.Simple),
//   factory.create("User 2", MEMBERSHIPS_IDS.Simple),
//   factory.create("User 3", MEMBERSHIPS_IDS.Premium),
//   factory.create("User 4", MEMBERSHIPS_IDS.Standard),
//   factory.create("User 5", MEMBERSHIPS_IDS.Standard),
//   factory.create("User 6", MEMBERSHIPS_IDS.Premium),
// ];

// members.forEach((el) => console.log(el));
// Factory Pattern end

// Singleton Pattern
// const mongo = new Database("MongoDB");
// console.log("%csrc/index.ts:22 mongo", "color: #007acc;", mongo.getData());
// const mysql = new Database("MySQL");
// console.log("%csrc/index.ts:22 mysql", "color: #007acc;", mysql.getData());
// Singleton Pattern end

// Adapter Pattern start
// const oldCalc = new OldCalc();
// console.log(
//   "%csrc/index.ts:34 oldCalc",
//   "color: #007acc;",
//   oldCalc.operation(10, 5, "add")
// );
// const newCalc = new NewCalc();
// console.log("%csrc/index.ts:34 newCalc", "color: #007acc;", newCalc.add(10, 5));
// const adapter = new CalcAdapter();
// console.log(
//   "%csrc/index.ts:42 adapter.operation(10, 5, add)",
//   "color: #007acc;",
//   adapter.operation(10, 5, "add")
// );
// Adapter Pattern end

// Decorator Pattern start
// const s1 = new Server("11.11.11.11", 8080);
// console.log("%csrc/index.ts:54 s1.", "color: #007acc;", s1);
// // expected result { ip: '11.11.11.11', port: 8080 }
// const awsServer = aws(new Server("11.11.11.11", 8080));
// console.log("%csrc/index.ts:56 awsServer", "color: #007acc;", awsServer);
/**
 * expected result
 * {
    ip: '11.11.11.11',
    port: 8080,
    isAws: true,
    awsInfo: [Function (anonymous)]
  }
 * */
// Decorator Pattern end

// Facade Pattern start
// const register = new ComplaintRegistry();
// console.log(
//   "%csrc/index.ts:74 register",
//   "color: #007acc;",
//   register.register("Customer1", "service", "service unavailable")
// );
// console.log(
//   "%csrc/index.ts:74 register",
//   "color: #007acc;",
//   register.register("Customer2", "product", "service unavailable")
// );
// Facade Pattern end

// Flyweight Pattern start
// const factory = new CarFactory();
// const bmwX6 = factory.create("bmw", 10000);
// const audi = factory.create("audi", 13000);
// const bmwX3 = factory.create("bmw", 8000);

// console.log("%csrc/index.ts:90 audi", "color: #007acc;", audi);
// console.log("%csrc/index.ts:92 bmwX6", "color: #007acc;", bmwX6);
// console.log("%csrc/index.ts:92 bmwX3", "color: #007acc;", bmwX3);
// console.log(
//   "%csrc/index.ts:91  bmwX6 === bmwX3",
//   "color: #007acc;",
//   bmwX6 === bmwX3
// );
// Flyweight Pattern end

// Proxy Pattern start
// console.log(
//   "%csrc/index.ts:104 proxiedFetch(angular.io)",
//   "color: #007acc;",
//   proxiedFetch("angular.io")
// );
// console.log(
//   "%csrc/index.ts:104 proxiedFetch(react.io)",
//   "color: #007acc;",
//   proxiedFetch("react.io")
// );
// console.log(
//   "%csrc/index.ts:104 proxiedFetch(angular.io)",
//   "color: #007acc;",
//   proxiedFetch("angular.io")
// );
// Proxy Pattern end

// Chain-of-responsibility Pattern start
// const sum = new MySum(10);

// console.log(
//   "%csrc/index.ts:125 sum",
//   "color: #007acc;",
//   sum.add(10).sub(2).add(10).divide(3).multiply(2).result
// );
// Chain-of-responsibility Pattern end

// Iterator Pattern start
// const iterator = new CustomIterator(["this", "is", "iterator"]);

// for (const val of iterator) {
//   console.log("%csrc/index.ts:138 val", "color: #007acc;", val);
// }
// Iterator Pattern end

// Mediator Pattern start
// const u1 = new User("Oleksii");
// const u2 = new User("Sasha");
// const u3 = new User("Igor");

// const room = new ChatRoom();

// room.register(u1);
// room.register(u2);
// room.register(u3);

// u1.send("hello");
// u2.send("hello", u1);
// u3.send("hello", u1);
// Mediator Pattern end

// Observer Pattern start
// const stream = new Subject();
// const obs1 = new Observer(1);
// const obs2 = new Observer(21);

// stream.subscribe(obs1);
// stream.subscribe(obs2);

// console.log("%csrc/index.ts:170 ======= INITIAL =======", "color: #007acc;");
// console.log("%csrc/index.ts:170 obs1", "color: #007acc;", obs1);
// console.log("%csrc/index.ts:170 obs2", "color: #007acc;", obs2);

// stream.fire({ type: "INCREMENT" });
// console.log("%csrc/index.ts:170 ======= INCREMENT =======", "color: #007acc;");
// console.log("%csrc/index.ts:170 obs1", "color: #007acc;", obs1.state);
// console.log("%csrc/index.ts:170 obs2", "color: #007acc;", obs2.state);

// stream.fire({ type: "DECREMENT" });
// console.log("%csrc/index.ts:170 ======= DECREMENT =======", "color: #007acc;");
// console.log("%csrc/index.ts:170 obs1", "color: #007acc;", obs1.state);
// console.log("%csrc/index.ts:170 obs2", "color: #007acc;", obs2.state);

// stream.fire({ type: "ADD", payload: 9 });
// console.log("%csrc/index.ts:170 ======= ADD =======", "color: #007acc;");
// console.log("%csrc/index.ts:170 obs1", "color: #007acc;", obs1.state);
// console.log("%csrc/index.ts:170 obs2", "color: #007acc;", obs2.state);

// stream.fire({});
// console.log("%csrc/index.ts:170 ======= DEFAULT =======", "color: #007acc;");
// console.log("%csrc/index.ts:170 obs1", "color: #007acc;", obs1.state);
// console.log("%csrc/index.ts:170 obs2", "color: #007acc;", obs2.state);

// Observer Pattern end

// State Pattern start
// const traffic = new TrafficLight();
// console.log("%csrc/index.ts:200 traffic", "color: #007acc;", traffic.sign());
// traffic.change();
// console.log("%csrc/index.ts:203 traffic", "color: #007acc;", traffic.sign());
// traffic.change();
// console.log("%csrc/index.ts:205 traffic", "color: #007acc;", traffic.sign());
// traffic.change();
// console.log("%csrc/index.ts:207 traffic", "color: #007acc;", traffic.sign());
// State Pattern end

// Strategy Pattern start
// const commute = new Commute();
// const bus = new Bus();
// const taxi = new Taxi();
// const car = new Car();

// console.log(
//   "%csrc/index.ts:216 bus commute",
//   "color: #007acc;",
//   commute.travel(bus)
// );
// console.log(
//   "%csrc/index.ts:218 taxi commute",
//   "color: #007acc;",
//   commute.travel(taxi)
// );
// console.log(
//   "%csrc/index.ts:218 car commute",
//   "color: #007acc;",
//   commute.travel(car)
// );
// Strategy Pattern end

// Template Pattern start
const dev = new Developer("Dev name", 100);
console.log("%csrc/index.ts:237 dev.work", "color: #007acc;", dev.work());
console.log(
  "%csrc/index.ts:243 dev.getPaid()",
  "color: #007acc;",
  dev.getPaid()
);

const qaEngineer = new QAEngineer("Tester name", 100);
console.log(
  "%csrc/index.ts:239 qaEngineer.work",
  "color: #007acc;",
  qaEngineer.work()
);
console.log(
  "%csrc/index.ts:240 qaEngineer.getPaid()",
  "color: #007acc;",
  qaEngineer.getPaid()
);
// Template Pattern end
