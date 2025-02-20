abstract class AbstractServer {
  abstract ip: string;
  abstract port: number;

  abstract get url(): string;
}

class Server implements AbstractServer {
  constructor(public ip: string, public port: number) {}

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

interface AWSServerFeatures {
  isAws: boolean;
  awsInfo: () => string;
}

export function aws<T extends AbstractServer>(
  server: T
): T & AWSServerFeatures {
  const decoratedServer = server as T & AWSServerFeatures;
  decoratedServer.isAws = true;
  decoratedServer.awsInfo = function () {
    return server.url;
  };

  return decoratedServer;
}

export default Server;
