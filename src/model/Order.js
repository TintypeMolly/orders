class Order {
  constructor(name, price, count, memo) {
    this.name = name;
    this.price = price;
    this.count = count;
    this.memo = memo;
    this.time = new Date();
  }

  get total() {
    return this.price * this.count;
  }
}

export default Order;
