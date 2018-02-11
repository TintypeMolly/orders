import { ObjectNotFoundError } from '../error'

class Customer {
    constructor(name) {
        this.name = name;
        this.orders = [];
    }

    addOrder(order) {
        this.orders = this.orders.concat([order]);
    }

    removeOrder(order){
        if (this.orders.includes(order)) {
            this.orders = this.orders.filter(o => o !== order)
        } else {
            throw new ObjectNotFoundError()
        }
    }

    get total() {
        return this.orders.reduce((a, b) => a + b.total, 0);
    }
}

export default Customer;
