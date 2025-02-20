/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/behavioral/template/index.ts":
/*!******************************************!*\
  !*** ./src/behavioral/template/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QAEngineer = exports.Developer = void 0;
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        return `${this.name} - ${this.responsibilities()}`;
    }
    getPaid() {
        return `${this.name}'s salaries ${this.salary}`;
    }
}
class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    responsibilities() {
        return `Writes code`;
    }
}
exports.Developer = Developer;
class QAEngineer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    responsibilities() {
        return `Tests code`;
    }
}
exports.QAEngineer = QAEngineer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

// import Person from "./creational/constructor";
// import MemberFactory, { MEMBERSHIPS_IDS } from "./creational/factory";
Object.defineProperty(exports, "__esModule", ({ value: true }));
const template_1 = __webpack_require__(/*! ./behavioral/template */ "./src/behavioral/template/index.ts");
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
const dev = new template_1.Developer("Dev name", 100);
console.log("%csrc/index.ts:237 dev.work", "color: #007acc;", dev.work());
console.log("%csrc/index.ts:243 dev.getPaid()", "color: #007acc;", dev.getPaid());
const qaEngineer = new template_1.QAEngineer("Tester name", 100);
console.log("%csrc/index.ts:239 qaEngineer.work", "color: #007acc;", qaEngineer.work());
console.log("%csrc/index.ts:240 qaEngineer.getPaid()", "color: #007acc;", qaEngineer.getPaid());
// Template Pattern end

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixVQUFVLENBQUMsT0FBTyxFQUFFLENBQ3JCLENBQUM7QUFDRix1QkFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1ub2RlLWhvdC8uL3NyYy9iZWhhdmlvcmFsL3RlbXBsYXRlL2luZGV4LnRzIiwid2VicGFjazovL3RzLW5vZGUtaG90L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLW5vZGUtaG90Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImFic3RyYWN0IGNsYXNzIEVtcGxveWVlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzYWxhcnk6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNhbGFyeTogbnVtYmVyKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNhbGFyeSA9IHNhbGFyeTtcbiAgfVxuXG4gIGFic3RyYWN0IHJlc3BvbnNpYmlsaXRpZXMoKTogc3RyaW5nO1xuXG4gIHdvcmsoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMubmFtZX0gLSAke3RoaXMucmVzcG9uc2liaWxpdGllcygpfWA7XG4gIH1cblxuICBnZXRQYWlkKCkge1xuICAgIHJldHVybiBgJHt0aGlzLm5hbWV9J3Mgc2FsYXJpZXMgJHt0aGlzLnNhbGFyeX1gO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXZlbG9wZXIgZXh0ZW5kcyBFbXBsb3llZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgc2FsYXJ5OiBudW1iZXIpIHtcbiAgICBzdXBlcihuYW1lLCBzYWxhcnkpO1xuICB9XG5cbiAgcmVzcG9uc2liaWxpdGllcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgV3JpdGVzIGNvZGVgO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRQUVuZ2luZWVyIGV4dGVuZHMgRW1wbG95ZWUge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNhbGFyeTogbnVtYmVyKSB7XG4gICAgc3VwZXIobmFtZSwgc2FsYXJ5KTtcbiAgfVxuXG4gIHJlc3BvbnNpYmlsaXRpZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFRlc3RzIGNvZGVgO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi9jcmVhdGlvbmFsL2NvbnN0cnVjdG9yXCI7XG4vLyBpbXBvcnQgTWVtYmVyRmFjdG9yeSwgeyBNRU1CRVJTSElQU19JRFMgfSBmcm9tIFwiLi9jcmVhdGlvbmFsL2ZhY3RvcnlcIjtcblxuaW1wb3J0IHsgRGV2ZWxvcGVyLCBRQUVuZ2luZWVyIH0gZnJvbSBcIi4vYmVoYXZpb3JhbC90ZW1wbGF0ZVwiO1xuXG4vLyBpbXBvcnQgeyBUcmFmZmljTGlnaHQgfSBmcm9tIFwiLi9iZWhhdmlvcmFsL3N0YXRlXCI7XG4vLyBpbXBvcnQgeyBCdXMsIENhciwgQ29tbXV0ZSwgVGF4aSB9IGZyb20gXCIuL2JlaGF2aW9yYWwvc3RyYXRlZ3lcIjtcblxuLy8gaW1wb3J0IHsgT2JzZXJ2ZXIsIFN1YmplY3QgfSBmcm9tIFwiLi9iZWhhdmlvcmFsL29ic2VydmVyXCI7XG5cbi8vIGltcG9ydCB7IENoYXRSb29tLCBVc2VyIH0gZnJvbSBcIi4vYmVoYXZpb3JhbC9tZWRpYXRvclwiO1xuXG4vLyBpbXBvcnQgQ3VzdG9tSXRlcmF0b3IgZnJvbSBcIi4vYmVoYXZpb3JhbC9pdGVyYXRvclwiO1xuXG4vLyBpbXBvcnQgTXlTdW0gZnJvbSBcIi4vYmVoYXZpb3JhbC9jaGFpbi1vZi1yZXNwb25zaWJpbGl0eVwiO1xuLy8gaW1wb3J0IENvbXBsYWludFJlZ2lzdHJ5IGZyb20gXCIuL3N0cnVjdHVyYWwvZmFjYWRlXCI7XG4vLyBpbXBvcnQgQ2FyRmFjdG9yeSBmcm9tIFwiLi9zdHJ1Y3R1cmFsL2ZseXdlaWdodFwiO1xuLy8gaW1wb3J0IHsgcHJveGllZEZldGNoIH0gZnJvbSBcIi4vc3RydWN0dXJhbC9wcm94eVwiO1xuXG4vLyBpbXBvcnQgU2VydmVyLCB7IGF3cyB9IGZyb20gXCIuL3N0cnVjdHVyYWwvZGVjb3JhdG9yXCI7XG5cbi8vIGltcG9ydCBEYXRhYmFzZSBmcm9tIFwiLi9jcmVhdGlvbmFsL3NpbmdsZXRvblwiO1xuLy8gaW1wb3J0IHsgT2xkQ2FsYywgTmV3Q2FsYywgQ2FsY0FkYXB0ZXIgfSBmcm9tIFwiLi9zdHJ1Y3R1cmFsL2FkYXB0ZXJcIjtcblxuLy8gQ29uc3RydWN0b3IgUGF0dGVybiBzdGFydFxuLy8gY29uc3QgcGVyc29uMSA9IG5ldyBQZXJzb24oXCJBbGljZVwiLCAzMCk7XG4vLyBwZXJzb24xLmdyZWV0KCk7XG4vLyBDb25zdHJ1Y3RvciBQYXR0ZXJuIGVuZFxuXG4vLyBGYWN0b3J5IFBhdHRlcm4gc3RhcnRcbi8vIGNvbnN0IGZhY3RvcnkgPSBuZXcgTWVtYmVyRmFjdG9yeSgpO1xuLy8gY29uc3QgbWVtYmVycyA9IFtcbi8vICAgZmFjdG9yeS5jcmVhdGUoXCJVc2VyIDFcIiwgTUVNQkVSU0hJUFNfSURTLlNpbXBsZSksXG4vLyAgIGZhY3RvcnkuY3JlYXRlKFwiVXNlciAyXCIsIE1FTUJFUlNISVBTX0lEUy5TaW1wbGUpLFxuLy8gICBmYWN0b3J5LmNyZWF0ZShcIlVzZXIgM1wiLCBNRU1CRVJTSElQU19JRFMuUHJlbWl1bSksXG4vLyAgIGZhY3RvcnkuY3JlYXRlKFwiVXNlciA0XCIsIE1FTUJFUlNISVBTX0lEUy5TdGFuZGFyZCksXG4vLyAgIGZhY3RvcnkuY3JlYXRlKFwiVXNlciA1XCIsIE1FTUJFUlNISVBTX0lEUy5TdGFuZGFyZCksXG4vLyAgIGZhY3RvcnkuY3JlYXRlKFwiVXNlciA2XCIsIE1FTUJFUlNISVBTX0lEUy5QcmVtaXVtKSxcbi8vIF07XG5cbi8vIG1lbWJlcnMuZm9yRWFjaCgoZWwpID0+IGNvbnNvbGUubG9nKGVsKSk7XG4vLyBGYWN0b3J5IFBhdHRlcm4gZW5kXG5cbi8vIFNpbmdsZXRvbiBQYXR0ZXJuXG4vLyBjb25zdCBtb25nbyA9IG5ldyBEYXRhYmFzZShcIk1vbmdvREJcIik7XG4vLyBjb25zb2xlLmxvZyhcIiVjc3JjL2luZGV4LnRzOjIyIG1vbmdvXCIsIFwiY29sb3I6ICMwMDdhY2M7XCIsIG1vbmdvLmdldERhdGEoKSk7XG4vLyBjb25zdCBteXNxbCA9IG5ldyBEYXRhYmFzZShcIk15U1FMXCIpO1xuLy8gY29uc29sZS5sb2coXCIlY3NyYy9pbmRleC50czoyMiBteXNxbFwiLCBcImNvbG9yOiAjMDA3YWNjO1wiLCBteXNxbC5nZXREYXRhKCkpO1xuLy8gU2luZ2xldG9uIFBhdHRlcm4gZW5kXG5cbi8vIEFkYXB0ZXIgUGF0dGVybiBzdGFydFxuLy8gY29uc3Qgb2xkQ2FsYyA9IG5ldyBPbGRDYWxjKCk7XG4vLyBjb25zb2xlLmxvZyhcbi8vICAgXCIlY3NyYy9pbmRleC50czozNCBvbGRDYWxjXCIsXG4vLyAgIFwiY29sb3I6ICMwMDdhY2M7XCIsXG4vLyAgIG9sZENhbGMub3BlcmF0aW9uKDEwLCA1LCBcImFkZFwiKVxuLy8gKTtcbi8vIGNvbnN0IG5ld0NhbGMgPSBuZXcgTmV3Q2FsYygpO1xuLy8gY29uc29sZS5sb2coXCIlY3NyYy9pbmRleC50czozNCBuZXdDYWxjXCIsIFwiY29sb3I6ICMwMDdhY2M7XCIsIG5ld0NhbGMuYWRkKDEwLCA1KSk7XG4vLyBjb25zdCBhZGFwdGVyID0gbmV3IENhbGNBZGFwdGVyKCk7XG4vLyBjb25zb2xlLmxvZyhcbi8vICAgXCIlY3NyYy9pbmRleC50czo0MiBhZGFwdGVyLm9wZXJhdGlvbigxMCwgNSwgYWRkKVwiLFxuLy8gICBcImNvbG9yOiAjMDA3YWNjO1wiLFxuLy8gICBhZGFwdGVyLm9wZXJhdGlvbigxMCwgNSwgXCJhZGRcIilcbi8vICk7XG4vLyBBZGFwdGVyIFBhdHRlcm4gZW5kXG5cbi8vIERlY29yYXRvciBQYXR0ZXJuIHN0YXJ0XG4vLyBjb25zdCBzMSA9IG5ldyBTZXJ2ZXIoXCIxMS4xMS4xMS4xMVwiLCA4MDgwKTtcbi8vIGNvbnNvbGUubG9nKFwiJWNzcmMvaW5kZXgudHM6NTQgczEuXCIsIFwiY29sb3I6ICMwMDdhY2M7XCIsIHMxKTtcbi8vIC8vIGV4cGVjdGVkIHJlc3VsdCB7IGlwOiAnMTEuMTEuMTEuMTEnLCBwb3J0OiA4MDgwIH1cbi8vIGNvbnN0IGF3c1NlcnZlciA9IGF3cyhuZXcgU2VydmVyKFwiMTEuMTEuMTEuMTFcIiwgODA4MCkpO1xuLy8gY29uc29sZS5sb2coXCIlY3NyYy9pbmRleC50czo1NiBhd3NTZXJ2ZXJcIiwgXCJjb2xvcjogIzAwN2FjYztcIiwgYXdzU2VydmVyKTtcbi8qKlxuICogZXhwZWN0ZWQgcmVzdWx0XG4gKiB7XG4gICAgaXA6ICcxMS4xMS4xMS4xMScsXG4gICAgcG9ydDogODA4MCxcbiAgICBpc0F3czogdHJ1ZSxcbiAgICBhd3NJbmZvOiBbRnVuY3Rpb24gKGFub255bW91cyldXG4gIH1cbiAqICovXG4vLyBEZWNvcmF0b3IgUGF0dGVybiBlbmRcblxuLy8gRmFjYWRlIFBhdHRlcm4gc3RhcnRcbi8vIGNvbnN0IHJlZ2lzdGVyID0gbmV3IENvbXBsYWludFJlZ2lzdHJ5KCk7XG4vLyBjb25zb2xlLmxvZyhcbi8vICAgXCIlY3NyYy9pbmRleC50czo3NCByZWdpc3RlclwiLFxuLy8gICBcImNvbG9yOiAjMDA3YWNjO1wiLFxuLy8gICByZWdpc3Rlci5yZWdpc3RlcihcIkN1c3RvbWVyMVwiLCBcInNlcnZpY2VcIiwgXCJzZXJ2aWNlIHVuYXZhaWxhYmxlXCIpXG4vLyApO1xuLy8gY29uc29sZS5sb2coXG4vLyAgIFwiJWNzcmMvaW5kZXgudHM6NzQgcmVnaXN0ZXJcIixcbi8vICAgXCJjb2xvcjogIzAwN2FjYztcIixcbi8vICAgcmVnaXN0ZXIucmVnaXN0ZXIoXCJDdXN0b21lcjJcIiwgXCJwcm9kdWN0XCIsIFwic2VydmljZSB1bmF2YWlsYWJsZVwiKVxuLy8gKTtcbi8vIEZhY2FkZSBQYXR0ZXJuIGVuZFxuXG4vLyBGbHl3ZWlnaHQgUGF0dGVybiBzdGFydFxuLy8gY29uc3QgZmFjdG9yeSA9IG5ldyBDYXJGYWN0b3J5KCk7XG4vLyBjb25zdCBibXdYNiA9IGZhY3RvcnkuY3JlYXRlKFwiYm13XCIsIDEwMDAwKTtcbi8vIGNvbnN0IGF1ZGkgPSBmYWN0b3J5LmNyZWF0ZShcImF1ZGlcIiwgMTMwMDApO1xuLy8gY29uc3QgYm13WDMgPSBmYWN0b3J5LmNyZWF0ZShcImJtd1wiLCA4MDAwKTtcblxuLy8gY29uc29sZS5sb2coXCIlY3NyYy9pbmRleC50czo5MCBhdWRpXCIsIFwiY29sb3I6ICMwMDdhY2M7XCIsIGF1ZGkpO1xuLy8gY29uc29sZS5sb2coXCIlY3NyYy9pbmRleC50czo5MiBibXdYNlwiLCBcImNvbG9yOiAjMDA3YWNjO1wiLCBibXdYNik7XG4vLyBjb25zb2xlLmxvZyhcIiVjc3JjL2luZGV4LnRzOjkyIGJtd1gzXCIsIFwiY29sb3I6ICMwMDdhY2M7XCIsIGJtd1gzKTtcbi8vIGNvbnNvbGUubG9nKFxuLy8gICBcIiVjc3JjL2luZGV4LnRzOjkxICBibXdYNiA9PT0gYm13WDNcIixcbi8vICAgXCJjb2xvcjogIzAwN2FjYztcIixcbi8vICAgYm13WDYgPT09IGJtd1gzXG4vLyApO1xuLy8gRmx5d2VpZ2h0IFBhdHRlcm4gZW5kXG5cbi8vIFByb3h5IFBhdHRlcm4gc3RhcnRcbi8vIGNvbnNvbGUubG9nKFxuLy8gICBcIiVjc3JjL2luZGV4LnRzOjEwNCBwcm94aWVkRmV0Y2goYW5ndWxhci5pbylcIixcbi8vICAgXCJjb2xvcjogIzAwN2FjYztcIixcbi8vICAgcHJveGllZEZldGNoKFwiYW5ndWxhci5pb1wiKVxuLy8gKTtcbi8vIGNvbnNvbGUubG9nKFxuLy8gICBcIiVjc3JjL2luZGV4LnRzOjEwNCBwcm94aWVkRmV0Y2gocmVhY3QuaW8pXCIsXG4vLyAgIFwiY29sb3I6ICMwMDdhY2M7XCIsXG4vLyAgIHByb3hpZWRGZXRjaChcInJlYWN0LmlvXCIpXG4vLyApO1xuLy8gY29uc29sZS5sb2coXG4vLyAgIFwiJWNzcmMvaW5kZXgudHM6MTA0IHByb3hpZWRGZXRjaChhbmd1bGFyLmlvKVwiLFxuLy8gICBcImNvbG9yOiAjMDA3YWNjO1wiLFxuLy8gICBwcm94aWVkRmV0Y2goXCJhbmd1bGFyLmlvXCIpXG4vLyApO1xuLy8gUHJveHkgUGF0dGVybiBlbmRcblxuLy8gQ2hhaW4tb2YtcmVzcG9uc2liaWxpdHkgUGF0dGVybiBzdGFydFxuLy8gY29uc3Qgc3VtID0gbmV3IE15U3VtKDEwKTtcblxuLy8gY29uc29sZS5sb2coXG4vLyAgIFwiJWNzcmMvaW5kZXgudHM6MTI1IHN1bVwiLFxuLy8gICBcImNvbG9yOiAjMDA3YWNjO1wiLFxuLy8gICBzdW0uYWRkKDEwKS5zdWIoMikuYWRkKDEwKS5kaXZpZGUoMykubXVsdGlwbHkoMikucmVzdWx0XG4vLyApO1xuLy8gQ2hhaW4tb2YtcmVzcG9uc2liaWxpdHkgUGF0dGVybiBlbmRcblxuLy8gSXRlcmF0b3IgUGF0dGVybiBzdGFydFxuLy8gY29uc3QgaXRlcmF0b3IgPSBuZXcgQ3VzdG9tSXRlcmF0b3IoW1widGhpc1wiLCBcImlzXCIsIFwiaXRlcmF0b3JcIl0pO1xuXG4vLyBmb3IgKGNvbnN0IHZhbCBvZiBpdGVyYXRvcikge1xuLy8gICBjb25zb2xlLmxvZyhcIiVjc3JjL2luZGV4LnRzOjEzOCB2YWxcIiwgXCJjb2xvcjogIzAwN2FjYztcIiwgdmFsKTtcbi8vIH1cbi8vIEl0ZXJhdG9yIFBhdHRlcm4gZW5kXG5cbi8vIE1lZGlhdG9yIFBhdHRlcm4gc3RhcnRcbi8vIGNvbnN0IHUxID0gbmV3IFVzZXIoXCJPbGVrc2lpXCIpO1xuLy8gY29uc3QgdTIgPSBuZXcgVXNlcihcIlNhc2hhXCIpO1xuLy8gY29uc3QgdTMgPSBuZXcgVXNlcihcIklnb3JcIik7XG5cbi8vIGNvbnN0IHJvb20gPSBuZXcgQ2hhdFJvb20oKTtcblxuLy8gcm9vbS5yZWdpc3Rlcih1MSk7XG4vLyByb29tLnJlZ2lzdGVyKHUyKTtcbi8vIHJvb20ucmVnaXN0ZXIodTMpO1xuXG4vLyB1MS5zZW5kKFwiaGVsbG9cIik7XG4vLyB1Mi5zZW5kKFwiaGVsbG9cIiwgdTEpO1xuLy8gdTMuc2VuZChcImhlbGxvXCIsIHUxKTtcbi8vIE1lZGlhdG9yIFBhdHRlcm4gZW5kXG5cbi8vIE9ic2VydmVyIFBhdHRlcm4gc3RhcnRcbi8vIGNvbnN0IHN0cmVhbSA9IG5ldyBTdWJqZWN0KCk7XG4vLyBjb25zdCBvYnMxID0gbmV3IE9ic2VydmVyKDEpO1xuLy8gY29uc3Qgb2JzMiA9IG5ldyBPYnNlcnZlcigyMSk7XG5cbi8vIHN0cmVhbS5zdWJzY3JpYmUob2JzMSk7XG4vLyBzdHJlYW0uc3Vic2NyaWJlKG9iczIpO1xuXG4vLyBjb25zb2xlLmxvZyhcIiVjc3JjL2luZGV4LnRzOjE3MCA9PT09PT09IElOSVRJQUwgPT09PT09PVwiLCBcImNvbG9yOiAjMDA3YWNjO1wiKTtcbi8vIGNvbnNvbGUubG9nKFwiJWNzcmMvaW5kZXgudHM6MTcwIG9iczFcIiwgXCJjb2xvcjogIzAwN2FjYztcIiwgb2JzMSk7XG4vLyBjb25zb2xlLmxvZyhcIiVjc3JjL2luZGV4LnRzOjE3MCBvYnMyXCIsIFwiY29sb3I6ICMwMDdhY2M7XCIsIG9iczIpO1xuXG4vLyBzdHJlYW0uZmlyZSh7IHR5cGU6IFwiSU5DUkVNRU5UXCIgfSk7XG4vLyBjb25zb2xlLmxvZyhcIiVjc3JjL2luZGV4LnRzOjE3MCA9PT09PT09IElOQ1JFTUVOVCA9PT09PT09XCIsIFwiY29sb3I6ICMwMDdhY2M7XCIpO1xuLy8gY29uc29sZS5sb2coXCIlY3NyYy9pbmRleC50czoxNzAgb2JzMVwiLCBcImNvbG9yOiAjMDA3YWNjO1wiLCBvYnMxLnN0YXRlKTtcbi8vIGNvbnNvbGUubG9nKFwiJWNzcmMvaW5kZXgudHM6MTcwIG9iczJcIiwgXCJjb2xvcjogIzAwN2FjYztcIiwgb2JzMi5zdGF0ZSk7XG5cbi8vIHN0cmVhbS5maXJlKHsgdHlwZTogXCJERUNSRU1FTlRcIiB9KTtcbi8vIGNvbnNvbGUubG9nKFwiJWNzcmMvaW5kZXgudHM6MTcwID09PT09PT0gREVDUkVNRU5UID09PT09PT1cIiwgXCJjb2xvcjogIzAwN2FjYztcIik7XG4vLyBjb25zb2xlLmxvZyhcIiVjc3JjL2luZGV4LnRzOjE3MCBvYnMxXCIsIFwiY29sb3I6ICMwMDdhY2M7XCIsIG9iczEuc3RhdGUpO1xuLy8gY29uc29sZS5sb2coXCIlY3NyYy9pbmRleC50czoxNzAgb2JzMlwiLCBcImNvbG9yOiAjMDA3YWNjO1wiLCBvYnMyLnN0YXRlKTtcblxuLy8gc3RyZWFtLmZpcmUoeyB0eXBlOiBcIkFERFwiLCBwYXlsb2FkOiA5IH0pO1xuLy8gY29uc29sZS5sb2coXCIlY3NyYy9pbmRleC50czoxNzAgPT09PT09PSBBREQgPT09PT09PVwiLCBcImNvbG9yOiAjMDA3YWNjO1wiKTtcbi8vIGNvbnNvbGUubG9nKFwiJWNzcmMvaW5kZXgudHM6MTcwIG9iczFcIiwgXCJjb2xvcjogIzAwN2FjYztcIiwgb2JzMS5zdGF0ZSk7XG4vLyBjb25zb2xlLmxvZyhcIiVjc3JjL2luZGV4LnRzOjE3MCBvYnMyXCIsIFwiY29sb3I6ICMwMDdhY2M7XCIsIG9iczIuc3RhdGUpO1xuXG4vLyBzdHJlYW0uZmlyZSh7fSk7XG4vLyBjb25zb2xlLmxvZyhcIiVjc3JjL2luZGV4LnRzOjE3MCA9PT09PT09IERFRkFVTFQgPT09PT09PVwiLCBcImNvbG9yOiAjMDA3YWNjO1wiKTtcbi8vIGNvbnNvbGUubG9nKFwiJWNzcmMvaW5kZXgudHM6MTcwIG9iczFcIiwgXCJjb2xvcjogIzAwN2FjYztcIiwgb2JzMS5zdGF0ZSk7XG4vLyBjb25zb2xlLmxvZyhcIiVjc3JjL2luZGV4LnRzOjE3MCBvYnMyXCIsIFwiY29sb3I6ICMwMDdhY2M7XCIsIG9iczIuc3RhdGUpO1xuXG4vLyBPYnNlcnZlciBQYXR0ZXJuIGVuZFxuXG4vLyBTdGF0ZSBQYXR0ZXJuIHN0YXJ0XG4vLyBjb25zdCB0cmFmZmljID0gbmV3IFRyYWZmaWNMaWdodCgpO1xuLy8gY29uc29sZS5sb2coXCIlY3NyYy9pbmRleC50czoyMDAgdHJhZmZpY1wiLCBcImNvbG9yOiAjMDA3YWNjO1wiLCB0cmFmZmljLnNpZ24oKSk7XG4vLyB0cmFmZmljLmNoYW5nZSgpO1xuLy8gY29uc29sZS5sb2coXCIlY3NyYy9pbmRleC50czoyMDMgdHJhZmZpY1wiLCBcImNvbG9yOiAjMDA3YWNjO1wiLCB0cmFmZmljLnNpZ24oKSk7XG4vLyB0cmFmZmljLmNoYW5nZSgpO1xuLy8gY29uc29sZS5sb2coXCIlY3NyYy9pbmRleC50czoyMDUgdHJhZmZpY1wiLCBcImNvbG9yOiAjMDA3YWNjO1wiLCB0cmFmZmljLnNpZ24oKSk7XG4vLyB0cmFmZmljLmNoYW5nZSgpO1xuLy8gY29uc29sZS5sb2coXCIlY3NyYy9pbmRleC50czoyMDcgdHJhZmZpY1wiLCBcImNvbG9yOiAjMDA3YWNjO1wiLCB0cmFmZmljLnNpZ24oKSk7XG4vLyBTdGF0ZSBQYXR0ZXJuIGVuZFxuXG4vLyBTdHJhdGVneSBQYXR0ZXJuIHN0YXJ0XG4vLyBjb25zdCBjb21tdXRlID0gbmV3IENvbW11dGUoKTtcbi8vIGNvbnN0IGJ1cyA9IG5ldyBCdXMoKTtcbi8vIGNvbnN0IHRheGkgPSBuZXcgVGF4aSgpO1xuLy8gY29uc3QgY2FyID0gbmV3IENhcigpO1xuXG4vLyBjb25zb2xlLmxvZyhcbi8vICAgXCIlY3NyYy9pbmRleC50czoyMTYgYnVzIGNvbW11dGVcIixcbi8vICAgXCJjb2xvcjogIzAwN2FjYztcIixcbi8vICAgY29tbXV0ZS50cmF2ZWwoYnVzKVxuLy8gKTtcbi8vIGNvbnNvbGUubG9nKFxuLy8gICBcIiVjc3JjL2luZGV4LnRzOjIxOCB0YXhpIGNvbW11dGVcIixcbi8vICAgXCJjb2xvcjogIzAwN2FjYztcIixcbi8vICAgY29tbXV0ZS50cmF2ZWwodGF4aSlcbi8vICk7XG4vLyBjb25zb2xlLmxvZyhcbi8vICAgXCIlY3NyYy9pbmRleC50czoyMTggY2FyIGNvbW11dGVcIixcbi8vICAgXCJjb2xvcjogIzAwN2FjYztcIixcbi8vICAgY29tbXV0ZS50cmF2ZWwoY2FyKVxuLy8gKTtcbi8vIFN0cmF0ZWd5IFBhdHRlcm4gZW5kXG5cbi8vIFRlbXBsYXRlIFBhdHRlcm4gc3RhcnRcbmNvbnN0IGRldiA9IG5ldyBEZXZlbG9wZXIoXCJEZXYgbmFtZVwiLCAxMDApO1xuY29uc29sZS5sb2coXCIlY3NyYy9pbmRleC50czoyMzcgZGV2LndvcmtcIiwgXCJjb2xvcjogIzAwN2FjYztcIiwgZGV2LndvcmsoKSk7XG5jb25zb2xlLmxvZyhcbiAgXCIlY3NyYy9pbmRleC50czoyNDMgZGV2LmdldFBhaWQoKVwiLFxuICBcImNvbG9yOiAjMDA3YWNjO1wiLFxuICBkZXYuZ2V0UGFpZCgpXG4pO1xuXG5jb25zdCBxYUVuZ2luZWVyID0gbmV3IFFBRW5naW5lZXIoXCJUZXN0ZXIgbmFtZVwiLCAxMDApO1xuY29uc29sZS5sb2coXG4gIFwiJWNzcmMvaW5kZXgudHM6MjM5IHFhRW5naW5lZXIud29ya1wiLFxuICBcImNvbG9yOiAjMDA3YWNjO1wiLFxuICBxYUVuZ2luZWVyLndvcmsoKVxuKTtcbmNvbnNvbGUubG9nKFxuICBcIiVjc3JjL2luZGV4LnRzOjI0MCBxYUVuZ2luZWVyLmdldFBhaWQoKVwiLFxuICBcImNvbG9yOiAjMDA3YWNjO1wiLFxuICBxYUVuZ2luZWVyLmdldFBhaWQoKVxuKTtcbi8vIFRlbXBsYXRlIFBhdHRlcm4gZW5kXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=