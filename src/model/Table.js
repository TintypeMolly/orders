import { FullTableError, ObjectNotFoundError } from '../error';

class Table {
    constructor(capacity, position) {
        this.capacity = capacity;
        this.position = position;
        this.customers = [];
    }

    addCustomer(customer) {
        if (this.customers.length < this.capacity) {
            this.customers = this.customers.concat([customer]);
        } else {
            throw new FullTableError()
        }
    }

    removeCustomer(customer) {
        if (this.customers.includes(customer)) {
            this.customers = this.customers.filter(c => c !== customer);
        } else {
            throw new ObjectNotFoundError()
        }
    }

    get total() {
        return this.customers.reduce((a, b) => a + b.total, 0);
    }
}

export default Table;
