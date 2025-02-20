export class User {
  name = "";
  room: null | ChatRoom = null;

  constructor(name: string) {
    this.name = name;
  }

  send(message: string, to?: User) {
    this.room?.send(message, this, to);
  }

  receive(message: string, from: User) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

export class ChatRoom {
  users: Record<string, User> = {};

  register(user: User) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message: string, from: User, to?: User) {
    if (to != null) {
      to.receive(message, from);
    } else {
      Object.keys(this.users).forEach((key) => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      });
    }
  }
}
