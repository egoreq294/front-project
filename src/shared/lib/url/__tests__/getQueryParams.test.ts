import { getQueryParams } from '../getQueryParams';

describe('getQueryParams function test suite', () => {
  test('should return one parameter', () => {
    const params = getQueryParams({ test: 'value' });
    expect(params).toBe('?test=value');
  });

  test('should return multiple parameters', () => {
    const params = getQueryParams({ first: 'one', second: 'two' });
    expect(params).toBe('?first=one&second=two');
  });
});
