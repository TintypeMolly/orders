import {ROUND_METHOD, ROUND_PRECISION} from '../config';


class Order {
  constructor(name, price, count, memo) {
    this.name = name;
    this.price = price;
    this.count = count;
    this.memo = memo;
  }

  get total() {
    return this.price * this.count;
  }
}

export default Order;
