import { deepClone } from 'app/src/utils/ObjectUtils';

describe('ObjectUtils', () => {
  it('#deepClone should be deep clone object', () => {
    const obj1 = {
      coin: 'Lunes',
      currencies: [{ val: 10 }, { val: 20 }],
    };

    const obj2 = deepClone(obj1);
    obj2.currencies[0].val = 50;

    expect(obj1.currencies[0].val).toBe(10);
    expect(obj2.currencies[0].val).toBe(50);
    expect(1).toBe(deepClone(1));
  });
});
