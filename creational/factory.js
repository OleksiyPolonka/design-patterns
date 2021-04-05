class SimpleMembership {
  constructor (name) {
    this.cost = 50;
    this.name = name;
  }
}

class StandardMembership {
  constructor (name) {
    this.cost = 150;
    this.name = name;
  }
}

class PremiumMembership {
  constructor (name) {
    this.cost = 500;
    this.name = name;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    premium: PremiumMembership,
    standard: StandardMembership
  }

  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;

    return new Membership(name);
  }
}

const factory = new MemberFactory()

console.log('factory.create(): ', factory.create('test', 'premium'));
