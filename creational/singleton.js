class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }

    Database.exists = true;
    Database.instance = this;

    this.data = data;
  }
  getData() {
    return this.data
  }
}

const mongo = new Database('mongoDB');

console.log('mongo.getData(): ', mongo.getData());
const mySql = new Database('mySql');
console.log('mySql.getData(): ', mySql.getData());
