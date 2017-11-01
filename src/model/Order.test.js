import Order from './Order';

it('construction', () => {
    const order = new Order('마티니', 10000, 1, 0.1, '돌린 버무스, wet하게');
    expect(order.total).toEqual(9000);
    expect(order.name).toEqual('마티니');
    expect(order.memo).toEqual('돌린 버무스, wet하게');
});
