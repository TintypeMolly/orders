import Receipt from './Receipt';
import Customer from './Customer';
import Order from './Order';
import {ObjectNotFoundError} from '../error';


it('stuffs', () => {
  const receipt = new Receipt();
  const yui = new Customer('Yui');
  yui.addOrder(new Order('마티니', 10000, 1, '돌린 버무스, wet하게'));
  yui.addOrder(new Order('갓파더', 10000, 1, '올드 파'));
  yui.addOrder(new Order('옥토모어', 35000, 1, '이걸 왜 먹지'));
  yui.addOrder(new Order('올드 패션드', 15000, 1, '오렌지 떫은 맛 살려서'));
  yui.addOrder(new Order('롭 로이', 15000, 1, ''));
  yui.addOrder(new Order('네그로니', 15000, 1, ''));
  yui.addOrder(new Order('파우스트', 15000, 1, '이 손님 집에 보내야겠다'));
  expect(yui.total).toEqual(115000);

  const kyouko = new Customer('Kyouko');
  kyouko.addOrder(new Order('피냐 콜라다', 8000, 1));
  kyouko.addOrder(new Order('피치 크러쉬', 8000, 1));
  expect(kyouko.total).toEqual(16000);

  receipt.addCustomer(yui);
  receipt.addCustomer(kyouko);
  expect(receipt.total).toEqual(131000);

  receipt.removeCustomer(yui);
  try {
    receipt.removeCustomer(new Customer('akari'));
    expect(False).toBeTruthy();
  } catch (e) {
    expect(e instanceof ObjectNotFoundError).toBeTruthy();
  }
});
