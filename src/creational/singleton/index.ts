class Database {
  data: any;
  static instance: Database | null = null;

  constructor(data: any) {
    if (Database.instance != null) {
      return Database.instance;
    }

    Database.instance = this;

    this.data = data;
  }

  getData() {
    return this.data;
  }
}

export default Database;
