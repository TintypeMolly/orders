import Customer from './Customer';
import Order from './Order';
import {ObjectNotFoundError} from '../error';


it('construction', () => {
  const customer = new Customer('Jim');
  // 위스키 칵테일 10% 할인행사
  customer.addOrder(new Order('마티니', 10000, 1, 0, '돌린 버무스, wet하게'));
  customer.addOrder(new Order('갓파더', 10000, 1, 0.1, '올드 파'));
  customer.addOrder(new Order('옥토모어', 35000, 1, 0, '이걸 왜 먹지'));
  customer.addOrder(new Order('올드 패션드', 15000, 1, 0.1, '오렌지 떫은 맛 살려서'));
  customer.addOrder(new Order('롭 로이', 15000, 1, 0.1, ''));
  customer.addOrder(new Order('네그로니', 15000, 1, 0, ''));
  customer.addOrder(new Order('파우스트', 15000, 1, 0, '이 손님 집에 보내야겠다'));
  expect(customer.total).toEqual(111000);
});

it('remove', () => {
  const customer = new Customer('홍길동');
  const badOrder = new Order('Martini', 10000, 1, 0, 'shake');
  const goodOrder = new Order('Martini', 10000, 1, 0, 'stir');
  customer.addOrder(badOrder);
  customer.removeOrder(badOrder);
  expect(customer.orders.length).toEqual(0);
  try {
    customer.removeOrder(goodOrder);
    expect(False).toBeTruthy();
  } catch (e) {
    expect(e instanceof ObjectNotFoundError).toBeTruthy();
  }
});
