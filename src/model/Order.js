import {ROUND_METHOD, ROUND_PRECISION} from '../config';

class Order {
    constructor(name, price, count, discount, memo) {
        this.name = name;
        this.price = price;
        this.count = count,
        this.discount = discount;
        this.memo = memo;
    }

    get total() {
        const total = this.price * this.count * (1 - this.discount);
        const factor = Math.pow(10, ROUND_PRECISION);
        return ROUND_METHOD(total * factor) / factor;
    }
}

export default Order;
