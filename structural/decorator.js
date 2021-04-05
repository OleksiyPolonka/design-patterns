class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}}`;
  }
}

function aws(server) {
  server.isAws = true;
  server.awsInfo = function() {
    return server.url;
  };
  return server;
}

const s1 = aws(new Server('12.34.42.12', 8080));
console.log('s1: ', s1.awsInfo());
