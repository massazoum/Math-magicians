import operate from '../logic/operate';

describe('Should return a result', () => {
  test('Should return 2 for 1 + 1', () => {
    const result = operate('1', '1', '+');
    expect(result).toBe('2');
  });

  test('Should return 0 for 1 - 1', () => {
    const result = operate('1', '1', '-');
    expect(result).toBe('0');
  });

  test('Should return 1 for 2 ÷ 2', () => {
    const result = operate('2', '2', '÷');
    expect(result).toBe('1');
  });

  test('Should return 0 for 2 % 2', () => {
    const result = operate('2', '2', '%');
    expect(result).toBe('0');
  });

  test('Should throw an error', () => {
    expect(() => operate('2', '2', ']')).toThrow(Error);
  });
});
