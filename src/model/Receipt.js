import {ObjectNotFoundError} from '../error';


class Receipt {
  constructor() {
    this.customers = [];
    this.discount = 0;
  }

  addCustomer(customer) {
    this.customers = this.customers.concat([customer]);
  }

  removeCustomer(customer) {
    if (this.customers.includes(customer)) {
      this.customers = this.customers.filter(c => c !== customer);
    } else {
      throw new ObjectNotFoundError();
    }
  }

  get total() {
    return this.customers.reduce((a, b) => a + b.total, 0) - this.discount;
  }
}

export default Receipt;
