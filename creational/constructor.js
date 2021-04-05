// function Server (name, ip) {
//   this.ip = ip;
//   this.name = name;
// }

// Server.prototype.getUrl = function () {
//   return `https://${this.ip}:80`;
// };

class Server {
  constructor(name, ip) {
    this.ip = ip;
    this.name = name;
  }
  getUrl = () => {
    return `https://${this.ip}:80`;
  };
}

const aws = new Server('name', '82.21.21.32');

console.log(aws.getUrl());


