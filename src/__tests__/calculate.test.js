import calculate from '../logic/calculate';

describe('Should return defined', () => {
  let obj;
  beforeEach(() => {
    obj = {
      total: null,
      next: null,
      operation: null,
    };
  });

  test('Should return an object whose properties have a null value', () => {
    const result = calculate(obj, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('Should return an empty object', () => {
    obj.next = '0';
    const result = calculate(obj, '0');
    expect(result).toEqual({});
  });

  test('Should update next', () => {
    obj.operation = '+';
    obj.next = '2';
    const result = calculate(obj, '2');
    expect(result).toEqual({ total: null, next: '22', operation: '+' });
  });

  test('Should update next when next is null', () => {
    obj.operation = '+';
    const result = calculate(obj, '2');
    expect(result).toEqual({ total: null, next: '2', operation: '+' });
  });

  test('Should return object with next defined', () => {
    const result = calculate(obj, '2');
    expect(result).toEqual({ next: '2', total: null });
  });

  describe('Should add period correctly', () => {
    test('Should not add more than one period', () => {
      obj.next = '12.3';
      const result = calculate(obj, '.');
      expect(result).toEqual({ total: null, next: '12.3', operation: null });
    });

    test('Should not add more than one period', () => {
      obj.next = '12';
      const result = calculate(obj, '.');
      expect(result).toEqual({ total: null, next: '12.', operation: null });
    });

    test('Should create a decimal after an operation is entered with no next value', () => {
      obj.operation = '+';
      const result = calculate(obj, '.');
      expect(result).toEqual({ total: null, next: '0.', operation: '+' });
    });

    test('Should not add a period to total if it has a period', () => {
      obj.total = '12.4';
      const result = calculate(obj, '.');
      expect(result).toEqual({});
    });

    test('Should add a period to total and value assigned as next if total does not have a period', () => {
      obj.total = '12';
      const result = calculate(obj, '.');
      expect(result).toEqual({ total: '12', next: '12.', operation: null });
    });

    test('should put a 0 infront if next/total is undefined', () => {
      const result = calculate(obj, '.');
      expect(result).toEqual({ total: null, next: '0.', operation: null });
    });
  });

  test('Should give result on =', () => {
    obj.next = '12';
    obj.total = '0';
    obj.operation = '+';
    const result = calculate(obj, '=');
    expect(result).toEqual({ total: '12', next: null, operation: null });
  });

  test('should change sign on next', () => {
    obj.total = '12';
    obj.next = '2';
    const result = calculate(obj, '+/-');
    expect(result).toEqual({ total: '12', next: '-2', operation: null });
  });

  test('should change sign on total', () => {
    obj.total = '12';
    const result = calculate(obj, '+/-');
    expect(result).toEqual({ total: '-12', next: null, operation: null });
  });
});
