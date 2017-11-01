class Customer {
    constructor(name) {
        this.name = name;
        this.orders = [];
    }

    addOrder(order) {
        this.orders.push(order);
    }

    get total() {
        return this.orders.reduce((a, b) => a + b.total, 0);
    }
}

export default Customer;
