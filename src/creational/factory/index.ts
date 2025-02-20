export enum MEMBERSHIPS_IDS {
  Simple,
  Standard,
  Premium,
}
class SimpleMembership {
  name: string;
  cost: number;

  constructor(name: string) {
    this.name = name;
    this.cost = 50;
  }
}

class StandardMembership {
  name: string;
  cost: number;

  constructor(name: string) {
    this.name = name;
    this.cost = 150;
  }
}

class PremiumMembership {
  name: string;
  cost: number;

  constructor(name: string) {
    this.name = name;
    this.cost = 500;
  }
}

class MemberFactory {
  static list = {
    [MEMBERSHIPS_IDS.Simple]: SimpleMembership,
    [MEMBERSHIPS_IDS.Standard]: StandardMembership,
    [MEMBERSHIPS_IDS.Premium]: PremiumMembership,
  };

  create(name: string, type = MEMBERSHIPS_IDS.Simple) {
    const Membership =
      MemberFactory.list[type] || MemberFactory.list[MEMBERSHIPS_IDS.Simple];

    const member = new Membership(name);

    return member;
  }
}

export default MemberFactory;
