interface ComplaintProps {
  id: number;
  details: string;
  customer: string;
}
abstract class AbstractComplaints {
  complains: ComplaintProps[] = [];

  abstract reply(complaint: any): string;
  add(complaint: ComplaintProps) {
    this.complains.push(complaint);
    return this.reply(complaint);
  }
}

class ProductComplaints extends AbstractComplaints {
  constructor() {
    super();
  }

  reply({ id, details, customer }: ComplaintProps): string {
    return `Product ${id} ${details} ${customer}`;
  }
}

class ServiceComplaints extends AbstractComplaints {
  constructor() {
    super();
  }

  reply({ id, details, customer }: ComplaintProps): string {
    return `Service ${id} ${details} ${customer}`;
  }
}

export default class ComplaintRegistry {
  register(customer: string, type: string, details: string) {
    const id = Date.now();
    let complaint;

    if (type === "service") {
      complaint = new ServiceComplaints();
    } else {
      complaint = new ProductComplaints();
    }

    return complaint.add({
      id,
      details,
      customer,
    });
  }
}
